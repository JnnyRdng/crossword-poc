import { useState } from "react";
import {
} from "../helpers/findCells.js";
import Question from "./Question";

import "./Questions.css";

export default function Questions({ questions, setDirection, dimensions, board }) {

  const createHighlights = () => {
    const obj = {};
    questions.forEach(q => {
      obj[q.question] = false;
    });
    return obj;
  }

  const [highlights, setHighlights] = useState(createHighlights());

  const across = [];
  const down = [];
  questions.forEach(q => {
    const question = (
      <Question
        q={q}
        key={`${q.index}_${q.question}`}
        dimensions={dimensions}
        board={board}
        setDirection={setDirection}
        highlights={highlights}
        setHighlights={setHighlights}
      />
    );
    if (q.direction === "across") {
      across.push(question);
    } else {
      down.push(question);
    }
  });

  return (
    <div id="question-container" style={{ height: 50 * dimensions.height, width: 300 }}>
      <div className="question-list">
        <h3 className="question-header">Across</h3>
        {across}
      </div>
      <div className="question-list">
        <h3 className="question-header">Down</h3>
        {down}
      </div>
    </div>
  )
}