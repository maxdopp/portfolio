import { Link } from "react-router-dom";
import React, {useState} from "react";
import './Navbar.css'

function TopNavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  return (
    <nav className='navbar'>
      <div className="logo">Logo</div>
      <div className="hamburger-menu" onClick={toggleMenu}>
        <div className={`menu-toggle ${isOpen ? 'open'  : ''}`}></div>
      </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
            <li><Link to="/" className="link">Home</Link></li>
            <li><Link to="/about" className="link">About</Link></li>
            <li><Link to="/projects" className="link">Projects</Link></li>
            <li><Link to="/contact" className="link">Contact</Link></li>
        </ul>
    </nav>
  );
}

export default TopNavBar;