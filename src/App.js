
import { useState } from 'react';
import './App.css';

import {
  questions,
  moveCellDown,
  moveCellRight,
  getCell,
  getIndex,
  cellFilled,
  cellEmpty
} from "./helpers/findCells.js";
import Cell from "./Cell.js";
import Questions from "./Questions.js";

function App() {
  const [direction, setDirection] = useState("across");

  // const gameString = "13x13:assist.amazoni.c.i...pro.aroaddog.vroom..l.e..s....ipressure.carb...e...n.o..ibipartisan.cao.r..o.o.est.xpo.infra.towe.g.n.l.rio.estructure.pst.ia.u.ion.g..rpm.radiator.";
  const gameString = "13x13:m.peterotoolea.a.w.h.dim.ljennifer.lateo...n.t.c.h.mrhyme.terrace..o....lo...nmaudefrickerto...al....g..driedup.magooi.l.s.l.e...pcrib.lawrenceu.act.z.g.o.rmuddywaters.a";
  const size = gameString.split(":")[0];
  const gx = parseInt(size.split("x")[0]);
  const gy = parseInt(size.split("x")[1]);
  const board = gameString.split(":")[1];
  console.log(board);

  const changeCell = (x, y) => {
    if (direction === "across") {
      moveCellRight(x, y);
    } else {
      moveCellDown(x, y);
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
        const cell = getCell(bx, by);
        // console.log(cell)
        let number;
        let left = getCell(bx - 1, by);
        let right = getCell(bx + 1, by);
        let above = getCell(bx, by - 1);
        let below = getCell(bx, by + 1);

        if (
          cell !== "." &&
          (
            (cellEmpty(left) && cellFilled(right)) ||
            (cellEmpty(above) && cellFilled(below))
          )
        ) {
          number = index;
          index++;
          qStarts[number] = getIndex(bx, by);
        }
        if ((cellEmpty(left) && cellFilled(right)) || (cellFilled(left))) {
          direction = "across";
        } else {
          direction = "down";
        }
        game.push(
          <Cell
            value={cell}
            number={number}
            direction={direction}
            setDirection={setDirection}
            key={(gx * by) + bx}
            index={(gx * by) + bx}
            handler={changeCell}
          />
        )
      }
    }
    return game;
  }

  return (
    <div className="App">
      <div id="grid">
        {createGrid()}
      </div>
      <Questions questions={questions} setDirection={setDirection} starts={qStarts} />

    </div>
  );
}

export default App;
