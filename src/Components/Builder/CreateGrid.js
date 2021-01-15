import "./CreateGrid.css";

export default function CreateGrid({ setGame, setQs, setDimensions }) {

    const updateBoard = (event) => {
        const board = event.target.value;
        setGame(board);
    }

    return (
        <div className="create-grid">
            <input
                type="text"
                onInput={updateBoard}

            />
        </div>
    )
}