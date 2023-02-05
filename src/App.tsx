import React, { useState } from "react";
import "./App.css";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import Example from "./components/Example";
import Form from "./components/Form";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

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
      {isOpen && <Form handleClose={toggleIsOpen}></Form>}
      <button
        className="btn btn-dark m-2"
        onClick={(e) => {
          e.stopPropagation();
          toggleIsOpen();
        }}
      >
        New Team Member
      </button>
      <Example></Example>
    </div>
  );
}

export default App;
