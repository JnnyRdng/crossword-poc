import { useState, useEffect } from "react";
import "./CreateGrid.css";
// import Toast from "./Toast";

export default function CreateGrid({ game, setGame, setQs, setDimensions }) {

    // const [popup, setPopup] = useState(true);
    const [width, setWidth] = useState(9);
    const [height, setHeight] = useState(9);

    useEffect(() => {
        setDimensions({ width: width, height: height });
    }, [width, height])

    const updateBoard = (event) => {
        const board = event.target.value;
        setGame(board);
    }
    const updateDimensions = (event) => {
        const num = parseInt(event.target.value, 10);
        if (!isNaN(num)) {
            (event.target.id === "input_width") ? setWidth(num) : setHeight(num);
        }
    }

    return (
        <div className="create-grid">
            <input
                id="input_width"
                type="number"
                onChange={updateDimensions}
                defaultValue={width}
            />
            <input
                id="input_height"
                type="number"
                onChange={updateDimensions}
                defaultValue={height}
            />
            <input
                type="text"
                onInput={updateBoard}
                defaultValue={game}
            />
        </div>
    )
}