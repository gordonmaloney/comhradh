import React from "react";

const Breakdown = ({ word }) => {
  try {
    let src = require(`./Breakdowns/${word.toLowerCase()}.mp3`);

    let audioFile = new Audio(src.default);

    return (
      <>
        <br />
        Breakdown: <button onClick={() => audioFile.play()}>Play</button>
      </>
    );
  } catch {
    return <></>;
  }
};

export const Player = ({ word }) => {
  try {
    let src = require(`./Audio/${word.toLowerCase()}.mp3`);

    let audioFile = new Audio(src.default);

    return (
      <>
        <h2>{word}</h2>

        <button onClick={() => audioFile.play()}>Play</button>

        <Breakdown word={word} />
      </>
    );
  } catch {
    return (
      <>
        <h2>{word}</h2>
        <em>No audio file for this word yet</em>
      </>
    );
  }
};
