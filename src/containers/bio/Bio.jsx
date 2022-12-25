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

// The following code, when uncommented, hides the hovertext after one second
// unfortunately, any event listener or dot function also blacks out the screen upon refresh.
// const image = document.getElementById('bio');

// image.addEventListener('mouseover', () => {
//   setTimeout(() => {
//     image.title = '';
//   }, 1000); // hide the hover text after 1 second
// });

// image.onmouseenter = function() {
//   image.title = 'Pea Soup Lake, in the Cascades, on a 2021 hike.';
// };

// other image titles: breadboard heart rate monitor, winter 2021, the pandemic road home, spring 2020, great view of the Flatirons outside of Boulder, summer 2022, 
// trad climbing on splitter cracks, Indian Creek, spring 2022
/*
* Option: Add responsive background image without the cover/fixed clipping, as per https://stackoverflow.com/questions/21786272/css-background-size-cover-background-attachment-fixed-clipping-background-im 
*/