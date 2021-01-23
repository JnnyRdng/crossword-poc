import { useState, useEffect } from "react";
import Clue from "./Clue";

export default function ClueList({ board, dimensions, setQs, cluesAcross, cluesDown }) {

  // const [clues, setClues] = useState([]);
  // const [clueNumber, setClueNumber] = useState(0);

  const [questions, setQuestions] = useState([...cluesAcross, ...cluesDown]);
  useEffect(() => {
    setQs(questions);
  }, [questions]);

  const mapClues = () => {
    return questions.map((clue, idx) => (
      <Clue clue={clue} key={`clue_${clue.direction}_${clue.index}`} board={board} arrayIndex={idx} setQs={setQs} questions={questions} />
    ));
  }

  return (
    <div style={{ height: 300, overflowY: "scroll" }}>
      {mapClues()}
    </div>
  );
}