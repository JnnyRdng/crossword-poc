import { useState } from "react";

import { questions, config } from "./helpers/data";
import Game from "./Components/Game";
import CreateGrid from "./Components/Builder/CreateGrid";
import Toast from "./Components/Builder/Toast";

export default function App() {
    const [popup, setPopup] = useState(false);
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
            setGame("");
            setQs({ across: [], down: [] });
            setDimensions({ width: 1, height: 1 });
        }
    }

    return (
        <>
            <button onClick={() => clearBoard()}>click me</button>
            
            {
                !demo &&
                <CreateGrid setGame={setGame} setQs={setQs} setDimensions={setDimensions} />
            }
            <Game questions={qs} board={game} dimensions={dimensions} />
            { popup &&
                <Toast />
            }
        </>
    )
}