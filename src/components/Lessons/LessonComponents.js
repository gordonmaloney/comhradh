import React from "react";
import { Grid } from "@mui/material";

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
  return (
    <Grid container className="vocabGrid">
      <Grid item xs={12}>
        <div className="vocabBoxHeader">Vocab</div>
      </Grid>

      {props.words.map((word, index) => (
        <>
          {index % 2 == 0 && (
            <Grid item xs={12} sm={props.words.length >= 4 ? 6 : 12 } md={props.words.length >= 6 ? 4 : props.words.length >= 4 ? 6 : 12} lg={props.words.length >= 8 ? 3 : props.words.length >= 6 ? 4 : props.words.length >= 4 ? 6 : 12}>

            {/*
            <Grid item xs={12} sm={6} md={4} lg={3}>
          */}
              {console.log(props.words.length)}

              <Grid container>
                <Grid item className="vocabEn" xs={6}>
                  {props.words[index]}
                </Grid>
                <Grid item className="vocabGd" xs={6}>
                  {props.words[index + 1]}
                </Grid>
              </Grid>
            </Grid>
          )}
        </>
      ))}
    </Grid>
  );
};

export const Title = ({title}) => {
    return <span className="lessonSubHead">{title}</span>
}