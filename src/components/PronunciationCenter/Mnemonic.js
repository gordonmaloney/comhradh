import React from "react";
import { WORDS } from "../Lessons/WORDS";
import { MNEMONICS } from "../Lessons/MNEMONICS";


export const Mnemonic = ({ word }) => {
  return (
    <>
      {MNEMONICS.filter((mnemonic) => mnemonic.word == word)[0]?.mem && (
        <>
          Tip to remember:{" "}
          {MNEMONICS.filter((mnemonic) => mnemonic.word == word)[0].mem}
        </>
      )}
    </>
  );
};
