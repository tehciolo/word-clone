import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesser from '../Guesser';
import GuessList from '../GuessList';

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])

  const recordGuess = guess => setGuesses([...guesses, guess])

  return <>
    <GuessList guesses={guesses}/>
    <Guesser onGuess={recordGuess} />
  </>;
}

export default Game;
