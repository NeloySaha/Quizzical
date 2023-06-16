import React from "react";

export const HomePage = ({ toggleHome }) => {
  return (
    <div className="body-part">
      <p className="title">Quizzical</p>
      <p className="description">Test yourself in a few seconds</p>

      <button className="quiz-start" onClick={toggleHome}>
        Start quiz
      </button>
    </div>
  );
};
