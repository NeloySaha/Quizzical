import { useEffect, useState } from "react";
import { HomePage } from "./components/HomePage";
import { Question } from "./components/Question";
import { convert } from "html-to-text";
import "./styles.css";

function App() {
  const [home, setHome] = useState(true);

  const [questionData, setQuestionData] = useState([]);
  const [assessment, setAssessment] = useState(false);
  const [reset, setReset] = useState(false);

  let [counter, setCounter] = useState(0);

  const options = {
    wordwrap: 200,
  };

  useEffect(() => {
    newDataSet();
    setAssessment(false);
    setReset(true);
    setCounter(0);
  }, [reset]);

  function newDataSet() {
    fetch(
      "https://opentdb.com/api.php?amount=15&category=18&difficulty=medium&type=multiple"
    )
      .then((response) => response.json())
      .then((responseJsonData) => {
        return setQuestionData(
          responseJsonData?.results.map((result) => {
            const plainQuestion = convert(result.question, options);
            const plainCorrectAnswer = convert(result.correct_answer, options);
            const plainIncorrectAnswers = result.incorrect_answers.map(
              (inAns) => {
                return convert(inAns, options);
              }
            );

            const ansArr = [];
            const optArr = [...plainIncorrectAnswers, plainCorrectAnswer];
            let randNum;

            while (ansArr.length < 4) {
              randNum = Math.floor(Math.random() * 4);
              if (!ansArr.includes(optArr[randNum])) {
                ansArr.push(optArr[randNum]);
              }
            }

            return {
              question: plainQuestion,
              correct_answer: plainCorrectAnswer,
              incorrect_answers: plainIncorrectAnswers,
              ansArr: ansArr,
              user_answer: "",
              scored: false,
            };
          })
        );
      });
  }

  function checkAnswer() {
    const ans = questionData.map((prevQuestion) =>
      prevQuestion.user_answer === prevQuestion.correct_answer
        ? { ...prevQuestion, scored: true }
        : prevQuestion
    );

    setQuestionData(ans);

    ans.forEach((question) => {
      question.scored ? setCounter((prev) => (prev += 1)) : "";
    });

    setAssessment(true);

    console.log(questionData);
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setQuestionData((prevData) => {
      const newData = prevData.map((data) =>
        data.question === name ? { ...data, user_answer: value } : data
      );

      return newData;
    });
  }

  const questions =
    questionData.length &&
    questionData.map((question, id) => (
      <Question
        key={id}
        {...question}
        assesment={assessment}
        handleChange={handleChange}
      />
    ));

  return (
    <div className="main-body">
      {home ? (
        <HomePage toggleHome={() => setHome(false)} />
      ) : (
        <div className="question-container">
          {questions}

          <div className="last-line">
            {assessment && (
              <p className="score-line">
                You scored {counter}/{questionData.length} correct answers
              </p>
            )}
            <button
              className="check-button"
              onClick={
                assessment ? () => setReset((prev) => !prev) : checkAnswer
              }
            >
              {!assessment ? "Check Answers" : "Start Again"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
