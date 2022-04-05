import React, { useEffect, useState } from "react";
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
import MicIcon from "@mui/icons-material/Mic";
import ChatIcon from "@mui/icons-material/Chat";

import * as Intro from "./Intro";
import * as Lesson1 from "./Lesson1";
import * as Lesson2 from "./Lesson2";
import * as Lesson3 from "./Lesson3";
import * as Lesson4 from "./Lesson4";
import { TestFrame } from "./TestFrame";
import { SingleLevelVocab } from "../Dictionary/SingleLevelVocab";
import { PronunciationCentre } from "../PronunciationCenter/PronunciationCentre";

//use this for converting lessons: https://html-online.com/editor/
export const lessons = [Intro, Lesson1, Lesson2, Lesson3, Lesson4];

export const LessonFrame = ({ lesson, step, match }) => {
  const history = useHistory();

  //bottom navigator
  const [value, setValue] = useState("");
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  //steps logic
  const { steps, Content, title } = lessons[lesson];
  const [activeStep, setActiveStep] = useState(step - 1);

  const handleNext = () => {
    history.push(`./${activeStep + 2}`);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    history.push(`./${activeStep}`);
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //scroll to top on activeStep change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeStep]);

  const handleReset = () => {
    setActiveStep(0);
  };

  //support modal

  const [supportModal, setSupportModal] = useState(false);

  useEffect(() => {
    Math.random() > 0.95 && setSupportModal(true);
  }, [activeStep]);


  const SupportModal = () => {
    return (
      <Modal
        open={supportModal}
        onClose={() => setSupportModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          className="modalBox"
          sx={{
            position: "absolute",
            textAlign: "center",
            overflowY: "auto",
            maxHeight: "90%",
            padding: "20px",
          }}
        >
          <h3>Can you help?</h3>
          Còmhradh is the culmination of a huge amount of time over many, many
          years - learning languages, observing Gaelic learners, teaching and
          tutoring, as well as learning coding and web design. It is an
          ambitious project, but to complete it will take a lot of time and
          resources.
          <br />
          <br />
          That’s why, if you can, I need your help. A small donation will allow
          me to devote the time necessary to continue to develop Còmhradh into
          the resource that Gaelic learners deserve.
          <br />
          <br />
          If you can spare a few pounds, you can do that here:{" "}
          <a target="_blank" href="https://ko-fi.com/gordonmaloney">
            ko-fi.com/gordonmaloney
          </a>
          <br />
          <br />
          If you can make your donation a monthly, recurring one, that will give
          even more predictability and certainty.
          <br />
          <br />
          <i>Mìle taing - a thousand thanks</i>
        </Box>
      </Modal>
    );
  };

  //modal logic
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setValue("lesson");
  };
  const [display, setDisplay] = useState(null);

  return (
    <div style={{ padding: 0 }}>
      <div className="lessonHeader">
        <div className="innerHeader">
          <h1>
            {lesson > 0 && <>Lesson {lesson} - </>}
            {title}
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
            label="Pronunciation"
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
        <Box
          className="modalBox"
          sx={{ position: "absolute", overflowY: "auto", maxHeight: "90%" }}
        >
          {display === "discuss" ? (
            <Discuss lesson={lesson} modal="modal" />
          ) : display === "dictionary" ? (
            <SingleLevelVocab lesson={lesson} />
          ) : display === "pronounce" ? (
            <PronunciationCentre lesson={lesson} />
          ) : null}
        </Box>
      </Modal>

      <SupportModal />

    </div>
  );
};
