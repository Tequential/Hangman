import React, { useState } from 'react'

// Header component
const Header = () => {
  const [popup, setPopup] = useState(false);
  
  //set the state that will show the help popup
  const openHelp = () => {
    setPopup(!popup);
  };

  //set the state that will hide the help popup
  const closeHelp = () => {
    setPopup(false);
  };

  return (
    <>
      <h1>Hangman</h1>
      <p>Guess the word - use your keyboard to enter a letter:</p>
      <button className="btn" onClick={openHelp}>        
          Help
        </button>
      <div>
        {popup ? 
          <div className="help-container">
            <div className="popup">
                <h1>Rules</h1>
                <br></br>
                <p>At the start of the game, a random word will be chosen from a dictionary.</p>
                <p>You can then start to guess the word, letter by letter with your keyboard.</p>
                <p>Each incorrect letter you enter will add an image to the drawing</p>
                <p>Once the drawing is complete (a complete hanged man) you will have lost the game</p>
                <p>You can play as many times as you like!</p>
                <button onClick={closeHelp}>close</button>
            </div>
          </div>
         : ''}
      </div>
    </>
  )
}

export default Header
