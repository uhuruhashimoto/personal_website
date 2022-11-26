import React from 'react';
import './infobar.css';

const Infobar = () => {
  return (
    <div className="website__infobar">
        <div className="website__infobar-links">
            <div className="website__infobar-links_container">
            <p><a hfref="#home">Download Resume</a></p>
            <p><a hfref="https://github.com/uhuruhashimoto">GitHub</a></p>
            <p><a hfref="#home">Contact Me</a></p>
            </div>
        </div>
    </div>
  )
}

export default Infobar