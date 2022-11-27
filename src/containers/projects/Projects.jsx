import React from 'react';
import './projects.css';
import { Infobar, Navbar } from '../../components';

const Projects = () => {
  return (
    <div className='website__projects'>
    <div className='website__projects-name'>
        Projects
    </div>
    <Infobar/>
    <Navbar/>
</div>
  )
}

export default Projects