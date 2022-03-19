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

import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";

import { Discuss } from "../Forum/Discuss";
import { Dictionary } from "../Dictionary/Dictionary";
import Modal from "@mui/material/Modal";

import BorderColorIcon from "@mui/icons-material/BorderColor";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import ReceiptIcon from "@mui/icons-material/Receipt";
import MicIcon from '@mui/icons-material/Mic';
import ChatIcon from "@mui/icons-material/Chat";

import * as Lesson1 from "./Lesson1";
import * as Lesson2 from "./Lesson2";
import * as Lesson3 from "./Lesson3";
import { TestFrame } from "./TestFrame";
import { SingleLevelVocab } from "../Dictionary/SingleLevelVocab";
import { PronunciationCentre } from "../PronunciationCenter/PronunciationCentre";

//use this for converting: https://html-online.com/editor/

export const lessons = [Lesson1, Lesson2, Lesson3];

export const LessonFrame = ({ lesson, step, match }) => {
  const [value, setValue] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  console.log(lesson, step);
  const history = useHistory();

  const { steps, Content, title } = lessons[lesson - 1];

  console.log(Lesson2.steps);

  const [activeStep, setActiveStep] = useState(step - 1);
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

    history.push(`./${activeStep + 2}`);

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    history.push(`./${activeStep}`);

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

  //modal logic
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [display, setDisplay] = useState("discuss");

  return (
    <>
      <div className="lessonHeader">
        <div className="innerHeader">
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
                      history.push(`./${index + 1}`);
                    }}
                    {...labelProps}
                  >
                    <span className="stepperLabel">{label}</span>
                  </StepLabel>
                </Step>
              );
            })}
          </Stepper>
        </div>
      </div>

      {/*content for stepper*/}
      <div className="innerContainer">
        <Title title={steps[activeStep]} />

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
              <Link to={`../../lessons/${parseInt(lesson) + 1}/1`}>
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
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={5}
      >
        <BottomNavigation
          sx={{ width: "100%" }}
          value={value}
          onChange={handleChange}
        >
          <BottomNavigationAction
            label="Lesson"
            value="lesson"
            onClick={() => {
              setOpen(false);
              setDisplay("none");
            }}
            icon={<BorderColorIcon />}
          />
          <BottomNavigationAction
            label="Dictionary"
            value="dictionary"
            onClick={() => {
              setOpen(true);
              setDisplay("dictionary");
            }}
            icon={<MenuBookIcon />}
          />
          <BottomNavigationAction
            label="Pronunciation Centre"
            value="pronunciation"
            onClick={() => {
              setOpen(true);
              setDisplay("pronounce");
            }}
            icon={<MicIcon />}
          />
          <BottomNavigationAction
            label="Discuss"
            value="discuss"
            onClick={() => {
              setOpen(true);
              setDisplay("discuss");
            }}
            icon={<ChatIcon />}
          />
        </BottomNavigation>
      </Paper>

      {
        //modal
      }
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox">
          {display === "discuss" ? (
            <Discuss lesson={lesson} />
          ) : display === "dictionary" ? (
            <SingleLevelVocab lesson={lesson} />
          ) : display === "pronounce" ? (
            <PronunciationCentre lesson={lesson} />
          ) : null}
        </Box>
      </Modal>
    </>
  );
};
