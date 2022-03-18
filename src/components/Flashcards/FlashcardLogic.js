import React from "react";

import { WORDS } from "../../components/Lessons/WORDS";

const user = {
  name: "gordon",
  email: "email",
  progress: 2,
  cards: [
    { level: 1, word: 1, due: 1111 },
    { level: 1, word: 2, due: 2222 },
    { level: 1, word: 3, due: 3333 },
  ],
};

//get level
console.log(WORDS.filter((lesson) => lesson.lesson == 1)[0]);

//get specific word
console.log(WORDS.filter((lesson) => lesson.lesson == 1)[0].words[4]);

//get specific word with variables
const level = 1;
const word = 3;
console.log(
  user.cards.map(
    (userCard) =>
      WORDS.filter((lesson) => lesson.lesson == userCard.level)[0].words[
        userCard.word
      ]
  )
);

//get due date from user card array and card details from words array
user.cards.map((userCard) => {
  console.log(
    WORDS.filter((lesson) => lesson.lesson == userCard.level)[0].words[
      userCard.word
    ],
    " - ",
    userCard.due
  );
});

console.log("WORDS: ", WORDS[0].words)

export const FlashcardLogic = () => {
  return (
    <div>
      FlashcardLogic
      <br /> <br />
      {user.cards.map((userCard) => {
        return (
          <>
            {WORDS.filter((lesson) => lesson.lesson == userCard.level)[0].words[
            userCard.word ].gd}
            -
            {userCard.due}
          </>
        );
      })}
    </div>
  );
};
