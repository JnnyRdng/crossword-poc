
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

export default function Game({ questions, board, dimensions }) {
  const [direction, setDirection] = useState("across");


  // const size = gameString.split(":")[0];
  // const gx = parseInt(size.split("x")[0]);
  // const gy = parseInt(size.split("x")[1]);
  // const board = gameString.split(":")[1];
  const gx = dimensions.width;
  const gy = dimensions.height;
  console.log(board);

  const changeCell = (x, y) => {
    if (direction === "across") {
      moveCellRight(x, y, board, dimensions.width);
    } else {
      moveCellDown(x, y, board, dimensions.width);
    }
  }

  let qStarts = {};


  const createGrid = () => {

    let bx = 0;
    let by = 0;

    let game = [];
    let index = 1;

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
          number = index;
          index++;
          qStarts[number] = {
            index: getIndex(bx, by, dimensions.width),
            direction: direction
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
        )
      }
    }
    return game;
  }

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <div id="grid" style={{ width: 50 * gx }}>
          {createGrid()}
        </div>
        <Questions
          questions={questions}
          setDirection={setDirection}
          starts={qStarts}
          dimensions={dimensions}
        />
      </div>
    </div>
  );
}
