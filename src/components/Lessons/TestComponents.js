import React, { useEffect, useState } from "react";
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


export const Dragger = ({ sentence }) => {

  //take sentence from props and turn into randomised array
  const sentenceSplit = sentence.split(" ");
  sentenceSplit.sort(() => (Math.random() > 0.5 ? 1 : -1));



  const [options, setOptions] = useState(['']);
  const [correct, setCorrect] = useState(false)

  useEffect(() => {
    console.log(options, sentenceSplit)
    setOptions(sentenceSplit.map((word, index) => ({word: word, id: index})))
  }, [])


  //ensure the shuffled version isn't not in the same order
  if (options.map(word => word.word).join(" ") == sentence) {
    console.log("reshuffling")
    setOptions(sentenceSplit.map((word, index) => ({word: word, id: index})))
  }

    const [chosen, setChosen] = useState([])


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
    background: isDraggingOver ? "lightblue" : correct ? "lightgreen" : "lightgrey",
    display: "flex",
    padding: 2,
    minHeight: '32px',
    flexWrap: 'wrap',
    borderRadius: "0 0 5px 5px",
    border: '1px solid grey',
    borderTop: 'none'
  });

  const getItemStyle = (isDragging, draggableStyle) => ({
    // some basic styles to make the items look a bit nicer
    // change background colour if dragging
    background: isDragging ? "lightgreen" : "",
    borderRadius: "20px",
    marginBottom: '2px',
    marginTop: '2px',
    // styles we need to apply on draggables
    ...draggableStyle,
  });


  
  sentence == chosen.map(word => word.word).join(" ") && correct == false && setCorrect(true);
  sentence != chosen.map(word => word.word).join(" ") && correct == true && setCorrect(false);



  const handleClick = (e) => {
    setChosen([...chosen, e]);

    setOptions((chips) =>
      options.filter((chip) => chip !== e)
    );  }

  const ListItem = styled("li")(({ theme }) => ({
    margin: theme.spacing(0.5),
  }));

  const handleDelete = (item) => {
    console.log(item)
    if (item != " " || item != undefined) {
    setChosen((chips) =>
      chosen.filter((chip) => chip !== item)
    );
    setOptions([...options, item]);
    }
  };

  return (
    <>
    <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          minHeight: "20px",
          p: 0.5,
          m: 0,
          borderRadius: '5px 5px 0 0',
          border: '1px solid grey',
          borderBottom: '1px solid blue'
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
                <Draggable key={item.id} draggableId={item.word + item.id} index={index}>
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

                      <Chip label={item.word} onDelete={() => handleDelete(item)} />

                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};
