
import { useState } from 'react';
import './Game.css';

import {
  moveCellDown,
  moveCellRight,
  getCell,
  cellFilled,
  cellEmpty
} from "../helpers/findCells.js";

import Cell from "./Cell.js";
import Questions from "./Questions.js";

export default function Game({ questions, board, dimensions, demo }) {

  const [direction, setDirection] = useState("across");

  const gx = dimensions.width;
  const gy = dimensions.height;

  const changeCell = (x, y) => {
    if (direction === "across") {
      moveCellRight(x, y, board, dimensions);
    } else {
      moveCellDown(x, y, board, dimensions);
    }
  }

  const createGrid = () => {

    let bx = 0;
    let by = 0;

    let game = [];
    let index = 1;

    // let newQMap = {};


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
        } else if (cellEmpty(left) && cellFilled(right)) {
          wordDir = "across";
        } else if (cellEmpty(above) && cellFilled(below)) {
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
          // newQMap[getIndex(bx, by, dimensions)] = {
          //   number: number,
          //   direction: wordDir,
          //   style: "not-shown",
          //   clicked: false,
          // };
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
