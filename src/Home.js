import './App.css';
import React, { useState, useEffect } from 'react';
import TopNavBar from './Navbar';

const Home = () => {
  const [matrixStrings, setMatrixStrings] = useState(
    Array(30).fill('').map(() => randomString(48))
  );

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMatrixStrings(matrixStrings.map(currentItem => randomString(48, currentItem)));
    }, 30); // update every 50ms
    return () => clearInterval(intervalId);
  }, [matrixStrings]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMatrixStrings(matrixStrings.map(() => generateWhitespace(48)));
    }, 5000); // update whitespaces every 100ms
    return () => clearInterval(intervalId);
  }, [setMatrixStrings]);

  return (
    <div className="App">
      <TopNavBar/>
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
      <img src='https://i.redd.it/ebozhm1obw691.jpg'/>
    </div>
  );
};

export default Home;

const generateWhitespace = (length) => {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ                             ';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  // Replace a random number of characters at the end with spaces
  const numSpaces = Math.floor(Math.random() * (length / 2)); // replace up to half of the string with spaces
  const spaceLocation = Math.floor(Math.random() * (length -  numSpaces));

  result = ' '.repeat(numSpaces/2) + result.substring(0, spaceLocation) + ' '.repeat(numSpaces) + result.substring(spaceLocation + numSpaces, length - numSpaces/4) + ' '.repeat(numSpaces/2);
  return result;
};

const randomString = (length, string) => {
  console.log([typeof string, string]);
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ';
  let result = '';
  for (let i = 0; i < length; i++) {
    if ((typeof string === 'string') && (string.split("")[i] != ' ')) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    else{
      result += ' ';
    }
  }
  return result;
}

/*
'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ'
'abcdefghijklmnopqrstuvwxyz0123456789アイウエオガギグゲゴザジズゼゾダヂツテトナヌノバヒピブヘペボマムモヤユヨリレヮヰヲヴヶヸヺ                             '

'1111111111111111111111111111111111111000000000000000000000000000000000000000001111111111111111100000000000000'
'1111111111111111111111111111111111111000000000000000000000000000000000000000001111111111111111100000000000000                             '
*/