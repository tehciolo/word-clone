import React from "react";



function Guesser() {
  const [guess, setGuess] = React.useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log({ guess })
    setGuess("")
  }

  return (
    <form onSubmit={handleSubmit} className="guess-input-wrapper">
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        required
        type="text"
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
