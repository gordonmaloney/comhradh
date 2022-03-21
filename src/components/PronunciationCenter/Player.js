import React from "react";

export const Player = ({ word }) => {

  return (
    <>
      <h2>{word}</h2>
      <br />

      <audio src={`/Audio/${word}.mp3`} controls="controls" />
    </>
  );
};
