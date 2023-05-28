import React from 'react';
import './Photoslide.css';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

function Photoslide() {
  const slideImages = [
    'https://i.pinimg.com/564x/9c/53/18/9c53181014e699d083c665b8dfc979a8.jpg',
    'https://i.pinimg.com/564x/2f/08/0c/2f080c90b1967b221894c738eda67b57.jpg',
    'https://i.pinimg.com/564x/11/d1/70/11d1700ed8b120915006ffe6d34b0fdb.jpg',
  ];

  return (
    <div className='slide-container'>
      <Slide>
        {slideImages.map((image, index) => (
          <div className='each-slide' key={index}>
            <img src={image} alt={`Slide ${index}`} className='slide_image' />
          </div>
        ))}
      </Slide>
    </div>
  );
}

// function Photoslide() {
//   return (
//     <div className='photos'>
//         <img class="slide_image" src='https://i.pinimg.com/564x/9c/53/18/9c53181014e699d083c665b8dfc979a8.jpg' alt='mera'/>
//         <img class="slide_image" src='https://i.pinimg.com/564x/2f/08/0c/2f080c90b1967b221894c738eda67b57.jpg' alt='mtra'/>
//         <img class="slide_image" src='https://i.pinimg.com/564x/11/d1/70/11d1700ed8b120915006ffe6d34b0fdb.jpg' alt='mera'/>
//     </div>
//   )
// }

export default Photoslide;
