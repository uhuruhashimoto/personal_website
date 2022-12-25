import React from 'react';
import './thanks.css';
import { Infobar, Navbar } from '../../components';

const Thanks = () => {
  return (
    <div className='website__thanks'> 
    <div className='website__thanks-name'>
      Thanks for Reading!
    </div>
    <h1 className='website__thanks-infobar'>
      <Infobar/>
    </h1>
    <h2 className='website__thanks-navbar'>
      <Navbar/>
    </h2>
  </div>
  )
}

export default Thanks