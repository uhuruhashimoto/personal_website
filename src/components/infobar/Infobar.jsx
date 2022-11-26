import React from 'react';
import './infobar.css';

const Infobar = () => {
  return (
    <div className="website__infobar">
        <div className="website__infobar-links">
            <div className="website__infobar-links_container">
            <p><a href="/src/assets/Hashimoto_Resume.pdf" download="Hashimoto_Resume.pdf">Download Resume</a></p>
            <p><a href="https://github.com/uhuruhashimoto">GitHub</a></p>
            <p><a href="mailto:uhuru.g.hashimoto.23@dartmouth.edu">Contact Me</a></p>
            </div>
        </div>
    </div>
  )
}

export default Infobar