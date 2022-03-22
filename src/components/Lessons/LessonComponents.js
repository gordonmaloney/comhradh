import React, { useState } from "react";
import { Grid } from "@mui/material";
import Tooltip from "@mui/material/Tooltip";

import { MNEMONICS } from "./MNEMONICS";
import { PronunciationCentre } from "../PronunciationCenter/PronunciationCentre";

import { Modal, Box } from "@mui/material";

export const TransTable = (props) => {
  return (
    <Grid container className="transTable">
      {props.words.map((word, index) => (
        <>
          {index % 2 == 0 && (
            <>
              <Grid item xs={6} className="transTableGd">
                {props.words[index]}
              </Grid>
              <Grid item xs={6} className="transTableEn">
                {props.words[index + 1]}
              </Grid>
            </>
          )}
        </>
      ))}
    </Grid>
  );
};

export const VocabGrid = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [word, setWord] = useState();

  return (
    <Grid container className="vocabGrid">
      <Grid item xs={12}>
        <div className="vocabBoxHeader">Vocab</div>
      </Grid>

      {props.words.map((word, index) => (
        <>
          {index % 2 == 0 && (
            <Grid
              item
              xs={12}
              sm={props.words.length >= 4 ? 6 : 12}
              md={
                props.words.length >= 6 ? 4 : props.words.length >= 4 ? 6 : 12
              }
              lg={
                props.words.length >= 8
                  ? 3
                  : props.words.length >= 6
                  ? 4
                  : props.words.length >= 4
                  ? 6
                  : 12
              }
            >
              {/*
            <Grid item xs={12} sm={6} md={4} lg={3}>
          */}
              <Grid container>
                <Grid item className="vocabEn" xs={6}>
                  {props.words[index]}
                </Grid>
                <Grid item className="vocabGd" xs={6}>
                  <span onClick={() => {setOpen(true); setWord(props.words[index + 1])}}>{props.words[index + 1]}</span>

                  {MNEMONICS.filter(
                    (mem) => mem.word == props.words[index + 1]
                  )[0]?.word && (
                    <Tooltip
                      title={
                        MNEMONICS.filter(
                          (mem) => mem.word == props.words[index + 1]
                        )[0]?.mem
                      }
                    >
                      <span className="mem">
                        <sup>m</sup>
                      </span>
                    </Tooltip>
                  )}
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      ))}

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="modalBox">
          <PronunciationCentre lesson={1} word={word} />
        </Box>
      </Modal>
    </Grid>
  );
};

export const Title = ({ title }) => {
  return <span className="lessonSubHead">{title}</span>;
};
