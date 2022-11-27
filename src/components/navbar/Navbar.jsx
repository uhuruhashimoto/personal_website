import React from 'react';
import './navbar.css';

const Navbar = () => {
  return (
    <div className="website__navbar">
    <div className="website__navbar-links">
        <div className="website__navbar-links_container">
        <p><a href="#bio">Home</a></p>
        <p><a href="#projects">Projects</a></p>
        <p><a href="#experience">Experience</a></p>
        <p><a href="#achievements">Achievements</a></p>
        </div>
    </div>
</div>
  )
}

export default Navbar