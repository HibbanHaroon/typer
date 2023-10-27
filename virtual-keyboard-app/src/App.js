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

export default App;
