import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesser from '../Guesser';
import GuessList from '../GuessList';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus] = React.useState("play")

  const recordGuess = guess => {
    setGuesses([...guesses, guess])
    if (guess === answer) {
      setStatus("win")
    } else if (guesses.length === NUM_OF_GUESSES_ALLOWED - 1) {
      setStatus("lose")
    }
  }

  return <>
    <GuessList guesses={guesses} answer={answer} />
    <Guesser onGuess={recordGuess} status={status} />
    <Banner status={status} answer={answer} guesses={guesses} />
  </>;
}

export default Game;
