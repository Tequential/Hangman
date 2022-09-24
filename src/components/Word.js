import React from 'react';

const Word = ({ chosenWord, correctLetters }) => {
//display the correct letters
  return (
    <div className="word">
      {chosenWord.split('').map((letter, i) => {
        return (
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word