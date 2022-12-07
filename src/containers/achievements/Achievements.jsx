import React from 'react';
import './achievements.css';
import { Infobar, Navbar } from '../../components';

const Achievements = () => {
  return (
    <div className='website__achievements' id='achievements' title="Crack climbing at Indian Creek">
    <div className='website__achievements-name'>
      Achievements
    </div>
    <h1 className='website__achievements-infobar'>
      <Infobar/>
    </h1>
    <h2 className='website__achievements-navbar'>
      <Navbar/>
    </h2>
  </div>
  )
}

export default Achievements