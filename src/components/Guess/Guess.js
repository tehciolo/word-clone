import React from "react";
import { range } from "../../utils"
import { checkGuess } from "../../game-helpers"

function Guess({ guess, answer }) {
  const cells = guess
    ? checkGuess(guess, answer)
    : range(5).fill({})

  return (
    <p className="guess">
      {cells.map(({letter, status}, index) => {
        const className = ["cell", status].filter(Boolean).join(" ")
        return (
          <span key={index} className={className}>{letter || ""}</span>
        )
      })}
    </p>
  );
}

export default Guess;
