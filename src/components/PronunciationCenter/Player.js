import React from "react";

export const CleanQuestionMarks = (str) => {
  if (str) {
    return (
      str
        //make lower case
        .toLowerCase()
        //remove question marks only
        .replace(/\?/g, '')
        //remove double spaces
        .replace(/\s+/g, " ")
        //trim white space and start and end
        .trim()
    );
  }
};

const Breakdown = ({ word }) => {
  try {
    let src = require(`./Breakdowns/${CleanQuestionMarks(word)}.mp3`);

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

  console.log(CleanQuestionMarks(word))

  try {
    let src = require(`./Audio/${CleanQuestionMarks(word)}.mp3`);

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
