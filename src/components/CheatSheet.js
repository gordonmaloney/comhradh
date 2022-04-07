import React from "react";
import { lessons } from "./Lessons/LessonFrame";

//pulls the recap section from every level

export const CheatSheet = () => {
  return (
    <div>
      <center>
        <h2>
          This section contains the recaps from every lesson, all handily in one
          place.
        </h2>
      </center>
      {lessons.map((lesson, index) => {
        return (
          index > 0 && (
            <>
              <h3 style={{ paddingLeft: "5px" }}>
                Lesson {index} - {lesson.title}
              </h3>
              {lesson.Recap()}
            </>
          )
        );
      })}
    </div>
  );
};
