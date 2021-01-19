import "./Cell.css";
import {

  getCoords,
} from "../helpers/findCells.js";

export default function Cell({ number, value, index, handler, wordDir, direction, setDirection, dimensions, demo }) {

  const style = value === "." ? "black" : "white";

  const handleInput = (evt) => {
    evt.target.value = evt.target.value.slice(-1);
    const coords = getCoords(index, dimensions);
    handler(coords.x, coords.y, evt.target.value === "");
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

  const handleFocus = (event) => {
    // event.currentTarget.focus();
    // const val = event.target.value;
    // event.target.value = "";
    // event.target.value = val;
    event.currentTarget.parentNode.classList.add("black");
  }
  const handleBlur = (event) => {
    event.currentTarget.parentNode.classList.remove("black");
  }

  return (
    <div className={`${"cell"} ${style} cell-colour`} key={`cell_outer_${index}`}>
      {value !== "." &&
        <>
          <div className="label">
            {number}
          </div>
          <input
            id={"cell_" + index}
            className="char"
            onFocus={handleFocus}
            onBlur={handleBlur}
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