import "./styles/score-board.css";
//  Where the score is presented
const incorrectCount = 0;
const correctCount = 0;
const answersLeft = ["trout", "salmon", "shark", "tuna"];

export const ScoreBoard = () => {
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {answersLeft.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
