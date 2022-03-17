import React from "react";
import { lessons } from "./Lessons/LessonFrame";

export const CheatSheet = () => {
  return (
    <div>
      CheatSheet
      {lessons.map((lesson, index) => 
      <>
      <h2>Lesson {index+1} - {lesson.title}</h2>
      {lesson.Recap()}
      </>
      )}
    </div>
  );
};
