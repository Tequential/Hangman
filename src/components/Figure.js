import React from 'react'
//figure component
const Figure = ({ incorrectLetters }) => {
  const errors = incorrectLetters.length
  let imgClass = 'img1';
  //return a different hangman image based on the number of incorrect letters entered
  switch(errors) {
    case 10: imgClass = "img11";
    break;
    case 9: imgClass = "img10";
    break;
    case 8: imgClass = "img9";
    break;
    case 7: imgClass = "img8";
    break;
    case 6: imgClass = "img7";
    break;
    case 5: imgClass = "img6";
    break;
    case 4: imgClass = "img5";
    break;
    case 3: imgClass = "img4";
    break;
    case 2: imgClass = "img3";
    break;
    case 1: imgClass = "img2";
    break;
  }

  //return the image with the matching CSS class
  return (
   <img height="250" width="200" className={imgClass}>
  </img>
  )
}

export default Figure