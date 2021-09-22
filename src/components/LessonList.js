import React from "react";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

export const LessonList = () => {
  
  return (
    <div>
      <Link to="/lessons/1">
        <Button variant="contained" color="primary" size="large" margin="normal" fullWidth>Lesson One</Button>
      </Link>
      <br />
      <br />
      <Link to="/lessons/2">
        <Button variant="contained" color="primary" size="large" fullWidth>Lesson Two</Button>
      </Link>{" "}
      <br />
      <br />
      <Link to="/lessons/3">
        <Button variant="contained" color="primary" size="large" fullWidth>Lesson Three</Button>
      </Link>
      <br />
    </div>
  );
};
