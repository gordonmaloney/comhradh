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
              sm={props.words.length >= 6 ? 6 : 12}
              md={
                props.words.length >= 6 ? 6 : props.words.length >= 4 ? 6 : 12
              }
              lg={
                props.words.length >= 8
                  ? 6
                  : props.words.length >= 6
                  ? 6
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
                  <span
                    onClick={() => {
                      setOpen(true);
                      setWord(props.words[index + 1]);
                    }}
                  >
                    {props.words[index + 1]}
                  </span>

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

export const Table = ({ row1, row2, row3, row4, row5 }) => {
  console.log(row1);
  return (
    <Grid container spacing={2}>
      {row1 && (
        <>
          {row1.map((rowItem, index) => {
            return (
              <Grid
                item
                className={index == 0 ? "tableTitle" : "tableHeader"}
                xs={12 / row1.length}
              >
                {rowItem}
              </Grid>
            );
          })}
        </>
      )}

      {row2 && (
        <>
          {row2.map((rowItem, index) => {
            return (
              <Grid
                item
                className={index == 0 && "tableHeader"}
                xs={12 / row2.length}
              >
                {rowItem}
              </Grid>
            );
          })}
        </>
      )}

      {row3 && (
        <>
          {row3.map((rowItem, index) => {
            return (
              <Grid
                item
                className={index == 0 && "tableHeader"}
                xs={12 / row3.length}
              >
                {rowItem}
              </Grid>
            );
          })}
        </>
      )}

      {row4 && (
        <>
          {row4.map((rowItem, index) => {
            return (
              <Grid
                item
                className={index == 0 && "tableHeader"}
                xs={12 / row4.length}
              >
                {rowItem}
              </Grid>
            );
          })}
        </>
      )}

      {row5 && (
        <>
          {row5.map((rowItem, index) => {
            return (
              <Grid
                item
                className={index == 0 && "tableHeader"}
                xs={12 / row5.length}
              >
                {rowItem}
              </Grid>
            );
          })}
        </>
      )}
    </Grid>
  );
};

export const Ex = ({ en, gd, explainer }) => {
  return (
    <span style={{width: "100%"}}>
      <center>
    <span className="ex">
      {en && <><span className="engEx">{en}</span><br /></>}
      {gd && <><span className="gdEx">{gd}</span><br /></>}
      {explainer && <><span className="explainer">{explainer}</span><br /></>}
    </span>
    </center>
    </span>
  );
};

export const HoverBox = ({ en, gd }) => {
  return (
    <span className="hovBox">
      <span className="hoxBoxInner">
        <span className="hovEng">{en}</span>
        <br />
        <span className="hoverRev hovGd">{gd}</span>
        <span className="helperText">Hover to reveal</span>
      </span>
    </span>
  );
};

export const MathBox = ({ one, two, three }) => {
  return (
    <center>
    <Grid container sx={{width: "50%", minWidth: "400px", margin: "20px", border: "1px solid grey"}} spacing={2}>
    <Grid item xs={6} sx={{textAlign: "right"}}>
        
      </Grid>
      <Grid item xs={6} sx={{textAlign: "left"}}>
        {one}
      </Grid>
      <Grid item xs={6} sx={{textAlign: "right"}}>
        +
      </Grid>
      <Grid item xs={6} sx={{textAlign: "left"}}>
        {two}
      </Grid>
      <Grid item xs={12} sx={{textAlign: "center", paddingTop: "0px", marginTop: "10px", marginBottom: "10px",  borderTop: "1px solid grey"}}>
        {three}
      </Grid>
    </Grid>
    </center>
  );
};
