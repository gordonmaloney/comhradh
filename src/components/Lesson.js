import React, { useState } from "react";
import { LESSONS } from "./Lessons/LESSONS";
import { VocabSidebar } from "./VocabSidebar";
import { useHistory } from "react-router-dom";

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ReceiptIcon from "@mui/icons-material/Receipt";
import QuizIcon from "@mui/icons-material/Quiz";
import ChatIcon from "@mui/icons-material/Chat";

import { Discuss } from "./Discuss";
import { Dictionary } from "./Dictionary";

import { Lesson1, LessonFrame } from "./Lessons/LessonFrame";

export const Lesson = (props) => {
  const history = useHistory();

  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [dict, setDict] = useState(null);

  const [display, setDisplay] = useState("lesson");

  console.log(props.match.params) 

  return (
    <div>
      <VocabSidebar lesson={props.match.params.lesson} />

      <LessonFrame lesson={props.match.params.lesson} step={props.match.params.step} />

      <div className="innerContainer">

        {/*
        {display === "lesson" ? (
          <LessonFrame lesson={props.match.params.lesson} />
        ) : display === "discuss" ? (
          <Discuss lesson={props.match.params.lesson} />
        ) : display === "dictionary" ? (
          <Dictionary />
        ) : display === "cheatsheet" ? (
          <p>cheatsheet...</p>
        ) : display === "quiz" ? (
          <p>quiz...</p>
        ) : null}

        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={5}
        >
          <BottomNavigation
            sx={{ width: "100%" }}
            value={value}
            onChange={handleChange}
          >
            <BottomNavigationAction
              label="Lesson"
              value="lesson"
              onClick={() => setDisplay("lesson")}
              icon={<BorderColorIcon />}
            />
            <BottomNavigationAction
              label="Dictionary"
              value="dictionary"
              onClick={() => setDisplay("dictionary")}
              icon={<MenuBookIcon />}
            />
            <BottomNavigationAction
              label="Cheatsheet"
              value="cheatsheet"
              onClick={() => setDisplay("cheatsheet")}
              icon={<ReceiptIcon />}
            />
            <BottomNavigationAction
              label="Quiz"
              value="quiz"
              onClick={() => setDisplay("quiz")}
              icon={<QuizIcon />}
            />
            <BottomNavigationAction
              label="Discuss"
              value="discuss"
              onClick={() => setDisplay("discuss")}
              icon={<ChatIcon />}
            />
          </BottomNavigation>
        </Paper>
        */}
      </div>
    </div>
  );
};
