import { useState } from "react";

import { questions, config } from "./helpers/data";
import Game from "./Components/Game";
import CreateGrid from "./Components/Builder/CreateGrid";

export default function App() {
  const [demo, setDemo] = useState(true);
  const [game, setGame] = useState(config.board);
  const [qs, setQs] = useState(questions);
  const [dimensions, setDimensions] = useState(config.dimensions);
  const [qMap, setQMap] = useState({});

  const defaultBoard = () => {
    setDemo(true);
    setGame(config.board);
    setQs(questions);
    setDimensions(config.dimensions);
    setQMap({});
  }

  const clearBoard = () => {
    if (!demo) {
      defaultBoard();
    } else {
      setDemo(false);
      setGame(".");
      setQs({ across: [], down: [] });
      setDimensions({ width: 9, height: 9 });
    }
  }

  return (
    <>
      <button onClick={() => clearBoard()}>click me</button>
      <button>Export</button>
      {
        !demo &&
        <CreateGrid game={game} setGame={setGame} setQs={setQs} setDimensions={setDimensions} qMap={qMap} />
      }
      <Game questions={qs} board={game} dimensions={dimensions} qMap={qMap} setQMap={setQMap} />

    </>
  )
}