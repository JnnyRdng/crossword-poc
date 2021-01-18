import { useState } from "react";
import {
  moveCellDown,
  moveCellRight,
  getCell,
  getIndex,
  cellFilled,
  cellEmpty,
  getCoords,
  getWordLength,
} from "../helpers/findCells.js";
import "./Question.css";

export default function Question({ q, dir, board, dimensions, starts, setDirection }) {

  const [clicked, setClicked] = useState(false);

  const handleClick = (event) => {
    event.preventDefault();
    // Object.keys(starts).forEach(key => {
    //   if (key === q.num) {
    //     starts[q.num].shown = true;
    //   } else {
    //     starts[key].shown = false;
    //   }
    // })
    setClicked(!clicked);
    const qStart = starts[q.num];
    // setQMap(starts);
    setDirection(qStart.direction);
    console.log(event.currentTarget)
    // event.target.classList.add("shown");
    document.getElementById(`cell_${qStart.index}`).focus();
  }
  if (starts[q.num]) {
    const length = getWordLength(starts[q.num].index, dir, board, dimensions).length;
    // const length = 1;
    // console.log("shown", starts[q.num].shown)
    // console.log(length);

    return (
      <div
        onClick={handleClick}
        className={`question ${clicked ? "shown" : "not-shown"}`}
      >
        {/* <span><span style={{ fontWeight: "bold" }}>{q.num}. </span>{q.question} ({length})</span> */}
        <p className="question-text question-number">{q.num}. </p>
        <p className="question-text">{q.question} ({length})</p>
      </div>
    );
  } else {
    return null;
  }
}