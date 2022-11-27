import React from 'react';
import './experience.css';
import { Infobar, Navbar } from '../../components';

const Experience = () => {
  return (
    <div className='website__experience' id='experience'>
    <div className='website__experience-name'>
      Experience
    </div>
    <Infobar className='website__experience-infobar'/>
      <Navbar className='website__experience-navbar'/>
  </div>
  )
}

export default Experience