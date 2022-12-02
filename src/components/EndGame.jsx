import React from "react";
// import { questionData } from "./data/questionData";
const EndGame = ({
  setIsStart,
  setEndGame,
  setCurrentQuestion,
  setInGame,
  setReviewGame,
  score,
  setScore,
  data,
}) => {
  const handleTryAgain = () => {
    setIsStart(true);
    setEndGame(false);
    setInGame(false);
    setCurrentQuestion(0);
    window.location.reload();
  };
  const handleReview = () => {
    setEndGame(false);
    setIsStart(false);
    setInGame(false);
    setReviewGame(true);
    setCurrentQuestion(0);
  };
  const scoreResult = 0;
  data.forEach((item, index) => {
    item.answers.forEach((item2, index2) => {
      if (item2.correct === true && item2.isChoose === true) {
        score += 1;
      }
    });
  });
  setScore(scoreResult);
  return (
    <div className="pt-16">
      <h1 className="endgame-title text-3xl text-white text-center">
        Your score is: <span className="font-bold">{score}</span>
      </h1>
      <div className="button-option flex justify-center items-center gap-x-10">
        <button
          onClick={handleTryAgain}
          className="try-again flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-green-300 hover:bg-green-500 hover:text-white mt-5 undefined"
        >
          Try again
        </button>
        <button
          onClick={handleReview}
          className="review flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-red-500 hover:bg-red-400 text-white mt-5 undefined "
        >
          Review
        </button>
      </div>
    </div>
  );
};

export default EndGame;
