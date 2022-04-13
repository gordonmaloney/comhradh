import { Chip, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import {
  Qtranslate1,
  Dragger,
  Selecter,
  Leniter,
  AccentSelector,
} from "./Lessons/TestComponents";
import { Paper } from "@mui/material";

//stepper for quiz questions if it's useful who knows lmao

export const Quiz = () => {
  const [correct, setCorrect] = useState(false);

  const [index, setIndex] = useState(2);

  const [questions, setQuestions] = useState([
    <AccentSelector
      sentence="tha mi sgìth"
      handleSubmit={true}
      handleCorrect={() => handleCorrect()}
      header="default"
    />,

    <Leniter
      sentence="ta mhi sgìth"
      correctSentence="tha mi sgìth"
      handleCorrect={() => handleCorrect()}
      handleSubmit={true}
      header="default"
    />,

    <Dragger
      sentence="tha mi beag"
      handleSubmit={true}
      handleCorrect={() => handleCorrect()}
      header="default"
    />,

    <Selecter
      text="Tha mi "
      options={["sgith", "sgìth"]}
      correct="sgìth"
      textCont="."
      handleSubmit={true}
      handleCorrect={() => handleCorrect()}
      header="default"
    />,

    <Qtranslate1
      Q="Tha mi beag"
      A={["I am small", "I'm small"]}
      handleSubmit={true}
      handleCorrect={() => handleCorrect()}
      header="default"
    />,
  ]);

  const handleCorrect = (e) => {
    setCorrect(true);
    setIndex((prevIndex) => prevIndex + 1);

    setTimeout(() => {
      setCorrect(false);
    }, 2000);
  };

  return (
    <div style={{ padding: "10px" }}>
      <br />
      <br />

      <h3 style={{ textAlign: "right" }}>
        {index} / {questions.length}
      </h3>

      <br />

      <div>{questions[index]}</div>

      <center>
        <h3>
          {index == questions.length
            ? "Congrats! You've finished the quiz!"
            : correct && "Correct!"}
        </h3>
      </center>
    </div>
  );
};
