export const Question = ({
  question,
  user_answer,
  correct_answer,
  ansArr,
  handleChange,
  assesment,
}) => {
  const primaryColorPicker = (value) => {
    return {
      backgroundColor: user_answer === value ? "#D6DBF5" : "#FFFFFF",
      border: user_answer === value && "none",
    };
  };

  const secondaryColorPicker = (value) => {
    if (value === user_answer && value !== correct_answer) {
      return {
        backgroundColor: "#F8BCBC",
        border: "none",
        opacity: "0.5",
      };
    } else if (value === correct_answer) {
      return {
        backgroundColor: "#94D7A2",
        border: "none",
      };
    } else {
      return {
        opacity: "0.5",
      };
    }
  };

  return (
    <div className="question-border">
      <form>
        <div>
          <div className="question">{question}</div>
          <div className="options">
            <div
              className="input-container"
              style={
                assesment
                  ? secondaryColorPicker(ansArr[0])
                  : primaryColorPicker(ansArr[0])
              }
            >
              <input
                type="radio"
                id={ansArr[0]}
                name={question}
                value={ansArr[0]}
                onChange={(e) => handleChange(e)}
                checked={user_answer && user_answer === ansArr[0]}
              />
              <label htmlFor={ansArr[0]}>{ansArr[0]}</label>
            </div>

            <div
              className="input-container"
              style={
                assesment
                  ? secondaryColorPicker(ansArr[1])
                  : primaryColorPicker(ansArr[1])
              }
            >
              <input
                type="radio"
                id={ansArr[1]}
                name={question}
                value={ansArr[1]}
                checked={user_answer && user_answer === ansArr[1]}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor={ansArr[1]}>{ansArr[1]}</label>
            </div>

            <div
              className="input-container"
              style={
                assesment
                  ? secondaryColorPicker(ansArr[2])
                  : primaryColorPicker(ansArr[2])
              }
            >
              <input
                type="radio"
                id={ansArr[2]}
                name={question}
                value={ansArr[2]}
                checked={user_answer && user_answer === ansArr[2]}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor={ansArr[2]}>{ansArr[2]} </label>
            </div>

            <div
              className="input-container"
              style={
                assesment
                  ? secondaryColorPicker(ansArr[3])
                  : primaryColorPicker(ansArr[3])
              }
            >
              <input
                type="radio"
                id={ansArr[3]}
                name={question}
                value={ansArr[3]}
                checked={user_answer && user_answer === ansArr[3]}
                onChange={(e) => handleChange(e)}
              />
              <label htmlFor={ansArr[3]}>{ansArr[3]}</label>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
