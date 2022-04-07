import { MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import { Qtranslate1 } from "./Lessons/TestComponents";
import { Selecter } from "./Lessons/TestComponents";
import { Dragger } from "./Lessons/TestComponents";

//stepper for quiz questions if it's useful who knows lmao

export const Quiz = () => {
  const [total, setTotal] = useState([]);

  const [correct, setCorrect] = useState(false);

  const handleCorrect = (e) => {
    setCorrect(true);
    !total.includes(e) && setTotal([...total, e]);
    setTimeout(() => {
      setCorrect(false);
    }, 1000);
  };

  const AccentSelector = ({ sentence }) => {
    let accents = "aàeèiìoòuùAÀEÈIÌOÒUÙ";

    const [selectValue, setSelectValue] = useState([{ index: 2, value: "?" }]);
    console.log(selectValue.filter((arrayVal) => arrayVal.index == 2)[0].value);

    const handleChange = (event, index) => {
      setSelectValue([
        ...selectValue,
        { index: index, value: event.target.value },
      ]);
    };

    return (
      <>
        <h3>
          {sentence.split("").map((letter, index) => {
            if (accents.split("").includes(letter)) {
              let val =
                selectValue.filter((arrayVal) => arrayVal.index == index)
                  .length > 0
                  ? selectValue.filter((arrayVal) => arrayVal.index == index)[
                      selectValue.filter((arrayVal) => arrayVal.index == index)
                        .length - 1
                    ].value
                  : "?";

              let bgColor =
                selectValue.filter((arrayVal) => arrayVal.index == index)
                  .length > 0 &&
                selectValue.filter((arrayVal) => arrayVal.index == index)[
                  selectValue.filter((arrayVal) => arrayVal.index == index)
                    .length - 1
                ].value == letter
                  ? "lightgreen"
                  : selectValue.filter((arrayVal) => arrayVal.index == index)
                      .length > 0 &&
                    selectValue.filter((arrayVal) => arrayVal.index == index)[
                      selectValue.filter((arrayVal) => arrayVal.index == index)
                        .length - 1
                    ].value != "?" &&
                    "red";
                    
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
      </>
    );
  };

  return (
    <>
      <AccentSelector sentence="tha mi sgìth" />

      <AccentSelector sentence="mòr" />

      <AccentSelector sentence="dèan" />

      {total.length == 0 ? (
        <Dragger
          sentence="tha mi beag"
          handleCorrect={() => handleCorrect(1)}
        />
      ) : total.length == 1 ? (
        <Selecter
          text="Tha mi "
          options={["sgith", "sgìth"]}
          correct="sgìth"
          textCont="."
          handleCorrect={() => handleCorrect(2)}
        />
      ) : total.length == 2 ? (
        <Qtranslate1
          Q="Tha mi beag"
          A={["I am small", "I'm small"]}
          handleCorrect={() => handleCorrect(3)}
        />
      ) : (
        total.length == 3 && <h2>Congrats!</h2>
      )}
      <h3>{total.length} / 3</h3>

      {correct && <h1>Correct!</h1>}
    </>
  );
};
