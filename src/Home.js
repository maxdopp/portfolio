import './App.css';
import React, { useState, useEffect } from 'react';
import TopNavBar from './Navbar';

const Home = () => {
  const [matrixStrings, setMatrixStrings] = useState(
    Array(20).fill('').map(() => generateInitialString(25))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMatrixStrings(matrixStrings.map(updateString));
    }, 50); // update every 50ms
    return () => clearInterval(intervalId);
  }, [matrixStrings]);

  return (
    <div className="Home">
      <TopNavBar/>
      <div className='container'>

      </div>
      <div className="matrix-effect top">
        {matrixStrings.map((string, index) => (
          <div key={index} className="matrix-string top">
            {string}
          </div>
        ))}
      </div>
      <div className="matrix-effect bottom">
        {matrixStrings.map((string, index) => (
          <div key={index} className="matrix-string bottom">
            {string}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;

const generateInitialString = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ';
  let result = '';

  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  const numSpaces = Math.floor(Math.random() * (length / 1.5)); // replace up to half of the string with spaces
  const spaceLocation = Math.floor(Math.random() * (length - numSpaces));

  result = ' '.repeat(numSpaces/2) + result.substring(0, spaceLocation) + ' '.repeat(numSpaces) + result.substring(spaceLocation + numSpaces + numSpaces/2, length - numSpaces/3) + ' '.repeat(numSpaces/2);
  return result;
};

const updateString = (string) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ';
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== ' ') {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    } else {
      result += ' ';
    }
  }

  return result;
};
/*
'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ'
'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ                             '

'1111111111111111111111111111111111111000000000000000000000000000000000000000001111111111111111100000000000000'
'1111111111111111111111111111111111111000000000000000000000000000000000000000001111111111111111100000000000000                             '
*/