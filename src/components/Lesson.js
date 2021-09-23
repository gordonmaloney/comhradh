import React from "react";
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

export const Lesson = (props) => {
  const history = useHistory();

  const [value, setValue] = React.useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <VocabSidebar lesson={props.match.params.lesson} />

      {
        LESSONS.filter(
          (LESSON) => LESSON.lesson == props.match.params.lesson
        )[0].content
      }

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
            icon={<BorderColorIcon />}
          />
          <BottomNavigationAction
            label="Dictionary"
            value="dictionary"
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction
            label="Cheatsheet"
            value="cheatsheet"
            icon={<ReceiptIcon />}
          />
          <BottomNavigationAction
            label="Quiz"
            value="quiz"
            icon={<QuizIcon />}
          />
          <BottomNavigationAction
            label="Discuss"
            value="discuss"
            onClick={() => history.push(`/discuss/${props.match.params.lesson}`)}
            icon={<ChatIcon />}
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};
