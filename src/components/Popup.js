import React, { useEffect } from 'react';
import { status } from '../helpers/helpers';

//Popup component
const EndGame = ({correctLetters, incorrectLetters, chosenWord, setPlayable, playAgain}) => {
  let result = '';
  let revealWord = '';
  let playable = true;

  //if the status returned from the helper function is win, then stop the game and notify that you have won
  if( status(correctLetters, incorrectLetters, chosenWord) === 'win' ) {
    result = 'You won!';
    playable = false;

  //if the status returned from the helper function is lose, then stop the game and notify that you have lost  
  } else if( status(correctLetters, incorrectLetters, chosenWord) === 'lose' ) {
    result = 'You lost';
    revealWord = `...the correct word was: ${chosenWord}`;
    playable = false;
  }
  //play again
  useEffect(() => {
    setPlayable(playable);
  });

  return (
    <div className="popup-container" style={result !== '' ? {display:'flex'} : {}}>
      <div className="popup">
        <h2>{result}</h2>
        <h3>{revealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}

export default EndGame