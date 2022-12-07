import React from 'react';
import './experience.css';
import { Infobar, Navbar } from '../../components';

const Experience = () => {
  return (
    <div className='website__experience' id='experience' title="A breadboard heart rate monitor">
    <div className='website__experience-name'>
      Experience
    </div>
    <h1 className='website__experience-infobar'>
      <Infobar/>
    </h1>
    <h2 className='website__experience-navbar'>
      <Navbar/>
    </h2>
  </div>
  )
}

export default Experience