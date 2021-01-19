import { useState } from "react";

// import { questions, config } from "./helpers/data";
import Game from "./Components/Game";
import CreateGrid from "./Components/Builder/CreateGrid";

export default function App({ config, questions }) {
  const [demo, setDemo] = useState(true);
  const [game, setGame] = useState(config.board);
  const [qs, setQs] = useState(questions);
  const [dimensions, setDimensions] = useState(config.dimensions);

  const defaultBoard = () => {
    setDemo(true);
    setGame(config.board);
    setQs(questions);
    setDimensions(config.dimensions);
  }

  const clearBoard = () => {
    if (!demo) {
      defaultBoard();
    } else {
      setDemo(false);
      // setGame(".");
      // setQs({ across: [], down: [] });
      // setDimensions({ width: 9, height: 9 });
    }
  }
  const download = () => {
    var element = document.createElement('a');
    const text = JSON.stringify([{ dimensions, game }, qs]);
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', "myData.json");

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  return (
    <>
      <button onClick={() => clearBoard()}>click me</button>
      <button onClick={download}>Export</button>
      {
        !demo &&
        <CreateGrid game={game} setGame={setGame} setQs={setQs} setDimensions={setDimensions} />
      }
      <Game questions={qs} board={game} dimensions={dimensions} demo={demo} />

    </>
  )
}