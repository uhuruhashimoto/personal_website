import React from 'react';
import './bio.css';
import { Infobar, Navbar } from '../../components';

const Bio = () => {
  return (
    <div className='website__bio' id='bio'>
      <div className='website__bio-name'>
        Uhuru Hashimoto
      </div>
      <Infobar className='website__bio-infobar'/>
      <Navbar className='website__bio-navbar'/>
    </div>
  )
}

export default Bio