import { useEffect, useState } from "react";
import {
  getWordLength,
} from "../helpers/findCells.js";
import "./Question.css";

export default function Question({ q, board, dimensions, setDirection, highlights, setHighlights }) {

  useEffect(() => {
    setClicked(highlights[q.question]);
  }, [highlights]);
  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    const newObj = {};
    for (let prop in highlights) {
      newObj[prop] = (prop === q.question.toString()) ? true : false;
    }
    setHighlights(newObj);
    setDirection(q.direction);
    document.getElementById(`cell_${q.index}`).focus();
  }

  const length = getWordLength(q.index, q.direction, board, dimensions).length;

  return (
    <div
      onClick={handleClick}
      className={`question ${clicked ? "shown" : "not-shown"}`}
    >
      <p className="question-text question-number">{q.num}. </p>
      <p className="question-text">{q.question} ({length})</p>
    </div>
  );
}