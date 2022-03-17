import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useHistory } from "react-router-dom";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { Title } from "./LessonComponents";

import * as Lesson1 from "./Lesson1";
import * as Lesson2 from "./Lesson2";
import * as Lesson3 from "./Lesson3";
import { TestFrame } from "./TestFrame";

//use this for converting: https://html-online.com/editor/

export const lessons = [Lesson1, Lesson2, Lesson3];

export const LessonFrame = ({ lesson, step }) => {
  console.log(lesson, step)
  const history = useHistory();

  const { steps, Content, title } = lessons[lesson - 1];

  console.log(Lesson2.steps);

  const [activeStep, setActiveStep] = useState(step-1);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    history.push(`./${activeStep+2}`)

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);

  };

  const handleBack = () => {
    history.push(`./${activeStep}`)

    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <div className="lessonHeader">
        <h1>
          Lesson {lesson} - {title}
        </h1>

        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    setActiveStep(index);
                    history.push(`./${index+1}`)
                  }}
                  {...labelProps}
                >
                  {label}
                </StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>


      <Title title={steps[activeStep]} />


      {/*content for stepper*/}
      <Content step={activeStep + 1} />
      {/*content ends*/}

      {activeStep === steps.length ? (
        <React.Fragment>
          <TestFrame lesson={lesson} />

          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Back
            </Button>

            <Box sx={{ flex: "1 1 auto" }} />
            <Link to={`../lessons/${parseInt(lesson) + 1}`}>
              <Button onClick={() => setActiveStep(0)}>Next lesson</Button>
            </Link>
          </Box>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            {activeStep !== 0 && (
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
            )}
            <Box sx={{ flex: "1 1 auto" }} />

            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Take the test" : "Next"}
            </Button>
          </Box>
        </React.Fragment>
      )}

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </Box>
  );
};
