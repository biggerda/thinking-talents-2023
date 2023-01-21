import "./Navbar.css";
import React, { Component } from "react";
import nwoLogo from "../assets/images/nwo-logo.png";

class Navbar extends Component {
  render() {
    return (
      <div id="page-header">
        <img src={nwoLogo} alt="No Way Out Official Logo" />
        <p>Welcome!</p>
      </div>
    );
  }
}

export default Navbar;
