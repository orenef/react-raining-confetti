export type FadingMode = 'DARK' | 'LIGHT' | 'OFF';

/**
 * Confetti particle class
 */
export class ConfettiParticle {
	context: CanvasRenderingContext2D | null;
	width: number;
	height: number;
	color: number;
	lightness: number;
	diameter: number;
	tilt: number;
	tiltAngleIncrement: number;
	tiltAngle: number;
	particleSpeed: number;
	waveAngle: number;
	x: number;
	y: number;
	fading: FadingMode;
	
	constructor( context: CanvasRenderingContext2D | null, width: number, height: number, fading: FadingMode) {
		this.context = context;
		this.width = width;
		this.height = height;
		this.color = 0;
		this.lightness = 50; 
		this.diameter = 0;
		this.tilt = 0;
		this.tiltAngleIncrement = 0;
		this.tiltAngle = 0;
		this.particleSpeed = 1;
		this.waveAngle = 0;
		this.x = 0;
		this.y = 0;
		this.fading = fading;
		this.reset();
	}
	
	reset() {
		this.lightness = 50;
		this.color = Math.floor(Math.random() * 360); 
		this.x = Math.random() * this.width;
		this.y = Math.random() * this.height - this.height;
		this.diameter = Math.random() * 6 + 4;
		this.tilt = 0;
		this.tiltAngleIncrement = Math.random() * 0.1 + 0.04;
		this.tiltAngle = 0;
	}
	
	darken() {
	  if (this.y < 100 || this.lightness <= 0){
		return; 
	  }
	  this.lightness -= (250 / this.height); 
	}

	lighter() {
		if (this.y < 100 || this.lightness >= 100){
			return; 
		}
		this.lightness += (250 / this.height); 
	}
	
	update() {
		this.waveAngle += this.tiltAngleIncrement;
		this.tiltAngle += this.tiltAngleIncrement;
		this.tilt = Math.sin(this.tiltAngle) * 12;
		this.x += Math.sin(this.waveAngle);
		this.y += (Math.cos(this.waveAngle) + this.diameter + this.particleSpeed) * 0.4;
		if (this.complete()) {
			this.reset(); 
		}
		switch (this.fading) {
			case 'DARK':
				this.darken();
				break;
			case 'LIGHT':
				this.lighter();
				break;
			default:
				break;
		}
	}
	
	complete() {
	  return (this.y > this.height + 20);
	}
	
	draw() {
	  let x = this.x + this.tilt;
	  if (this.context) {
		this.context?.beginPath();
		this.context.lineWidth = this.diameter;
		this.context.strokeStyle = `hsl(${this.color}, 50%,${this.lightness}%)`;
		this.context.moveTo(x + this.diameter / 2, this.y);
		this.context.lineTo(x, this.y + this.tilt + this.diameter / 2);
		this.context.stroke();
	  }
	}
}
