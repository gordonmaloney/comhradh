import React from "react";
import audio from "./Audio/22189.mp3";

export const Player = ({ word }) => {
  return (
    <>
      <h2>{word}</h2>
      <br />
      <audio src={audio} controls="controls" />
    </>
  );
};
