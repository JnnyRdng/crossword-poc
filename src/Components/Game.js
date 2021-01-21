
import { useState } from 'react';
import './Game.css';

import {
  moveCellDown,
  moveCellRight,
  getCell,
  cellFilled,
  cellEmpty,
  moveCellLeft,
  moveCellUp
} from "../helpers/findCells.js";

import Cell from "./Cell.js";
import Questions from "./Questions.js";

export default function Game({ questions, board, dimensions, demo }) {

  const [direction, setDirection] = useState("across");

  const gx = dimensions.width;
  const gy = dimensions.height;

  const changeCell = (x, y, backspace = false) => {
    if (direction === "across") {
      if (backspace) {
        moveCellLeft(x, y, board, dimensions);
      } else {
        moveCellRight(x, y, board, dimensions);
      }
    } else {
      if (backspace) {
        moveCellUp(x, y, board, dimensions);
      } else {
        moveCellDown(x, y, board, dimensions);
      }
    }
  }

  const createGrid = () => {

    let bx = 0;
    let by = 0;

    let game = [];
    let index = 1;

    for (by = 0; by < gy; by++) {
      for (bx = 0; bx < gx; bx++) {
        const cell = getCell(bx, by, board, dimensions);
        let number;
        let left = getCell(bx - 1, by, board, dimensions);
        let right = getCell(bx + 1, by, board, dimensions);
        let above = getCell(bx, by - 1, board, dimensions);
        let below = getCell(bx, by + 1, board, dimensions);

        let wordDir = "";
        if ((cellEmpty(left) && cellEmpty(above)) && (cellFilled(right) && cellFilled(below))) {
          wordDir = "both";
        } else if ((cellEmpty(left) || cellFilled(left)) && (cellFilled(right) || cellEmpty(right))) {
          wordDir = "across";
        } else if ((cellEmpty(above) || cellFilled(above)) && (cellFilled(below) || cellEmpty(below))) {
          wordDir = "down";
        }
        if (
          cell !== "." &&
          (
            (cellEmpty(left) && cellFilled(right)) ||
            (cellEmpty(above) && cellFilled(below))
          )
        ) {

          number = index;
          index++;
        }

        game.push(
          <Cell
            value={cell}
            number={number}
            wordDir={wordDir}
            direction={direction}
            setDirection={setDirection}
            key={(gx * by) + bx}
            index={(gx * by) + bx}
            handler={changeCell}
            dimensions={dimensions}
            demo={demo}
            board={board}
          />
        );
      }
    }
    return game;
  }

  return (
    <div className="Game">
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div id="grid" style={{ width: 50 * gx }}>
          {createGrid()}
        </div>
        {questions.length > 0 &&
          <Questions
            questions={questions}
            setDirection={setDirection}
            dimensions={dimensions}
            board={board}
          />
        }
      </div>
    </div>
  );
}
