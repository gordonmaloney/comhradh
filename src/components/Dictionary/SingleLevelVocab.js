import React from "react";
import { List, ListItem } from "@material-ui/core";
import { WORDS } from "../Lessons/WORDS";
import { TransTable } from "../Lessons/LessonComponents";

console.log(WORDS)

export const SingleLevelVocab = ({lesson}) => {

    let WordsForTable = []
    
    WORDS.filter((WORD) => WORD.lesson == lesson)[0].words.map(
        (word) => 
        {WordsForTable.push(word.gd)
            WordsForTable.push(word.en)
        }
    )

    console.log(WordsForTable)
  return (
    <List>
      <center>
        <h3>Lesson {lesson}: Vocab</h3>
      </center>

<TransTable words={WordsForTable} />
    </List>
  );
};
