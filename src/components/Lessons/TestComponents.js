import React, { useState } from "react";
import { Grid, inputAdornmentClasses } from "@mui/material";
import { TextField } from "@mui/material";

export const Qtranslate = (props) => {
  const [answers, setAnswers] = useState(props.words);

  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);

  const handleCorrect = (Q) => {
    !correct.includes(Q.toLowerCase()) &&
      setCorrect([...correct, Q.toLowerCase()]);

    incorrect.includes(Q.toLowerCase()) &&
      setIncorrect(incorrect.filter((answers) => answers != Q.toLowerCase()));
  };

  const handleIncorrect = (Q) => {
    correct.includes(Q.toLowerCase()) &&
      setCorrect(correct.filter((answers) => answers != Q.toLowerCase()));
  };

  const handleIncorrectTried = (Q) => {
    correct.includes(Q.toLowerCase()) &&
      setCorrect(correct.filter((answers) => answers != Q.toLowerCase()));

    setIncorrect([...incorrect, Q.toLowerCase()]);
  };

  const handleSubmit = (e, Q, input, A) => {
    e.keyCode == 13 &&
      input.toLowerCase() != A.toLowerCase() &&
      handleIncorrectTried(Q.toLowerCase());
    e.keyCode == 13 &&
      input.toLowerCase() == A.toLowerCase() &&
      handleCorrect(Q.toLowerCase());
  };

  const handleChange = (e, Q, input, A) => {
    input.toLowerCase() != A.toLowerCase() && handleIncorrect(Q.toLowerCase());
    input.toLowerCase() == A.toLowerCase() && handleCorrect(Q.toLowerCase());
  };

  return (
    <>
      <Grid container>
        {props.words.map((word, index) => (
          <>
            {index % 2 == 0 && (
              <>
                <Grid item xs={6}>
                  {props.words[index]}
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    sx={{
                      backgroundColor: correct.includes(
                        props.words[index].toLowerCase()
                      )
                        ? "lightgreen"
                        : incorrect.includes(
                            props.words[index].toLowerCase()
                          ) && "red",
                    }}
                    size="small"
                    onKeyDown={(e, Q, input, A) =>
                      handleSubmit(
                        e,
                        props.words[index],
                        e.target.value,
                        props.words[index + 1]
                      )
                    }
                    onChange={(e, Q, input, A) =>
                      handleChange(
                        e,
                        props.words[index],
                        e.target.value,
                        props.words[index + 1]
                      )
                    }
                  />
                </Grid>
              </>
            )}
          </>
        ))}
      </Grid>
    </>
  );
};
