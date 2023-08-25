import React, { useState } from 'react';

const MarsToEarth = () => {
  const [marsNumeric, setMarsNumeric] = useState('');
  const [earthMessage, setEarthMessage] = useState('');

  const handleMarsNumericChange = (event) => {
    setMarsNumeric(event.target.value);
  };

  const convertToEarthMessage = () => {
    const numMap = {
        '2': 'a', '22': 'b', '222': 'c',
        '3': 'd', '33': 'e', '333': 'f',
        '4': 'g', '44': 'h', '444': 'i',
        '5': 'j', '55': 'k', '555': 'l',
        '6': 'm', '66': 'n', '666': 'o',
        '7': 'p', '77': 'q', '777': 'r', '7777': 's',
        '8': 't', '88': 'u', '888': 'v',
        '9': 'w', '99': 'x', '999': 'y', '9999': 'z',
        '0': ' '
    };

    const numericArray = marsNumeric.split(' ');
    let englishMessage = '';
    for (let i = 0; i < numericArray.length; i++) {
      if (numMap[numericArray[i]]) {
        englishMessage += numMap[numericArray[i]];
      }
    }

    setEarthMessage(englishMessage);
  };

  return (
    <div>
      <h2>Mars to Earth Communication</h2>
      <textarea
        placeholder="Enter numeric series here"
        value={marsNumeric}
        onChange={handleMarsNumericChange}
      />
      <button onClick={convertToEarthMessage}>Convert</button>
      <p>Earth Message: {earthMessage}</p>
    </div>
  );
};

export default MarsToEarth;
