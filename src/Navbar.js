import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import { FaBars, FaTimes } from "react-icons/fa";
import "./About.css";
import Portfolio from "./Portfolio";


const NavBar = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleNavbar = () => {
      setOpen(!isOpen);
    
      // Start the second animation after a delay when opening
      if (!isOpen) {
        document.getElementById('burger').classList.add('st-1');
        setTimeout(() => {
          document.getElementById('burger').classList.add('st-2');
        }, 400); // Add a delay to match the duration of the first animation
      } else {
        // Remove the "st-2" class after a brief pause when closing
        setTimeout(() => {
          document.getElementById('burger').classList.remove('st-2');
    
          // Close the navbar after another short delay
          setTimeout(() => {
            document.getElementById('burger').classList.remove('st-1');
            setOpen(false);
          }, 400); // Add a brief pause before closing st-1
        }, 100); // Add a brief pause before removing st-2
      }
    };

    return (
        <header id="page-header" className={isOpen ? "active" : "hidden"}>
      
        <nav className="nav-links">
       
          <a title="about" href="/" className="active">
            <span>About</span>
          </a>
          <a title="web portfolio" href='/portfolio'>
            <span >
              Portfolio
            </span>
          </a>
          <a title="contact" href="/contact">
            <span>Contact</span>
          </a>
          <a title="projects" href="/project1">
            <span>Player Projector App</span>
          </a>
        </nav>
        <div id='burger' className={`burger hover ${isOpen ? '' : ''}`} onClick={toggleNavbar} >
          <i></i>
          <i></i>
          <i></i>
        </div>
      </header>
    );
};

export default NavBar;