import React from "react";
import { lessons } from "./Lessons/LessonFrame";

//pulls the recap section from every level

export const CheatSheet = () => {
  return (
    <div>
      {lessons.map((lesson, index) => {
        return (
          index > 0 && (
            <>
              <h2 style={{paddingLeft: "5px"}}>
                Lesson {index} - {lesson.title}
              </h2>
              {lesson.Recap()}
            </>
          )
        );
      })}
    </div>
  );
};
