import React, { Fragment } from "react";
import { useCountdown } from "react-countdown-circle-timer";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const InGame = ({
  data,
  currentQuestion,
  setCurrentQuestion,
  setData,
  setEndGame,
  setIsStart,
  setInGame,
  setReviewGame,
}) => {
  const children = ({ remainingTime }) => {
    const minutes = Math.floor((remainingTime % 3600) / 60);
    const seconds = remainingTime % 60;
    if (seconds < 10) {
      return (
        <div className="text-blue-800 font-bold text-[18px]">{`0${minutes}:0${seconds}`}</div>
      );
    }
    return (
      <div className="text-blue-800 font-bold text-[18px]">{`0${minutes}:${seconds}`}</div>
    );
  };
  const handleNextQuestion = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };
  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleChoose = (indexData, e) => {
    const newData = [...data];
    newData[currentQuestion].answers.forEach((item, index) => {
      item.isChoose = false;
    });

    if (indexData === Number(e.target.dataset.index)) {
      newData[currentQuestion].answers[indexData].isChoose = true;
    }
    setData(newData);
  };
  const handleSubmit = (e, data) => {
    if (confirm("Do you want to submit?")) {
      setEndGame(true);
      setIsStart(false);
      setInGame(false);
    }
  };
  return (
    <Fragment>
      <div className="in-game max-w-[724px] mx-auto pt-[48px]">
        <div className="game-btn play flex justify-center items-center gap-4">
          <button
            onClick={handlePrevQuestion}
            className={`flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md false w-32 ${
        currentQuestion === 0
          ? "bg-gray-200 hover:bg-gray-200 text-gray-300"
          : "bg-gray-500 hover:bg-gray-300 text-white w-32"
      }`}
          >
            Previous
          </button>
          <button
            onClick={handleNextQuestion}
            className={`flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md ${
        currentQuestion === data.length - 1
          ? "bg-gray-200 hover:bg-gray-200 text-gray-300 w-32"
          : "bg-green-300 hover:bg-green-500 hover:text-white w-32 false"
      }`}
          >
            Next
          </button>
          {currentQuestion === data.length - 1 ? (
            <button
              onClick={(e) => handleSubmit(e)}
              className={`flex items-center 
			justify-center py-3 px-6 text-lg 
			font-bold  rounded-lg
			shadow-md bg-yellow-500 hover:bg-yellow-400 text-white w-32 undefined 
      }`}
            >
              Submit
            </button>
          ) : (
            ""
          )}
        </div>

        <div className="relative game-question bg-white pt-16 px-4 rounded-lg mt-16 pb-16">
          <div className="absolute top-0 left-2/4 transform -translate-y-2/4 -translate-x-2/4  timer rounded-full w-[90px] h-[90px] flex items-center justify-center text-[#rgb(79, 70, 229)] bg-white">
            <CountdownCircleTimer
              isPlaying
              colors={["rgb(79, 70, 229)", "#F7B801", "#A30000", "#A30000"]}
              colorsTime={[10, 5, 2, 0]}
              rotation="counterclockwise"
              size={100}
              duration={90}
              onComplete={() => {
                // do your stuff here
                setInGame(false);
                setIsStart(false);
                setReviewGame(false);
                setEndGame(true);
              }}
            >
              {children}
            </CountdownCircleTimer>
          </div>
          <h2 className="question-number text-center w-full font-semibold text-blue-500 text-xl mb-8">
            Question <span>{currentQuestion + 1}</span>/<span>5</span>
          </h2>
          <p className="question-main text-center font-bold text-2xl text-black">
            {data[currentQuestion]?.question_content}
          </p>
        </div>
        <ul className="list-answer rounded-lg py-10 px-16">
          {data[currentQuestion].answers.map((item, index) => (
            <li
              onClick={(e) => handleChoose(index, e)}
              data-index={index}
              key={index}
              className={`rounded-md flex items-center shadow-md my-3 py-4 px-4 cursor-pointer duration-50 bg-white mx-auto border-2 hover:bg-indigo-900 hover:text-white
			undefined text-xl ${item.isChoose ? "bg-indigo-900 text-white" : ""}
      `}
            >
              {index + 1}) {item.answer_content}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default InGame;
