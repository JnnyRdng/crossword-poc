import { useState, useEffect } from "react";
import Clue from "./Clue";

export default function ClueList({ board, dimensions, setQs }) {

  const [clues, setClues] = useState([]);
  const [clueNumber, setClueNumber] = useState(0);



  return (
    <Clue />
  );
}