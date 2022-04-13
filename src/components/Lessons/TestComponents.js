import React, { useEffect, useState, useRef } from "react";
import { Grid } from "@mui/material";
import { TextField } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { Button } from "@mui/material";

//all have an optional "handleCorrect()" prop that can be called from the parent
//optional handleSubmit boolean to determine whether they resolve right away or on click

export const cleanText = (str) => {
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

const SubmitBtn = styled(Button)({
  position: "fixed",
  left: "50%",
  transform: "translate(-50%, 0)",
  width: "60vw",
  bottom: "20px",
});

//translate one sentence
export const Qtranslate1 = (props) => {
  const handleCorrectProp = props.handleCorrect;

  const Q = props.Q;
  const A = props.A.map((As) => cleanText(As));
  const handleSubmit = props.handleSubmit;
  const header = props.header;

  const [correct, setCorrect] = useState("untested");
  const [inputField, setInputField] = useState("");

  props.handleCorrect && correct == "true" && handleCorrectProp();

  const handleCorrect = () => {
    correct != "true" && setCorrect("true");
    handleCorrectProp && handleCorrectProp();
  };

  const handleIncorrect = () => {
    correct != "false" && setCorrect("false");

    console.log("QTranslate - false", props.Q, props.A);
  };

  const handleIncorrectTried = () => {
    console.log("incorrect tried");
    correct != "false" && setCorrect("false");
  };

  const handleKeyPress = (e, Q, input) => {
    if (!handleSubmit) {
      e.keyCode == 13 &&
        !A.includes(cleanText(input)) &&
        handleIncorrectTried();
      e.keyCode == 13 && A.includes(cleanText(input)) && handleCorrect();
    }
    if (handleSubmit) {
    }
  };

  const handleChange = (e, Q, input) => {
    setInputField(input);
    console.log(inputField);
    !handleSubmit &&
      correct != "untested" &&
      !A.includes(cleanText(input)) &&
      handleIncorrect();
    !handleSubmit && A.includes(cleanText(input)) && handleCorrect();
  };

  console.log(inputField);

  const handleSubmitCheck = () => {
    console.log(inputField);
    !A.includes(cleanText(inputField)) && handleIncorrect();
    A.includes(cleanText(inputField)) && handleCorrect();
  };

  return (
    <div className="testComponent">
      {header && header == "default" ? (
        <h3>Translate the sentence below:</h3>
      ) : (
        header && <h3>{header}</h3>
      )}

      <Grid container>
        <Grid item xs={6}>
          {Q}
        </Grid>
        <Grid item xs={6}>
          <TextField
            text={inputField}
            sx={{
              backgroundColor:
                correct == "true" ? "lightgreen" : correct == "false" && "red",
            }}
            size="small"
            onKeyDown={(e, Q, input) => handleKeyPress(e, Q, e.target.value)}
            onChange={(e, Q, input) => handleChange(e, Q, e.target.value)}
          />
        </Grid>
      </Grid>

      {handleSubmit && (
        <SubmitBtn variant="contained" onClick={() => handleSubmitCheck()}>
          Submit
        </SubmitBtn>
      )}
    </div>
  );
};

//select one option
export const Selecter = ({
  text,
  options,
  correct,
  textCont,
  handleCorrect,
  handleSubmit,
  header,
}) => {
  const [selectValue, setSelectValue] = useState("Select...");

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const [graded, setGraded] = useState("");

  !handleSubmit && handleCorrect && selectValue == correct && handleCorrect();

  //handleIncorrect
  const handleIncorrect = () => {
    console.log("Selecter false", text, options, correct, textCont);
  };

  selectValue != "Select..." && !correct && handleIncorrect();

  if (!handleSubmit) {
    selectValue == correct && graded != "lightgreen" && setGraded("lightgreen");
    selectValue != "Select..." &&
      selectValue != correct &&
      graded != "red" &&
      setGraded("red");
    graded != "" && selectValue == "Select..." && setGraded("");
  }

  const handleSubmitCheck = () => {
    selectValue == correct && graded != "lightgreen" && setGraded("lightgreen");
    selectValue != "Select..." &&
      selectValue != correct &&
      graded != "red" &&
      setGraded("red");
    graded != "" && selectValue == "Select..." && setGraded("");
    handleCorrect && selectValue == correct && handleCorrect();
  };

  return (
    <div className="testComponent">
      {header && header == "default" ? (
        <h3>Pick the correct option:</h3>
      ) : (
        header && <h3>{header}</h3>
      )}

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
      {handleSubmit && (
        <SubmitBtn variant="contained" onClick={() => handleSubmitCheck()}>
          Submit
        </SubmitBtn>
      )}
    </div>
  );
};

//put sentence in order, optional prompt
export const Dragger = ({
  sentence,
  prompt,
  handleCorrect,
  handleSubmit,
  header,
}) => {
  //take sentence from props and turn into randomised array
  const sentenceSplit = sentence.split(" ");
  sentenceSplit.sort(() => (Math.random() > 0.5 ? 1 : -1));

  const [options, setOptions] = useState([""]);
  const [correct, setCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  !handleSubmit && correct == true && handleCorrect && handleCorrect();

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

  useEffect(() => {
    setSubmitted(false);
  }, [chosen]);

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
    background: isDraggingOver
      ? "aliceblue"
      : correct
      ? "lightgreen"
      : !correct && submitted
      ? "red"
      : "white",
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

  //handleIncorrect
  const handleIncorrect = () => {
    console.log("Dragger false", sentence);
  };

  chosen.length == sentenceSplit.length && !correct && handleIncorrect();

  //handleSubmit Check
  if (!handleSubmit) {
    sentence == chosen.map((word) => word.word).join(" ") &&
      correct == false &&
      setCorrect(true);
    sentence != chosen.map((word) => word.word).join(" ") &&
      correct == true &&
      setCorrect(false);
  }

  const handleSubmitCheck = () => {
    if (
      sentence == chosen.map((word) => word.word).join(" ") &&
      correct == false
    ) {
      setCorrect(true);
      handleCorrect && handleCorrect();
    }

    if (sentence != chosen.map((word) => word.word).join(" ")) {
      setCorrect(false);
      setSubmitted(true);
    }
    //submitted but false
  };

  return (
    <div className="testComponent">
      {header && header == "default" ? (
        <h3>Put the words in the correct order:</h3>
      ) : (
        header && <h3>{header}</h3>
      )}

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

      {handleSubmit && (
        <SubmitBtn variant="contained" onClick={() => handleSubmitCheck()}>
          Submit
        </SubmitBtn>
      )}
    </div>
  );
};

//fix lenition
export const Leniter = ({
  sentence,
  correctSentence,
  handleCorrect,
  handleSubmit,
  header,
}) => {
  const [sentenceSplit, setSentenceSplit] = useState(sentence.split(" "));

  const [submitted, setSubmitted] = useState(false);
  const handleSubmitCheck = () => {
    setSubmitted(true);
  };

  const handleClick = (word, index) => {
    setSubmitted(false);

    if (word.slice(1, 2) == "h") {
      let sentence2 = [...sentenceSplit];
      let word2 = word.slice(0, 1) + word.slice(2);
      sentence2[index] = word2;
      setSentenceSplit(sentence2);
    } else {
      let sentence2 = [...sentenceSplit];
      let word2 = word.slice(0, 1) + "h" + word.slice(1);
      sentence2[index] = word2;
      setSentenceSplit(sentence2);
    }
  };

  //handleCorrect / incorrect on submit
  (!handleSubmit || (handleSubmit && submitted)) &&
    sentenceSplit.join(" ") == correctSentence &&
    handleCorrect();
  handleSubmit &&
    submitted &&
    sentenceSplit.join(" ") !== correctSentence &&
    console.log("incorrect");

  return (
    <div className="testComponent">
      {header && header == "default" ? (
        <h3>
          Add or remove the <i>h</i> to make the correct form of the words:
        </h3>
      ) : (
        header && <h3>{header}</h3>
      )}

      <Paper
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          listStyle: "none",
          minHeight: "20px",
          backgroundColor:
            (!handleSubmit || (handleSubmit && submitted)) &&
            sentenceSplit.join(" ") == correctSentence
              ? "lightgreen"
              : handleSubmit &&
                submitted &&
                sentenceSplit.join(" ") !== correctSentence
              ? "red"
              : "aliceblue",
          p: 0.5,
          m: 0,
          borderRadius: "5px 5px 5px 5px",
          border: "1px solid grey",
        }}
      >
        {sentenceSplit.map((word, index) => {
          return (
            <Chip
              onClick={(word) => handleClick(word.target.textContent, index)}
              label={word}
              sx={{ marginLeft: "5px" }}
            />
          );
        })}
      </Paper>

      {handleSubmit && (
        <SubmitBtn variant="contained" onClick={() => handleSubmitCheck()}>
          Submit
        </SubmitBtn>
      )}
    </div>
  );
};

