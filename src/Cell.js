import "./Cell.css";

// import {
//   moveCellDown,
//   moveCellRight,
//   getCell,
//   getIndex,
//   cellFilled,
//   cellEmpty
// } from "./helpers/findCells.js";

export default function Cell({ number, value, index, handler, direction, setDirection }) {

  const style = value === "." ? "black" : "white";

  const handleInput = (evt) => {
    evt.target.value = evt.target.value.slice(-1);
    // console.log(evt.target.value);

    const x = index % 13;
    const y = (index - x) / 13;
    handler(x, y);
  }

  const handleClick = () => {
    if (direction === undefined) {
      return;
    }
    setDirection(direction);
  }

  return (
    <div className={`${"cell"} ${style}`}>
      <div className="label">
        {number}
      </div>
      {value !== "." &&
        // <div className="char">{ }</div>
        <input id={"cell_" + index} onClick={handleClick} onInput={(event) => handleInput(event)} maxLength={2} type="text" className="char" defaultValue={value} />
      }
    </div>
  )
}