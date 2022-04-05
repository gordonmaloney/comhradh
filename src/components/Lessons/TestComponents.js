import React, { useEffect, useState } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

//text cleaner
//translate
//drop down selecter
//chip drag n dropper

//all have an optional "handleCorrect()" prop that can be called from the parent

export const cleanText = (str) => {
  console.log("testing: ", str);
  if (str) {
    return (
      str
        //make lower case
        .toLowerCase()
        //remove punctuation
        .replace(/[^\w\s]|_/g, " ")
        //remove double spaces
        .replace(/\s+/g, " ")
        //trim white space and start and end
        .trim()
    );
  }
};

export const Qtranslate1 = (props) => {
  const handleCorrectProp = props.handleCorrect;

  const Q = props.Q;
  const A = props.A.map((As) => cleanText(As));

  console.log(A);

  const [correct, setCorrect] = useState("untested");

  props.handleCorrect && correct == "true" && handleCorrectProp();

  const handleCorrect = () => {
    correct != "true" && setCorrect("true");
  };

  const handleIncorrect = () => {
    correct != "false" && setCorrect("false");
  };

  const handleIncorrectTried = () => {
    console.log("incorrect tried");
    correct != "false" && setCorrect("false");
  };

  const handleSubmit = (e, Q, input) => {
    e.keyCode == 13 && !A.includes(cleanText(input)) && handleIncorrectTried();
    e.keyCode == 13 && A.includes(cleanText(input)) && handleCorrect();
  };

  const handleChange = (e, Q, input) => {
    console.log(correct);
    correct != "untested" && !A.includes(cleanText(input)) && handleIncorrect();
    A.includes(cleanText(input)) && handleCorrect();
  };

  return (
    <>
      <Grid container>
        <Grid item xs={6}>
          {Q}
        </Grid>
        <Grid item xs={6}>
          <TextField
            sx={{
              backgroundColor:
                correct == "true" ? "lightgreen" : correct == "false" && "red",
            }}
            size="small"
            onKeyDown={(e, Q, input) => handleSubmit(e, Q, e.target.value)}
            onChange={(e, Q, input) => handleChange(e, Q, e.target.value)}
          />
        </Grid>
      </Grid>
    </>
  );
};

export const Selecter = ({
  text,
  options,
  correct,
  textCont,
  handleCorrect,
}) => {
  const [selectValue, setSelectValue] = useState("Select...");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const [graded, setGraded] = useState("");

  handleCorrect && selectValue == correct && handleCorrect();

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

export const Dragger = ({ sentence, prompt, handleCorrect }) => {
  //take sentence from props and turn into randomised array
  const sentenceSplit = sentence.split(" ");
  sentenceSplit.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const [options, setOptions] = useState([""]);
  const [correct, setCorrect] = useState(false);

  correct == true && handleCorrect && handleCorrect();

  useEffect(() => {
    console.log(options, sentenceSplit);
    setOptions(sentenceSplit.map((word, index) => ({ word: word, id: index })));
  }, []);

  //ensure the shuffled version isn't not in the same order
  if (options.map((word) => word.word).join(" ") == sentence) {
    console.log("reshuffling");
    setOptions(sentenceSplit.map((word, index) => ({ word: word, id: index })));
  }

  const [chosen, setChosen] = useState([]);

  //dragging logic
  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const reorder = (list, startIndex, endIndex) => {
      const result = Array.from(list);
      const [removed] = result.splice(startIndex, 1);
      result.splice(endIndex, 0, removed);

      return result;
    };

    const items = reorder(
      chosen,
      result.source.index,
      result.destination.index
    );

    setChosen(items);
  };

  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "aliceblue" : correct ? "lightgreen" : "white",
    display: "flex",
    padding: 2,
    minHeight: "32px",
    flexWrap: "wrap",
    borderRadius: "0 0 5px 5px",
    border: "1px solid grey",
    borderTop: "none",
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "white",
    borderRadius: "20px",
    marginBottom: "2px",
    marginTop: "2px",
    // styles we need to apply on draggables
    ...draggableStyle,
  });

  sentence == chosen.map((word) => word.word).join(" ") &&
    correct == false &&
    setCorrect(true);
  sentence != chosen.map((word) => word.word).join(" ") &&
    correct == true &&
    setCorrect(false);

  const handleClick = (e) => {
    setChosen([...chosen, e]);

    setOptions((chips) => options.filter((chip) => chip !== e));
  };

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleDelete = (item) => {
    console.log(item);
    if (item != " " || item != undefined) {
      setChosen((chips) => chosen.filter((chip) => chip !== item));
      setOptions([...options, item]);
    }
  };

  return (
    <div style={{ marginBottom: "10px", marginTop: "10px" }}>
      {prompt && (
        <Paper
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            listStyle: "none",
            minHeight: "20px",
            backgroundColor: "aliceblue",
            p: 0,
            m: 0,
            borderRadius: "5px 5px 0 0",
            border: "1px solid grey",
            borderBottom: "0px",
          }}
        >
          <h4>{prompt}</h4>
        </Paper>
      )}

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          minHeight: "20px",
          backgroundColor: "aliceblue",
          p: 0.5,
          m: 0,
          borderRadius: prompt ? "0 0 0 0 " : "5px 5px 0 0",
          border: "1px solid grey",
          borderBottom: "1px solid blue",
        }}
        component="ul"
      >
        {options.map((data, index) => {
          return (
            <ListItem key={data.id}>
              <Chip label={data.word} onClick={() => handleClick(data)} />
            </ListItem>
          );
        })}
      </Paper>

      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable" direction="horizontal">
          {(provided, snapshot) => (
            <div
              ref={provided.innerRef}
              style={getListStyle(snapshot.isDraggingOver)}
              {...provided.droppableProps}
            >
              {chosen.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.word + item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={getItemStyle(
                        snapshot.isDragging,
                        provided.draggableProps.style
                      )}
                    >
                      <Chip
                        label={item.word}
                        onDelete={() => handleDelete(item)}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
};
