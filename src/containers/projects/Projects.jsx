import React from 'react';
import './projects.css';
import { Infobar, Navbar } from '../../components';

const Projects = () => {
  return (
    <div className='website__projects' id='projects'>
    <div className='website__projects-name'>
        Projects
    </div>
    <h1 className='website__projects-infobar'>
        <Infobar/>
      </h1>
      <h2 className='website__projects-navbar'>
        <Navbar/>
      </h2>
</div>
  )
}

export default Projects