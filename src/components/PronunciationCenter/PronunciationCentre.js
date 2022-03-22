import React, { useState } from "react";
import { RecordPlay } from "./RecordPlay";
import { Player } from "./Player";
import { WORDS } from "../Lessons/WORDS";

export const PronunciationCentre = ({ lesson }) => {
  const [word, setWord] = useState("toilichte");

  return (
    <div className="pronunciationCentre">
      <center>
        <h1>Pronunciation Centre</h1>

        <Player word={word} />
        <RecordPlay />

        <hr />
        <h4>Other words in lesson {lesson}</h4>
        <div className="pronunciationCenterSelecter">
        {WORDS.filter((level) => level.lesson == lesson)[0].words.map(
          (word) => (
            <>
              <span onClick={() => setWord(word.gd)}>{word.gd}</span>
              <br />
            </>
          )
        )}
        </div>
      </center>
    </div>
  );
};
