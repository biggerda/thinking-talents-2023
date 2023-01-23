import React from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Example from "./components/Example";
import Form from "./components/Form";

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
      <Form></Form>
    </div>
  );
}

export default App;
