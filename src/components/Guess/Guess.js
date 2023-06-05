import React from "react";
import { range } from "../../utils"

function Guess({ guess }) {
  const cells = guess
    ? guess.split('')
    : range(0,5).fill('')

  return (
    <p className="guess">
      {cells.map((letter, index) => {
        return (
          <span key={index} className="cell">{letter}</span>
        )
      })}
    </p>
  );
}

export default Guess;
