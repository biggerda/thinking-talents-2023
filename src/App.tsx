import React from "react";
import "./App.css";
import logo from "./logo.svg";
import List from "./components/List";
import Navbar from "./components/Navbar";
import Example from "./components/Example";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>This is only the beginning!</p>
      </header>
      <Example></Example>
      <List></List>
    </div>
  );
}

export default App;
