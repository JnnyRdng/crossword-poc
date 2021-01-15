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
    }

    const clearBoard = () => {
        if (!demo) {
            defaultBoard();
        } else {
            setDemo(false);
            setGame("hello...te.e.rhymelow.i.e.tl.dig.s.ro...in..i.grin.has.a.o..o...m.nasty.gems.o.of");
            setQs({ across: [], down: [] });
            setDimensions({ width: 9, height: 9 });
        }
    }

    return (
        <>
            <button onClick={() => clearBoard()}>click me</button>
            
            {
                !demo &&
                <CreateGrid game={game} setGame={setGame} setQs={setQs} setDimensions={setDimensions} />
            }
            <Game questions={qs} board={game} dimensions={dimensions} />
        </>
    )
}