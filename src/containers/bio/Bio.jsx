import React from 'react';
import './bio.css';
import { Infobar, Navbar } from '../../components';

const Bio = () => {
  return (
    <div className='website__bio' id='bio'>
      <div className='website__bio-name'>
        Uhuru Hashimoto
      </div>
      <h1 className='website__bio-infobar'>
        <Infobar/>
      </h1>
      <h2 className='website__bio-navbar'>
        <Navbar/>
      </h2>
    </div>
  )
}

export default Bio