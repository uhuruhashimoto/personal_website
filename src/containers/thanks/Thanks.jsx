import React from 'react';
import './thanks.css';
import { Infobar, Navbar } from '../../components';

const Thanks = () => {
  return (
    <div className='website__thanks'>
    <div className='website__thanks-name'>
      Thanks for Reading!
    </div>
    <Infobar/>
    <Navbar/>
  </div>
  )
}

export default Thanks