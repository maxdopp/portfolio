import { Link } from "react-router-dom";
import React from "react";

function TopNavBar() {
  return (
    <div className='navbar'>
        <ul>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/projects" className="link">Projects</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
        </ul>
    </div>
  );
}

export default TopNavBar;