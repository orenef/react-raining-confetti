import React from 'react';
import ReactDOM from 'react-dom';
import { ConfettiCanvas } from '../ConfettiCanvas';

ReactDOM.render(
  <>
    <h1 style={{ top: '50%', left: "50%", position: 'absolute' }}> It's confetti time!!! </h1>
   <ConfettiCanvas active={true} fadingMode="LIGHT" stopAfterMs={5000} />
  </>,
  document.getElementById('root'),
);
