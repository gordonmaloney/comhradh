import React, { useState } from "react";
import { RecordPlay } from "./RecordPlay";
import { Player } from "./Player";
import { WORDS } from "../Lessons/WORDS";
import { Mnemonic } from "./Mnemonic";

export const PronunciationCentre = (props) => {

  const [lesson, setLesson] = useState(props.lesson);
  const [word, setWord] = useState(props.word);

  if (!lesson) {
    props.match.params.lesson ? setLesson(props.match.params.lesson) : setLesson(1)
  }

  if (lesson && !word) {
    setWord(WORDS.filter((level) => level.lesson == lesson)[0].words[0].gd);
  }

  if (lesson && word) {
    return (
      <div className="pronunciationCentre">
        <center>
          <h1>Pronunciation Centre</h1>

          <Player word={word} />
          <RecordPlay />

          <br />
          <Mnemonic word={word} />
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
  } else {
    return <></>;
  }
};
