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
  const { steps, Content, title } = lessons[lesson - 1];

  console.log(Lesson2.steps);

  const [activeStep, setActiveStep] = React.useState(steps.length);
  const [skipped, setSkipped] = React.useState(new Set());

  const { Questions } = lessons[lesson - 1];

  return (
    <Box sx={{ width: "100%" }}>
      
      <h1>Test - level {lesson}</h1>

      <Questions />
    </Box>
  );
};
