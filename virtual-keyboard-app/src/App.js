// App.js
import React from 'react';
import VirtualKeyboard from './components/VirtualKeyboard';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <h1>Welcome to My Virtual Keyboard App</h1>
      <div className="center-container">
        <VirtualKeyboard />
      </div>
    </div>
  );
};

// Things to do:
/** 
 * 1. Add a button on the top right to change themes such as black, silver, orange, pink, etc.
 * 2. Add a textfield to type in real time. Textfield should be just one line with a cool Time New Roman type font
 * 3. Make the site responsive, that is the keyboard should scale up and down.
 * **/

export default App;
