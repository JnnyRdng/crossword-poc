import { useState, useEffect } from "react";
import "./CreateGrid.css";
// import Toast from "./Toast";

export default function CreateGrid({ game, setGame, setQs, setDimensions, qMap }) {

  // const [popup, setPopup] = useState(true);
  const [warning, setWarning] = useState(undefined);
  const [width, setWidth] = useState(9);
  const [height, setHeight] = useState(9);
  const [string, setString] = useState("hello...te.e.rhymelow.i.e.tl.dig.s.ro...in..i.grin.has.a.o..o...m.nasty.gems.o.of")

  const questions = { across: [], down: [] };

  useEffect(() => {
    setDimensions({ width: width, height: height });
    setGame(string);
  }, [width, height, string])


  const writeQuestions = () => {
    for (let key in qMap) {
      // console.log(qMap[key])
      const mapElement = {
        num: key,
        question: "",
      };
      if (qMap[key].direction !== "both") {
        questions[qMap[key].direction].push(mapElement);
      } else {
        questions.across.push(mapElement);
        questions.down.push(mapElement);
      }
    }
    setQs(questions);
  }

  const updateBoard = (event) => {
    const board = event.target.value;
    setGame(board);
    writeQuestions();
  }
  const updateDimensions = (event) => {
    const num = parseInt(event.target.value, 10);
    if (!isNaN(num) && num < 50 && num > 0) {
      (event.target.id === "input_width") ? setWidth(num) : setHeight(num);
      setWarning(undefined);
    } else {
      setWarning("Too big a number!");
    }
  }

  return (
    <div className="create-grid">
      {warning && <p>{warning}</p>}
      <div id="dimension-inputs">
        <div className="input-text">
          <label for="input_width">Width: </label> <br />
          <input
            id="input_width"
            type="number"
            onChange={updateDimensions}
            defaultValue={width}
            placeholder="Width"
          />
        </div>
        <div className="input-text">
          <label for="input_height">Height: </label> <br />
          <input
            id="input_height"
            type="number"
            onChange={updateDimensions}
            defaultValue={height}
            placeholder="Height"
          />
        </div>
      </div>
      <div className="input-text">
        <label for="game_grid">Crossword: </label> <br />
        <input
          id="game_grid"
          type="text"
          onInput={updateBoard}
          defaultValue={game}
          placeholder="Type a crossword"
        />
      </div>
      <div>
        <button onClick={writeQuestions}>Write questions</button>

      </div>
    </div>
  )
}