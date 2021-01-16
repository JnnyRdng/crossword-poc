
import { useState } from 'react';
import './Game.css';

import {
  moveCellDown,
  moveCellRight,
  getCell,
  getIndex,
  cellFilled,
  cellEmpty
} from "../helpers/findCells.js";

import Cell from "./Cell.js";
import Questions from "./Questions.js";

export default function Game({ questions, board, dimensions, qMap, setQMap }) {

  const [direction, setDirection] = useState("across");

  const gx = dimensions.width;
  const gy = dimensions.height;
  // console.log(board);

  const changeCell = (x, y) => {
    if (direction === "across") {
      moveCellRight(x, y, board, dimensions.width);
    } else {
      moveCellDown(x, y, board, dimensions.width);
    }
  }

  const createGrid = () => {

    let bx = 0;
    let by = 0;

    let game = [];
    let index = 1;

    let newQMap = {};

    let direction = "across";

    for (by = 0; by < gy; by++) {
      for (bx = 0; bx < gx; bx++) {
        const cell = getCell(bx, by, board, dimensions);
        // console.log(cell)
        let number;
        let left = getCell(bx - 1, by, board, dimensions);
        let right = getCell(bx + 1, by, board, dimensions);
        let above = getCell(bx, by - 1, board, dimensions);
        let below = getCell(bx, by + 1, board, dimensions);

        if ((cellEmpty(left) && cellFilled(right)) || (cellFilled(left))) {
          direction = "across";
        } else {
          direction = "down";
        }
        if (
          cell !== "." &&
          (
            (cellEmpty(left) && cellFilled(right)) ||
            (cellEmpty(above) && cellFilled(below))
          )
        ) {
          let wordDir = "";
          if ((cellEmpty(left) && cellEmpty(above)) && (cellFilled(right) && cellFilled(below))) {
            wordDir = "both";
          } else if (cellEmpty(left) && cellFilled(right)) {
            wordDir = "across";
          } else if (cellEmpty(above) && cellFilled(below)) {
            wordDir = "down";
          }
          number = index;
          index++;
          newQMap[number] = {
            index: getIndex(bx, by, dimensions.width),
            direction: wordDir,
          };
        }
        // if (cellEmpty(above) && cellFilled(below)) {
        //   direction = "down";
        // }
        game.push(
          <Cell
            value={cell}
            number={number}
            direction={direction}
            setDirection={setDirection}
            key={(gx * by) + bx}
            index={(gx * by) + bx}
            handler={changeCell}
            dimensions={dimensions}
          />
        );
      }
    }
    if (JSON.stringify(qMap) !== JSON.stringify(newQMap)) {
      setQMap(newQMap);
    }
    return game;
  }

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div id="grid" style={{ width: 50 * gx }}>
          {createGrid()}
        </div>
        {Object.keys(qMap).length > 0 &&
          <Questions
            questions={questions}
            setDirection={setDirection}
            starts={qMap}
            dimensions={dimensions}
            board={board}
          />
        }
      </div>
    </div>
  );
}
