import React, { useState } from "react";
import { Grid, inputAdornmentClasses } from "@mui/material";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

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

export const Selecter = ({ text, options, correct, textCont }) => {
  const [selectValue, setSelectValue] = useState("Select...");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const [graded, setGraded] = useState("");

  selectValue == correct && graded != "lightgreen" && setGraded("lightgreen");
  selectValue != "Select..." &&
    selectValue != correct &&
    graded != "red" &&
    setGraded("red");
  graded != "" && selectValue == "Select..." && setGraded("");

  return (
    <p style={{ marginBottom: "10px" }}>
      {text && text}
      <Select
        autoWidth
        value={selectValue}
        onChange={handleChange}
        label="select"
        sx={{ backgroundColor: graded }}
      >
        <MenuItem value="Select...">
          <em>Select...</em>
        </MenuItem>
        {options.map((option) => (
          <MenuItem value={option}>{option}</MenuItem>
        ))}
      </Select>
      {textCont && textCont}
    </p>
  );
};

export const Dragger = () => {
  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const [options, setOptions] = useState([ "mi", "glè", "tha", "sgìth"]);

  const [chipData, setChipData] = React.useState([]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
    setOptions([...options, chipToDelete]);
  };

  const handleClick = (label) => {
    setChipData([...chipData, label]);
    setOptions((chips) => chips.filter((chip) => chip !== label));
  };

  return (
    <>
      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {options.map((data, index) => {
          return (
            <ListItem key={data}>
              <Chip label={data} onClick={() => handleClick(data)} />
            </ListItem>
          );
        })}
      </Paper>

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          p: 0.5,
          m: 0,
        }}
        component="ul"
      >
        {chipData.map((data, index) => {
          return (
            <ListItem key={index}>
              <Chip label={data} onDelete={handleDelete(data)} />
            </ListItem>
          );
        })}
      </Paper>
    </>
  );
};
