import React, {useState} from "react";
import { Forum } from "./Forum";
import { lessons } from "../Lessons/LessonFrame";

export const Discuss = (props) => {

    console.log(props)

    const [lesson, setLesson] = useState()

    props.lesson && !lesson && setLesson(props.lesson)

  return (
    <div>
      {lesson && (
        <>
          <h1>Discuss lesson number {lesson}</h1>
          {!props.modal && <p onClick={() => setLesson()}>Back</p>}
          <Forum lesson={lesson} />
        </>
      )}
      {!lesson && (
        <>
          <h1>Discuss the course</h1>
          {lessons.map((lesson, index) => (
            <p onClick={() => setLesson(index+1)}>Lesson {index + 1}</p>
          ))}
        </>
      )}
    </div>
  );
};
