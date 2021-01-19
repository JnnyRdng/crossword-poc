import { useState } from "react";
import {
  getWordLength,
} from "../helpers/findCells.js";
import "./Question.css";

export default function Question({ q, dir, board, dimensions, starts, setDirection, highlight }) {

  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    if (!clicked) setClicked(true);
    const qStart = starts[q.num];
    setDirection(qStart.direction);
    console.log(event.currentTarget)
    document.getElementById(`cell_${qStart.index}`).focus();
  }
  if (starts[q.num]) {
    const length = getWordLength(starts[q.num].index, dir, board, dimensions).length;

    return (
      <div
        onClick={handleClick}
        className={`question ${clicked ? "shown" : "not-shown"}`}
      >
        <p className="question-text question-number">{q.num}. </p>
        <p className="question-text">{q.question} ({length})</p>
      </div>
    );
  } else {
    return null;
  }
}