import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Title } from "./LessonComponents";

import * as Intro from './Intro'
import * as Lesson1 from "./Lesson1";
import * as Lesson2 from "./Lesson2";
import * as Lesson3 from "./Lesson3";
import * as Lesson4 from './Lesson4';
import * as Lesson5 from './Lesson5'

//use this for converting: https://html-online.com/editor/

const lessons = [Intro, Lesson1, Lesson2, Lesson3, Lesson4, Lesson5];

export const TestFrame = ({ lesson }) => {
  const { steps, Content, title } = lessons[lesson];

  const [activeStep, setActiveStep] = React.useState(steps.length);
  const [skipped, setSkipped] = React.useState(new Set());

  const { Questions } = lessons[lesson];

  return (
    <Box sx={{ width: "100%" }}>
      
      <h1>Test - {lesson>0 ?<>level {lesson}</>:"Intro"}</h1>

      <Questions />
    </Box>
  );
};
