import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Figure from './components/Figure';
import IncorrectLetters from './components/IncorrectLetters';
import Word from './components/Word';
import Notification from './components/Notification';
import { showNotification as show, checkWin } from './helpers/helpers';
import dictionary from './dictionary.txt'
import './App.css';
import EndGame from './components/Popup';

//read words from the dictionary.txt file
//select only words that are longer than 4 characters and then choose a random word from the array
function fetchWords(onSuccess, setRequest) {
  let request = new Request(dictionary);
  let chosen= '';
  setRequest(true);
  fetch(request)
  .then(function(response) {
    return response.text().then(function(text) {
      let result = text;
      var letters = /^[A-Za-z]+$/;
      const allWords = result.split(/\r?\n/);
      const newWords = allWords.filter(word => word.length > 4 && word.match(letters));
      chosen = newWords[Math.floor(Math.random() * newWords.length)];
      console.log(chosen);
      onSuccess(chosen.toLowerCase());
    });
  });
}

function App() {
  //set state variables
  const [playable, setPlayable] = useState(false);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [showNotification, setShowNotification] = useState(false);
  const [chosenWord, setWord] = useState("");
  const [makingRequest, setRequest] = useState(false);
  
  //when the page first renders, set a word 
  useEffect(() => {
      fetchWords(setWord, setRequest)
  }, [])

  /*only when a key is pressed:
  if a correct letter is chosen: 
  Once - add it to the correct letter array. 
  Twice - show a notification that it has already been used
  if an incorrect letter is chosen: 
  Once - add it to the incorrect letter array. 
  Twice - show a notification that it has already been used */
  
  useEffect(() => {
    const handleKeydown = event => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (chosenWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        } else {
          if (!incorrectLetters.includes(letter)) {
            setIncorrectLetters(currentLetters => [...currentLetters, letter]);
          } else {
            show(setShowNotification);
          }
        }
      }
    }
    window.addEventListener('keydown', handleKeydown);

    return () => window.removeEventListener('keydown', handleKeydown);
  }, [correctLetters, incorrectLetters, playable, chosenWord]);

  //to play again, empty the arrays and fetch a new word
  function playAgain() {
    setPlayable(true);
    setCorrectLetters([]);
    setIncorrectLetters([]);
    fetchWords(setWord, setRequest)
  }

  //render the components
  return (
    <>
      <Header />
      <div className="game-container">
        <Figure incorrectLetters={incorrectLetters} />
        <IncorrectLetters incorrectLetters={incorrectLetters} />
        <Word chosenWord={chosenWord} correctLetters={correctLetters} />
      </div>
      <EndGame correctLetters={correctLetters} incorrectLetters={incorrectLetters} chosenWord={chosenWord} setPlayable={setPlayable} playAgain={playAgain} />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;