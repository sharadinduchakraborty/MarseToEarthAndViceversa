import React, { useState } from 'react';

const EarthToMars = () => {
  const [englishMessage, setEnglishMessage] = useState('');
  const [marsNumeric, setMarsNumeric] = useState('');

  const handleEnglishMessageChange = (event) => {
    setEnglishMessage(event.target.value);
  };

  const convertToMarsNumeric = () => {
    const charMap = {
        'a': '2', 'b': '22', 'c': '222',
        'd': '3', 'e': '33', 'f': '333',
        'g': '4', 'h': '44', 'i': '444',
        'j': '5', 'k': '55', 'l': '555',
        'm': '6', 'n': '66', 'o': '666',
        'p': '7', 'q': '77', 'r': '777', 's': '7777',
        't': '8', 'u': '88', 'v': '888',
        'w': '9', 'x': '99', 'y': '999', 'z': '9999',
        ' ': '0'
    };
    let numericMessage = '';
    for (let i = 0; i < englishMessage.length; i++) {
      const char = englishMessage[i].toLowerCase();
      if (charMap[char]) {
        if (numericMessage.endsWith(charMap[char][0])) {
          numericMessage += ' ';
        }
        numericMessage += charMap[char];
      }
    }

    setMarsNumeric(numericMessage);
  };

  return (
    <div>
      <h2>Earth to Mars Communication</h2>
      <textarea
        placeholder="Enter your message here"
        value={englishMessage}
        onChange={handleEnglishMessageChange}
      />
      <button onClick={convertToMarsNumeric}>Convert</button>
      <p>Mars Numeric: {marsNumeric}</p>
    </div>
  );
};

export default EarthToMars;
