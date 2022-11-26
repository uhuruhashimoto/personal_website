import React from 'react';
import './bio.css';
import { Infobar, Navbar } from '../../components';

const Bio = () => {
  return (
    <div className='website__bio'>
      <div className='website__bio-name'>
        Uhuru Hashimoto
      </div>
      <Infobar/>
      <Navbar/>
    </div>
  )
}

export default Bio