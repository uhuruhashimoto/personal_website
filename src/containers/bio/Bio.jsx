import React from 'react';
import './bio.css';
import { lake } from '../imports';

const Bio = () => {
  return (
    <div classname='website__bio'>
      <background-img src={lake}/> 
      <div className='website__bio-name'>
        Uhuru Hashimoto
      </div>

    </div>
  )
}

export default Bio