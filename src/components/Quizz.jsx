import React, { useState } from "react";
import Appheading from "./Appheading";
import Leftsidemenu from "./Leftsidemenu";
import styles from "./Quizz.module.css";
import "bootstrap/dist/css/bootstrap.css";
import Swal from "sweetalert2";
import CircleTimer from "./CircleTimer";
function Quizz() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, choice: "A. ", text: "New York City", isCorrect: false },
        { id: 1, choice: "B. ", text: "Boston", isCorrect: false },
        { id: 2, choice: "C. ", text: "Santa Fe", isCorrect: false },
        { id: 3, choice: "D. ", text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, choice: "A. ", text: "1787", isCorrect: true },
        { id: 1, choice: "B. ", text: "1776", isCorrect: false },
        { id: 2, choice: "C. ", text: "1774", isCorrect: false },
        { id: 3, choice: "D. ", text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, choice: "A. ", text: "John Adams", isCorrect: true },
        { id: 1, choice: "B. ", text: "Paul Revere", isCorrect: false },
        { id: 2, choice: "C. ", text: "Thomas Jefferson", isCorrect: false },
        { id: 3, choice: "D. ", text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, choice: "A. ", text: "California", isCorrect: false },
        { id: 1, choice: "B. ", text: "Alaska", isCorrect: true },
        { id: 2, choice: "C. ", text: "Texas", isCorrect: false },
        { id: 3, choice: "D. ", text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, choice: "A. ", text: "Canada", isCorrect: false },
        { id: 1, choice: "B. ", text: "Russia", isCorrect: true },
        { id: 2, choice: "C. ", text: "Cuba", isCorrect: false },
        { id: 3, choice: "D. ", text: "Mexico", isCorrect: false },
      ],
    },
  ];

  // Helper Functions

  /* A possible answer was clicked */
  const optionClicked = (isCorrect, e) => {
    // Increment the score
    if (isCorrect && currentQuestion + 1 < questions.length) {
      setScore(score + 1);
    }
    if (isCorrect == null && currentQuestion + 1 < questions.length) {
      setScore(score + 0);
    }
    if (isCorrect == false && currentQuestion + 1 < questions.length) {
      setScore(score + 0);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // setCurrentQuestion();
      setScore(score);
      
      onClickSubmit(showResults);
      // setScore(score + 1);
    }
  };
  const onClickSubmit = () => {
    Swal.fire({
      title: "Are you sure to submit?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Submit",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Submittd!",
          text: "Your answers has been Submittd.",
          icon: "success",
        });
        setShowResults(true);
      }
    });
  };
  const timeOver = () =>{
    setShowResults(true);
  }
  const handlePrevClick = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };
  const handleNextClick = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  /* Resets the game back to default */
  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
    
  };
  return (
    <>
      <Appheading />
      <Leftsidemenu />

      <div className={styles.container}>
        {/* 2. Current Score  */}
        {/* <h2>Score: {score}</h2> */}
        <CircleTimer
        timeOver={timeOver}
        />
        {/* 3. Show results or show the question game  */}
        {showResults ? (
          /* 4. Final Results */
          <div className="final-results">
            <h1>Final Score: {score}</h1>
            <h2>
              {score} out of {questions.length} correct - (
              {(score / questions.length) * 100}%)
            </h2>
            <button onClick={() => restartGame()}>Restart quizz</button>
          </div>
        ) : (
          /* 5. Question Card  */
          <div className="question-card">
            {/* Current Question  */}
            <h6>
              Question: {currentQuestion + 1}/{questions.length}
            </h6>
            <h3 className={styles.questiontext}>
              {questions[currentQuestion].text}
            </h3>

            {/* List of possible answers  */}
            <div className={styles.option}>
              {questions[currentQuestion].options.map((option) => {
                return (
                  <div
                    key={option.id}
                    onClick={() => optionClicked(option.isCorrect)}
                    className="list"
                  >
                    {option.choice}
                    {option.text}
                  </div>
                );
              })}
              <button
                onClick={handlePrevClick}
                className={`${styles.qsPrevButton} btn btn-warning btn-lg`}
              >
                Previous
              </button>
              <button
                onClick={handleNextClick}
                className={`${styles.qsNextButton} btn btn-info btn-lg`}
                
              >
                Next
              </button>
              <button
                onClick={onClickSubmit}
                className={`${styles.qsSubmitButton} btn btn-success btn-lg`}
              >
                Submit
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default Quizz;
