import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Title } from "./LessonComponents";

import * as Lesson1 from "./Lesson1";
import * as Lesson2 from "./Lesson2";
import * as Lesson3 from "./Lesson3";

//use this for converting: https://html-online.com/editor/

const lessons = [Lesson1, Lesson2, Lesson3];

export const TestFrame = ({ lesson }) => {
  const { Questions } = lessons[lesson - 1];


  return (
    <Box sx={{ width: "100%" }}>
      <h1>Test - level {lesson}</h1>

      {Questions}

    </Box>
  );
};
