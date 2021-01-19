import { useState, useEffect } from "react";
import App from "./App";
import Loading from "./Components/Loading";

export default function Loader() {
  const [config, setConfig] = useState(undefined);
  const [questions, setQuestions] = useState(undefined);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    fetch("/crossword/myData.json")
      .then(res => res.json())
      .then(res => {
        setConfig(res[0]);
        setQuestions(res[1]);
      });
  }


  return (config && questions) ?
    <App config={config} questions={questions} /> :
    <Loading />;
}