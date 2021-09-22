import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const LessonList = () => {
  return (
    <div>
      <Link to="/lessons/1">
        <Button>Lesson One</Button>
      </Link>
      <br />
      <Link to="/lessons/2">
        <Button>Lesson Two</Button>
      </Link>{" "}
      <br />
      <Link to="/lessons/3">
        <Button>Lesson Three</Button>
      </Link>
      <br />
    </div>
  );
};
