import React from "react";

function Banner({ status, answer, guesses }) {
  switch (status) {
    case "win":
      return (
        <div className="happy banner">
          <p>
            <strong>Congratulations!</strong> Got it in {' '}
            <strong>{guesses.length} guess(es)</strong>.
          </p>
        </div>
      )
    case "lose":
      return (
        <div className="sad banner">
          <p>Sorry, the correct answer is <strong>{answer}</strong>.</p>
        </div>
      )
    default:
      return null
  }
}

export default Banner;
