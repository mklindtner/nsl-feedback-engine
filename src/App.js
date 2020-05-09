import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


//need to change onChange to take addtional parameters
//link: https://stackoverflow.com/questions/44917513/passing-an-additional-parameter-with-an-onchange-event
const quotes = [
  { button1: 'svar1' },
  { button2: 'svar2' },
  { button3: 'svar3' },
];


function App() {

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feedback">About</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/feedback" render={() => <Feedback collectionId={"123"} args={quotes} email="test123" />} />
          <Route path="/">
            <Buttons />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Buttons() {
  return (
    <div>
      <button type="button" id="svar1">Click Me1!</button>
      <button type="button" id="svar2">Click Me2!</button>
      <button type="button" id="svar3">Click Me3!</button>
      <input type="email" id="username" value="hansen@email.com" />
    </div>);
}


class Feedback extends React.Component {
  constructor(props) {
    super(props);
  }


  nslXmlRequest(answerNum, button) {
    button.addEventListener("click", () => {
      var req = new XMLHttpRequest();
      req.open("POST", "https://feedbackengine002.azurewebsites.net/api/OutputTableNsl002");
      req.setRequestHeader("Content-type", "application/json");
      console.log(this.collectionId);
      var data = JSON.stringify({
        "CollectionId": this.props.collectionId, "email": this.props.email,
        "answerNumber": answerNum, "answerText": button.innerHTML
      });
      req.send(data);
      button.style.display = "none";

      console.log(data);

    });
  }
  // collectionId = document.currentScript.getAttribute("collectionId");
  // email = document.getElementById(document.currentScript.getAttribute("userId"));
  render() {
    for (var i = 1; i <= arguments.length; i++) {
      // var tmp = document.currentScript.getAttribute("button" + i);
      // var tmp2 = document.getElementById(tmp);
      var tmp = arguments["button" + i];
      nslXmlRequest(i, tmp);
    }
    return Buttons();
  }
}


export default App;

/*
<div className="App">
      <body className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <button type="button" id="svar1">Click Me1!</button>
        <button type="button" id="svar2">Click Me2!</button>
        <button type="button" id="svar3">Click Me3!</button>
        <input type="email" id="username" value="hansen@email.com" onChange="feedback"></input>

      </body>
    </div>

*/
