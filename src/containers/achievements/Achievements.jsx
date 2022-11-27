import React from 'react';
import './achievements.css';
import { Infobar, Navbar } from '../../components';

const Achievements = () => {
  return (
    <div className='website__achievements' id='achievements'>
    <div className='website__achievements-name'>
      Achievements
    </div>
    <Infobar/>
    <Navbar/>
  </div>
  )
}

export default Achievements