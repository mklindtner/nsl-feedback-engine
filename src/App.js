import React from 'react';
import logo from './logo.svg';
import './App.css';
import feedback from "./feedback";

//need to change onChange to take addtional parameters
//link: https://stackoverflow.com/questions/44917513/passing-an-additional-parameter-with-an-onchange-event

function App() {
  return (
    <div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button type="button" id="svar1">Click Me1!</button>
        <button type="button" id="svar2">Click Me2!</button>
        <button type="button" id="svar3">Click Me3!</button>
        <input type="email" id="username" value="hansen@email.com" onChange="feedback"></input>    
        
      </body>
    </div>
  );
}


export default App;
