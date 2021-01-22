import { useState, useEffect } from "react";
import ClueList from "./ClueList";
import "./CreateGrid.css";

export default function CreateGrid({ game, setGame, setQs, setDimensions }) {

  const [warning, setWarning] = useState(undefined);
  const [width, setWidth] = useState(13);
  const [height, setHeight] = useState(13);
  const [string, setString] = useState(".degenerate...e.l.i.e.o.h.cleancut.trot.f.c.k.r.a.b..twig.telling...a.c.a...o..ruleofthumb..e...s.s.p...pastime.edit..s.r.e.s.a.h.soda.tipsters.n.i.i.e.e.o...blackwidow.hello...te.e.rhymelow.i.e.tl.dig.s.ro...in..i.grin.has.a.o..o...m.nasty.gems.o.of")
  const [showQBuilder, setShowQBuilder] = useState(false);


  useEffect(() => {
    setDimensions({ width: width, height: height });
    setGame(string);
    textFilled();
  }, [width, height, string, setDimensions, setGame])


  const writeQuestions = () => {

  }

  const updateBoard = (event) => {
    const board = event.target.value;
    setString(board);
    writeQuestions();
    textFilled();
  }

  const textFilled = () => {
    if (textArea.value.length === width * height) {
      console.log("filled");
      textArea.classList.remove("incomplete");
      textArea.classList.add("complete");
      setShowQBuilder(true);
    } else {
      textArea.classList.remove("complete");
      textArea.classList.add("incomplete");
      setShowQBuilder(false);
    }
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

  let textArea;

  return (
    <div className="create-grid">
      {warning && <p>{warning}</p>}
      <div id="dimension-inputs">
        <div className="input-text">
          <label htmlFor="input_width">Width: </label> <br />
          <input
            id="input_width"
            type="number"
            onChange={updateDimensions}
            defaultValue={width}
            placeholder="Width"
          />
        </div>
        <div className="input-text">
          <label htmlFor="input_height">Height: </label> <br />
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
        <label htmlFor="game_grid">Crossword: </label> <br />
        <textarea
          ref={ref => textArea = ref}
          id="game_grid"
          className="incomplete"
          onInput={updateBoard}
          defaultValue={game}
          placeholder="Type a crossword"
          rows={height}
          cols={width - 1}
          maxLength={width * height}
        ></textarea>
      </div>
      <div>
        {showQBuilder && (
          <>
            <ClueList board={string} dimensions={{ width, height }} setQs={setQs} />

          </>
        )}

      </div>
    </div>
  )
}