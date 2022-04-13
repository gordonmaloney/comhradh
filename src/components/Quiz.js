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
  const [total, setTotal] = useState([]);

  const [correct, setCorrect] = useState(false);

  const handleCorrect = (e) => {
    setCorrect(true);
    !total.includes(e) && setTotal([...total, e]);
    setTimeout(() => {
      setCorrect(false);
    }, 1000);
  };

  return (
    <>
      <AccentSelector
        sentence="tha mi sgìth"
        handleSubmit={true}
        handleCorrect={() => console.log("correct")}
      />

      <Leniter
        sentence="ta mhi sgìth"
        correctSentence="tha mi sgìth"
        handleCorrect={() => console.log("correct")}
        handleSubmit={true}
      />

      <Dragger
        sentence="tha mi beag"
        handleSubmit={true}
        handleCorrect={() => console.log("correct")}
      />

      <Selecter
        text="Tha mi "
        options={["sgith", "sgìth"]}
        correct="sgìth"
        textCont="."
        handleSubmit={true}
        handleCorrect={() => console.log("correct")}
      />

      <Qtranslate1
        Q="Tha mi beag"
        A={["I am small", "I'm small"]}
        handleSubmit={true}
        handleCorrect={() => console.log("correct")}
      />

      {total.length == 0 ? (
        <Dragger
          sentence="tha mi beag"
          handleCorrect={() => handleCorrect(1)}
          handleSubmit={true}
        />
      ) : total.length == 1 ? (
        <Selecter
          text="Tha mi "
          options={["sgith", "sgìth"]}
          correct="sgìth"
          textCont="."
          handleCorrect={() => handleCorrect(2)}
        />
      ) : total.length == 2 ? (
        <Qtranslate1
          Q="Tha mi beag"
          A={["I am small", "I'm small"]}
          handleCorrect={() => handleCorrect(3)}
        />
      ) : (
        total.length == 3 && <h2>Congrats!</h2>
      )}
      <h3>{total.length} / 3</h3>

      {correct && <h1>Correct!</h1>}
    </>
  );
};
