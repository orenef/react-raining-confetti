# react-raining-confetti
![npm](https://img.shields.io/npm/v/react-raining-confetti) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-raining-confetti) ![GitHub top language](https://img.shields.io/github/languages/top/orenef/react-raining-confetti) ![npm](https://img.shields.io/npm/dt/react-raining-confetti) ![NPM](https://img.shields.io/npm/l/react-raining-confetti) ![Snyk Vulnerabilities for GitHub Repo](https://img.shields.io/snyk/vulnerabilities/github/orenef/react-raining-confetti)

react-raining-confetti is a react base component that add raining confetti to your application using canvas. with zero dependencies.

[See demo at codesandbox](https://codesandbox.io/s/react-raining-confetti-di1zq)
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-raining-confetti) to install .

```bash
npm i react-raining-confetti 
```

## Usage

```jsx
import React from "react";
import { ConfettiCanvas } from "react-raining-confetti";

export default function App() {
  return (
    <div className="App">
        <h1 style={{ top: '50%', left: "50%", position: 'absolute' }}> It's confetti time!!! </h1>
        <ConfettiCanvas active={true} fadingMode="LIGHT" stopAfterMs={5000} />
    </div>
  );
}
```

props| type | default value| info
--- | --- | --- | ---
active | boolean | true | Use to confetti start/stop falling
fading | 'OFF', 'LIGHT', 'DARK' | 'OFF' | Fading confetti color
stopAfterMs | number | 0 | Time in ms to auto stop the confetti, should be larger than 1000 to cool effect and 0 to disabled autostop.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[MIT](https://choosealicense.com/licenses/mit/)
