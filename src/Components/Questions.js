import {
  moveCellDown,
  moveCellRight,
  getCell,
  getIndex,
  cellFilled,
  cellEmpty,
  getCoords,
  getWordLength,
} from "../helpers/findCells.js";

export default function Questions({ questions, setDirection, starts, dimensions, board }) {

  // console.log("num of qs across", questions.across.length)
  // console.log("num of qs down", questions.down.length)

  function Question({ q, dir }) {



    const handleClick = () => {
      const qStart = starts[q.num];
      setDirection(qStart.direction);
      document.getElementById(`cell_${qStart.index}`).focus();
    }
    if (starts[q.num]) {
      const length = getWordLength(starts[q.num].index, dir, board, dimensions).length;
    // const length = 1;
    // console.log("starts number", starts[q.num].index)
    // console.log(length);

    return (
      <div onClick={() => handleClick()} style={{ marginTop: 4, textAlign: "start" }}>
        <span><span style={{ fontWeight: "bold" }}>{q.num}. </span>{q.question} ({length})</span>
      </div>
    );
    } else {
      return null;
    }
  }

  const across = questions.across.sort((a, b) => a.num - b.num).map((q, i) => <Question q={q} key={i + "_" + q.question} dir="across" />);
  const down = questions.down.sort((a, b) => a.num - b.num).map((q, i) => <Question q={q} key={i + "_" + q.question} dir="down" />);

  return (
    <div style={{ height: 50 * dimensions.height, width: 300, overflowX: "hidden", overflowY: "auto", padding: 10 }}>
      <h3>Across</h3>
      {across}
      <h3>Down</h3>
      {down}
    </div>
  )
}