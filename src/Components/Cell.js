import { useEffect, useState } from "react";
import {
  getCoords,
  getWordLength
} from "../helpers/findCells.js";
import "./Cell.css";

export default function Cell({ number, value, index, handler, wordDir, direction, setDirection, dimensions, demo, board }) {

  const [cellVal, setCellVal] = useState(value);

  useEffect(() => {
    setCellVal(value);
  }, [value]);

  const handleKeyDown = (event) => {
    event.preventDefault();
    console.dir(event);
    const key = event.key;
    console.log(JSON.stringify(key));
    if (key === "Backspace") {
      setCellVal("");
      const { x, y } = getCoords(index, dimensions);
      handler(x, y, true);
    } else if (key.length === 1) {
      setCellVal(key);
      event.target.value = "";
      const coords = getCoords(index, dimensions);
      handler(coords.x, coords.y, false);
    }
  }
  const highlightCells = () => {
    const cells = getWordLength(index, wordDir, board, dimensions);
    for (let i = 0; i < (dimensions.width * dimensions.height); i++) {
      try { document.querySelector(`#cell_${i}`).parentNode.classList.remove("highlighted") } catch (e) { }
    }
    cells.forEach(cell => {
      document.querySelector(`#cell_${cell.index}`).parentNode.classList.add("highlighted");
    });
  }

  const handleClick = () => {
    if (wordDir === "both") {
      if (direction === "across") {
        setDirection("down");
      } else {
        setDirection("across");
      }
    } else {
      setDirection(wordDir);
    }
    highlightCells();
  }



  return (
    <div className={`${"cell"} ${value === "." ? "black" : ""}`} key={`cell_outer_${index}`}>
      {value !== "." &&
        <>
          <div className="cell-background">{cellVal}</div>
          <div className="label">
            {number}
          </div>
          <input
            id={"cell_" + index}
            className="cell-input"
            onClick={handleClick}
            onKeyDown={handleKeyDown}
            maxLength={1}
            type="text"
            defaultValue=""
            key={`cell_input_${index}`}
          />
        </>
      }
    </div>
  );
}