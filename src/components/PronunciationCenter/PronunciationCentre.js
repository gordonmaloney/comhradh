import React from "react";
import { RecordPlay } from "./RecordPlay";
import { Player } from "./Player";

export const PronunciationCentre = (props) => {
  const word = props.match.params.word;

  return (
    <div className="pronunciationCentre">
      <center>
      <h1>Pronunciation Centre</h1>

      <Player word={word} />
      <RecordPlay />
      </center>
    </div>
  );
};
