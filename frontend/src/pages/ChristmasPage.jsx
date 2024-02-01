import React, { useState } from "react";

function ChristmasPage() {
  const [userGuess, setUserGuess] = useState("");
  const [result, setResult] = useState("");
  const [hasWon, setHasWon] = useState(false);

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  const handleGuess = () => {
    const guess = parseInt(userGuess, 10);

    if (Number.isNaN(guess) || guess < 1 || guess > 5) {
      setResult("Please enter a valid number between 1 and 5");
    } else if (guess === randomNumber) {
      setResult("Congratulations! You've won a badge!");
      setHasWon(true);
    } else {
      setResult("Sorry, better luck next time!");
    }
  };

  return (
    <div>
      <h1 className="santalist">Christmas game</h1>
      <div className="gameCategory">
        <div className="santalist-container">
          <p className="game-paragraphe">Guess a number between 1 and 5:</p>
          <div className="game">
            <input
              type="text"
              value={userGuess}
              className="input-game"
              onChange={(e) => setUserGuess(e.target.value)}
            />
            <button type="button" className="button-game" onClick={handleGuess}>
              Submit
            </button>
          </div>
          <p>{result}</p>

          {hasWon && (
            <div>
              <img
                src="https://img.icons8.com/fluency/48/guarantee.png"
                alt="guarantee"
                className="image-badge"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ChristmasPage;
