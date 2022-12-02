import React, { Fragment } from "react";

const ReviewGame = ({ data, currentQuestion, setCurrentQuestion }) => {
  console.log(data);
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
          <button
            onClick={() => window.location.reload()}
            className={`flex items-center 
  justify-center py-3 px-6 text-lg 
  font-bold  rounded-lg
  shadow-md bg-yellow-500 hover:bg-yellow-400 text-white w-32 undefined 
  }`}
          >
            Reset
          </button>
        </div>

        <div className="relative game-question bg-white pt-16 px-4 rounded-lg mt-16 pb-16">
          <div className="absolute font-bold top-0 left-2/4 border transform -translate-y-2/4 -translate-x-2/4  timer rounded-full bg-white w-[100px] h-[100px] flex items-center justify-center text-red-500">
            End!
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
              data-index={index}
              key={index}
              className={`rounded-md flex items-center shadow-md my-3 py-4 px-4 cursor-pointer duration-50 bg-white mx-auto border-2
			undefined text-xl ${
        item.isChoose && item.correct ? "bg-green-500 text-white border-2" : ""
      }${
                item.isChoose && item.correct === false
                  ? "bg-red-600 text-white border-2"
                  : ""
              }
      ${item.correct ? "bg-green-500 text-white border-2" : ""}
    
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

export default ReviewGame;
