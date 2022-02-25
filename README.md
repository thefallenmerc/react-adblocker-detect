# react-adblock-detector

[![npm version](https://badge.fury.io/js/react-adblock-detector.svg)](https://www.npmjs.com/package/react-adblock-detector)


[Live Demo Site](https://adblock-detect-react-test.netlify.app/)

## Description

Provides you with react hook to detect is an adblocker is enabled.

## Example

```javascript
import './App.css';
import React from 'react';
import { useAdblockDetector } from 'react-adblock-detector';

function App() {

  const [isAdblockCheckComplete, isAdblockerDetected] = useAdblockDetector();

  return (
    <div className="App">
      <header className="App-header">
        {
          isAdblockCheckComplete ? (
            isAdblockerDetected ? "We detected an adblocker" : "No adblocker detected"
          ) : "Checking for adblocker..."
        }
      </header>
    </div>
  );
}

export default App;

```

#### Last known good

react-adblock-detector@1.0.0 has been verified to work on the following browsers with version:

|               | Version   |
| ------------- | --------- |
| Chrome        | 88.0.4324 |
| Firefox       | 85.0.0    |
| Chromium Edge | 88.0.705  |
| Safari        | 14.0.2    |