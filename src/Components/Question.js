import {
  getWordLength,
} from "../helpers/findCells.js";
import "./Question.css";

export default function Question({ q, board, dimensions, setDirection, highlights, setHighlights }) {

  const highlightQuestion = () => {
    const newObj = {};
    for (let prop in highlights) {
      newObj[prop] = (prop === q.question.toString()) ? true : false;
    }
    setHighlights(newObj);
  }

  const highlightCells = () => {
    const cells = getWordLength(q.index, q.direction, board, dimensions);
    for (let i = 0; i < (dimensions.width * dimensions.height); i++) {
      try { document.querySelector(`#cell_${i}`).parentNode.classList.remove("highlighted") } catch (e) { }
    }
    cells.forEach(cell => {
      document.querySelector(`#cell_${cell.index}`).parentNode.classList.add("highlighted");
    });
  }

  const handleClick = (event) => {
    highlightQuestion();
    highlightCells();
    setDirection(q.direction);
    document.getElementById(`cell_${q.index}`).focus();
  }

  const length = getWordLength(q.index, q.direction, board, dimensions).length;

  return (
    <div
      onClick={handleClick}
      id={`question_id_${q.index}`}
      className={`question ${highlights[q.question] ? "shown" : "not-shown"}`}
    >
      <p className="question-text question-number">{q.num}. </p>
      <p className="question-text">{q.question} ({length})</p>
    </div>
  );
}