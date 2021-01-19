import {
  getWordLength,
} from "../helpers/findCells.js";
import "./Question.css";

export default function Question({ q, board, dimensions, setDirection, highlights, setHighlights }) {

  const highlight = () => {
    const newObj = {};
    for (let prop in highlights) {
      newObj[prop] = (prop === q.question.toString()) ? true : false;
    }
    setHighlights(newObj);
  }

  const handleClick = (event) => {
    highlight();
    setDirection(q.direction);
    document.getElementById(`cell_${q.index}`).focus();
  }

  const length = getWordLength(q.index, q.direction, board, dimensions).length;

  return (
    <div
      onClick={handleClick}
      className={`question ${highlights[q.question] ? "shown" : "not-shown"}`}
    >
      <p className="question-text question-number">{q.num}. </p>
      <p className="question-text">{q.question} ({length})</p>
    </div>
  );
}