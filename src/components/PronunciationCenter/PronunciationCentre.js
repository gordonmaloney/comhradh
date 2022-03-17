import React from "react";
import { RecordPlay } from "./RecordPlay";
import { Player } from "./Player";

export const PronunciationCentre = () => {
  const word = "toilichte";
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