//choose whether vowels should have accents
export const AccentSelector = ({
  sentence,
  handleCorrect,
  handleSubmit,
  header,
}) => {
  const [submitted, setSubmitted] = useState(false);

  let accents = "aàeèiìoòuùAÀEÈIÌOÒUÙ";

  const [selectValue, setSelectValue] = useState([{ index: 2, value: "?" }]);

  const handleChange = (event, index) => {
    setSubmitted(false);
    setCorrect([]);
    setSelectValue([
      ...selectValue,
      { index: index, value: event.target.value },
    ]);
  };

  //handleCorrect/incorrect
  const [correct, setCorrect] = useState([]);

  const handleSubmitCheck = () => {
    setCorrect([]);
    setSubmitted(true);
  };

  submitted &&
    correct.includes("true") &&
    !correct.includes("false") &&
    handleCorrect();

  return (
    <div className="testComponent">
      {header && header == "default" ? (
        <h3>Select the correct versions of the vowels:</h3>
      ) : (
        header && <h3>{header}</h3>
      )}
      <h3>
        {sentence.split("").map((letter, index) => {
          if (accents.split("").includes(letter)) {
            let val =
              selectValue.filter((arrayVal) => arrayVal.index == index).length >
              0
                ? selectValue.filter((arrayVal) => arrayVal.index == index)[
                    selectValue.filter((arrayVal) => arrayVal.index == index)
                      .length - 1
                  ].value
                : "?";

            let bgColor =
              (!handleSubmit || (handleSubmit && submitted)) &&
              selectValue.filter((arrayVal) => arrayVal.index == index).length >
                0 &&
              selectValue.filter((arrayVal) => arrayVal.index == index)[
                selectValue.filter((arrayVal) => arrayVal.index == index)
                  .length - 1
              ].value == letter
                ? "lightgreen"
                : (!handleSubmit || (handleSubmit && submitted)) &&
                  selectValue.filter((arrayVal) => arrayVal.index == index)
                    .length > 0 &&
                  selectValue.filter((arrayVal) => arrayVal.index == index)[
                    selectValue.filter((arrayVal) => arrayVal.index == index)
                      .length - 1
                  ].value != "?"
                ? "red"
                : "aliceblue";

            //push to Correct array
            if (bgColor == "lightgreen" && !correct.includes("true")) {
              setCorrect([...correct, "true"]);
            }

            if (
              (bgColor == "red" || bgColor == "aliceblue") &&
              !correct.includes("false")
            ) {
              setCorrect([...correct, "false"]);
            }

            switch (letter) {
              case "a":
              case "à":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="a">a</MenuItem>
                      <MenuItem value="à">à</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "è":
              case "e":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="e">e</MenuItem>
                      <MenuItem value="è">è</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "i":
              case "ì":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="i">i</MenuItem>
                      <MenuItem value="ì">ì</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "o":
              case "ò":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="o">o</MenuItem>
                      <MenuItem value="ò">ò</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "u":
              case "ù":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="u">u</MenuItem>
                      <MenuItem value="ù">ù</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "A":
              case "À":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="A">A</MenuItem>
                      <MenuItem value="À">À</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "È":
              case "E":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="E">E</MenuItem>
                      <MenuItem value="È">È</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "I":
              case "Ì":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="I">I</MenuItem>
                      <MenuItem value="Ì">Ì</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "O":
              case "Ò":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="O">O</MenuItem>
                      <MenuItem value="Ò">Ò</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              case "U":
              case "Ù":
                return (
                  <>
                    <Select
                      onChange={(event) => handleChange(event, index)}
                      value={val}
                      autoWidth
                      label={index}
                      size="small"
                      style={{
                        backgroundColor: bgColor,
                      }}
                    >
                      <MenuItem value="?">?</MenuItem>
                      <MenuItem value="U">U</MenuItem>
                      <MenuItem value="Ù">Ù</MenuItem>={" "}
                    </Select>
                  </>
                );
                break;
              default:
                return <>broken</>;
            }
          } else {
            return <>{letter}</>;
          }
        })}
      </h3>
      {handleSubmit && (
        <SubmitBtn variant="contained" onClick={() => handleSubmitCheck()}>
          Submit
        </SubmitBtn>
      )}
    </div>
  );
};
