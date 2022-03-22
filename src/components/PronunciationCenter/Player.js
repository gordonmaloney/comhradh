import React from "react";

const Breakdown = ({ word }) => {
  try {
    let src = require(`./Breakdowns/${word.toLowerCase()}.mp3`);

    return (
      <>
        <br />
        Breakdown:
        <audio controls src={`${src.default}`} />
      </>
    );
  } catch {
    return <></>;
  }
};

export const Player = ({ word }) => {
  try {
    let src = require(`./Audio/${word.toLowerCase()}.mp3`);

    return (
      <>
        <h2>{word}</h2>

        <audio controls src={`${src.default}`} />

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
