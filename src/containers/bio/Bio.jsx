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
      {/* <h2 className='website__bio-navbar'>
        <Navbar/>
      </h2> */}
    </div>
  )
}

/*
* Option: Add responsive background image without the cover/fixed clipping, as per https://stackoverflow.com/questions/21786272/css-background-size-cover-background-attachment-fixed-clipping-background-im 
*/

export default Bio