import React from "react";
import { RecordPlay } from "./RecordPlay";
import { Player } from "./Player";

export const PronunciationCentre = ({ lesson }) => {
  const word = "chan eil";

  return (
    <div className="pronunciationCentre">
      <center>
        <h1>Pronunciation Centre</h1>

        <i>Work in progress - to be continued...</i>

        <Player word={word} />
        <RecordPlay />
      </center>
    </div>
  );
};
