import React from "react";



function Guesser({ onGuess }) {
  const [guess, setGuess] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ guess })
    onGuess(guess)
    setGuess("")
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        type="text"
        minLength={5}
        maxLength={5}
        pattern="[a-zA-Z]{5}"
        title="A 5 letter word"
        value={guess}
        onChange={event => {
          setGuess(event.target.value.toUpperCase());
        }}
      />
    </form>
  );
}

export default Guesser;
