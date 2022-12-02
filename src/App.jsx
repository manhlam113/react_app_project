import { Fragment, useState } from "react";
import "./App.css";
import EndGame from "./components/EndGame";
import InGame from "./components/InGame";
import ReviewGame from "./components/ReviewGame";
import StartGame from "./components/StartGame";
import { questionData } from "./data/questionData";

function App() {
  const [score, setScore] = useState(0);
  const [isStart, setIsStart] = useState(true);
  const [inGame, setInGame] = useState(false);
  const [reviewGame, setReviewGame] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [data, setData] = useState(
    questionData.sort(() => Math.random() - 0.5)
  );
  const [endgame, setEndGame] = useState(false);

  return (
    <Fragment>
      {isStart ? (
        <StartGame setIsStart={setIsStart} setInGame={setInGame}></StartGame>
      ) : (
        ""
      )}
      {inGame ? (
        <InGame
          data={data}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
          setData={setData}
          endgame={endgame}
          setEndGame={setEndGame}
          setIsStart={setIsStart}
          setInGame={setInGame}
          reviewGame={reviewGame}
          setReviewGame={setReviewGame}
          score={score}
          setScore={setScore}
        ></InGame>
      ) : (
        ""
      )}
      {endgame ? (
        <EndGame
          setInGame={setInGame}
          setIsStart={setIsStart}
          setEndGame={setEndGame}
          setReviewGame={setReviewGame}
          setCurrentQuestion={setCurrentQuestion}
          score={score}
          setScore={setScore}
          data={data}
        ></EndGame>
      ) : (
        ""
      )}
      {reviewGame ? (
        <ReviewGame
          data={data}
          currentQuestion={currentQuestion}
          setCurrentQuestion={setCurrentQuestion}
        ></ReviewGame>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default App;
