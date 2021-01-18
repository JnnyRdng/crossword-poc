import { useState, useEffect } from "react";
import App from "./App";

export default function Loader() {
  const [config, setConfig] = useState(undefined);
  const [questions, setQuestions] = useState(undefined);

  useEffect(() => {
    fetch("/crossword/myData.js")
      .then(res => res.json())
      .then(res => {
        setConfig(res[0]);
        setQuestions(res[1]);
      });

  }, []);


  return (config && questions) ?
    <App config={config} questions={questions} /> :
    (
      <p>Loading...</p>
    );
}