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
import Question from "./Question";

export default function Questions({ questions, setDirection, starts, setQMap, dimensions, board }) {

  // console.log("num of qs across", questions.across.length)
  // console.log("num of qs down", questions.down.length)

  const createQuestion = (q, i, direction) => {
    return (
      <Question
        q={q}
        key={`${i}_${q.question}`}
        dir={direction}
        dimensions={dimensions}
        board={board}
        starts={starts}
        setDirection={setDirection}
      />
    )
  }
  
  const across = questions.across.sort((a, b) => a.num - b.num).map((q, i) => createQuestion(q, i, "across"));
  const down = questions.down.sort((a, b) => a.num - b.num).map((q, i) => createQuestion(q, i, "down"));

  return (
    <div style={{ height: 50 * dimensions.height, width: 300, overflowX: "hidden", overflowY: "auto", padding: 10 }}>
      <h3>Across</h3>
      <div>
        {across}
      </div>
      <h3>Down</h3>
      <div>
        {down}
      </div>
    </div>
  )
}