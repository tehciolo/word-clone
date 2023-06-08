import React from 'react';

import { sample } from '../../utils';
import { WORDS } from '../../data';
import Guesser from '../Guesser';
import GuessList from '../GuessList';
import Banner from '../Banner';
import { NUM_OF_GUESSES_ALLOWED } from "../../constants"

function Game() {
  const [answer, setAnswer] = React.useState(sample(WORDS))
  const [guesses, setGuesses] = React.useState([])
  const [status, setStatus] = React.useState("play")

  const recordGuess = guess => {
    const nextGuesses = [...guesses, guess]
    setGuesses(nextGuesses)
    if (guess === answer) {
      setStatus("win")
    } else if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setStatus("lose")
    }
  }

  const restartGame = () => {
    setGuesses([])
    setStatus("play")
    const newAnswer = sample(WORDS)
    setAnswer(newAnswer)
    console.info({newAnswer})
  }

  return <>
    {status !== "play" && <button onClick={restartGame}>Restart</button>}
    <GuessList guesses={guesses} answer={answer} />
    <Guesser onGuess={recordGuess} status={status} />
    <Banner status={status} answer={answer} guesses={guesses} />
  </>;
}

export default Game;
