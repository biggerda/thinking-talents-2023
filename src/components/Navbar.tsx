import  './Navbar.css';
import React from "react";
import nwoLogo from '../assets/images/nwo-logo.png';

function Navbar() {
    return (
        <div id="page-header">
            <img src={nwoLogo} alt="No Way Out Official Logo"/>
            <p>Welcome!</p>
        </div>
    );
}

export default Navbar;