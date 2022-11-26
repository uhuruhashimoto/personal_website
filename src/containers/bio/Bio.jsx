import React from 'react';
import './bio.css';
import { Infobar, Navbar } from '../../components';

const Bio = () => {
  return (
    // <body>
    //   <div classname='website__bio'>
    //     <div className='website__bio-name'>
    //       <h1>Uhuru Hashimoto</h1>
    //     </div>
    //   </div>
    // </body>
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