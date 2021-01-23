import { useState, useEffect } from "react";
import { getWordLength } from "../../helpers/findCells";

export default function Clue({ clue, board, arrayIndex, setQs, questions }) {

  const [question, setQuestion] = useState(clue.question);

  useEffect(() => {
    const updated = JSON.parse(JSON.stringify(questions));
    updated[arrayIndex] = { ...clue, question };
    setQs(updated);
  }, [question])

  const handleQuestionInput = ({ target }) => {
    setQuestion(target.value);
  }

  return (
    <div>
      <label htmlFor="clue_1">{clue.num}  </label>
      <input value={question} onChange={handleQuestionInput} />
      <input defaultValue={getWordLength(clue.index, clue.direction, board, { width: 13, height: 13 }).map(o => o.value).join("")} />
    </div>
  );
}