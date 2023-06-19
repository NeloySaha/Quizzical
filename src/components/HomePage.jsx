import React from "react";

export const HomePage = ({
  toggleHome,
  handleOptionsChange,
  Category,
  difficulty,
}) => {
  const categoryColorPicker = (value) => {
    return {
      backgroundColor: Category === `${value}` ? "#D6DBF5" : "#FFFFFF",
      border: Category === `${value}` && "none",
    };
  };

  const diffColorPicker = (value) => {
    return {
      backgroundColor: difficulty === value ? "#D6DBF5" : "#FFFFFF",
      border: difficulty === value && "none",
    };
  };

  return (
    <div className="body-part">
      <p className="title">Quizzical</p>
      <p className="description">Test yourself in a few seconds</p>

      <div className="category">
        <form>
          <div>
            <div className="category-question">Choose a Category:</div>
            <div className="options">
              <div className="input-container" style={categoryColorPicker(9)}>
                <input
                  type="radio"
                  id="9"
                  name="Category"
                  value="9"
                  onChange={(e) => handleOptionsChange(e)}
                  checked={Category === "9"}
                />
                <label htmlFor="9">General Knowledge</label>
              </div>

              <div className="input-container" style={categoryColorPicker(18)}>
                <input
                  type="radio"
                  id="18"
                  name="Category"
                  value="18"
                  onChange={(e) => handleOptionsChange(e)}
                  checked={Category === "18"}

                  // onChange={(e) => handleChange(e)}
                  // checked={user_answer && user_answer === ansArr[0]}
                />
                <label htmlFor="18">Computer Science</label>
              </div>

              <div className="input-container" style={categoryColorPicker(21)}>
                <input
                  type="radio"
                  id="21"
                  name="Category"
                  value="21"
                  onChange={(e) => handleOptionsChange(e)}
                  checked={Category === "21"}

                  // onChange={(e) => handleChange(e)}
                  // checked={user_answer && user_answer === ansArr[0]}
                />
                <label htmlFor="21">Sports</label>
              </div>

              <div className="input-container" style={categoryColorPicker(23)}>
                <input
                  type="radio"
                  id="23"
                  name="Category"
                  value="23"
                  onChange={(e) => handleOptionsChange(e)}
                  checked={Category === "23"}

                  // onChange={(e) => handleChange(e)}
                  // checked={user_answer && user_answer === ansArr[0]}
                />
                <label htmlFor="23">History</label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div className="category">
        <form>
          <div>
            <div className="category-question">Select Difficulty:</div>
            <div className="options">
              <div className="input-container" style={diffColorPicker("easy")}>
                <input
                  type="radio"
                  id="1"
                  name="difficulty"
                  value="easy"
                  onChange={(e) => handleOptionsChange(e)}
                  checked={difficulty === "easy"}
                  // onChange={(e) => handleChange(e)}
                  // checked={user_answer && user_answer === ansArr[0]}
                />
                <label htmlFor="easy">Easy</label>
              </div>

              <div
                className="input-container"
                style={diffColorPicker("medium")}
              >
                <input
                  type="radio"
                  id="2"
                  name="difficulty"
                  value="medium"
                  onChange={(e) => handleOptionsChange(e)}
                  checked={difficulty === "medium"}
                  // onChange={(e) => handleChange(e)}
                  // checked={user_answer && user_answer === ansArr[0]}
                />
                <label htmlFor="medium">Medium</label>
              </div>

              <div className="input-container" style={diffColorPicker("hard")}>
                <input
                  type="radio"
                  id="3"
                  name="difficulty"
                  value="hard"
                  onChange={(e) => handleOptionsChange(e)}
                  checked={difficulty === "hard"}
                  // onChange={(e) => handleChange(e)}
                  // checked={user_answer && user_answer === ansArr[0]}
                />
                <label htmlFor="hard">Hard</label>
              </div>
            </div>
          </div>
        </form>
      </div>

      <button className="quiz-start" onClick={toggleHome}>
        Start quiz
      </button>
    </div>
  );
};
