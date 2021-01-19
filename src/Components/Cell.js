import "./Cell.css";

import {
  // moveCellDown,
  // moveCellRight,
  // getCell,
  // getIndex,
  // cellFilled,
  // cellEmpty,
  getCoords,
} from "../helpers/findCells.js";

export default function Cell({ number, value, index, handler, wordDir, direction, setDirection, dimensions, demo }) {

  const style = value === "." ? "black" : "white";

  const handleInput = (evt) => {
    evt.target.value = evt.target.value.slice(-1);
    const coords = getCoords(index, dimensions);
    handler(coords.x, coords.y);
  }

  const handleClick = () => {
    if (wordDir === "both") {
      if (direction === "across") {
        setDirection("down");
      } else {
        setDirection("across");
      }
      return;
    }
    setDirection(wordDir);
  }

  return (
    <div className={`${"cell"} ${style}`} key={`cell_outer_${index}`}>
      {value !== "." &&
        <>
          <div className="cell-colour"></div>
          <div className="label">
            {number}
          </div>
          <input
            id={"cell_" + index}
            className="char"
            onClick={handleClick}
            onInput={handleInput}
            maxLength={2}
            type="text"
            defaultValue={demo ? " " : undefined}
            value={demo ? undefined : (value ? value : " ")}
            // value={value ? value : " "}
            key={`cell_input_${index}`}
          />
        </>
      }
    </div>
  )
}