import React, { useEffect, useState } from "react";

const Leniter = ({
  sentence,
  correctSentence,
  handleCorrect,
  handleSubmit,
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
  useEffect(() => {
  if (
    (!handleSubmit || (handleSubmit && submitted)) &&
    sentenceSplit.join(" ") == correctSentence
  ) {
    handleCorrect();
    setSubmitted(false);
    setSentenceSplit(sentence.split(" "));
  }
}, [submitted])

  handleSubmit &&
    submitted &&
    sentenceSplit.join(" ") !== correctSentence &&
    console.log("incorrect");

  return (
    <div className="testComponent">
      <>
        {sentenceSplit.map((word, index) => {
          return (
            <span
              onClick={(word) => handleClick(word.target.textContent, index)}
              style={{ margin: "5px" }}
            >
              {word}
            </span>
          );
        })}
      </>

      {handleSubmit && (
        <button variant="contained" onClick={() => handleSubmitCheck()}>
          Submit
        </button>
      )}
    </div>
  );
};

export const Quiz2 = () => {
  const [correct, setCorrect] = useState(false);

  const [index, setIndex] = useState(0);

  const handleCorrect = () => {
    setIndex((prevIndex) => prevIndex + 1);
  };

  const [questions, setQuestions] = useState([
    <Leniter
      sentence="ta mhi sgìth"
      correctSentence="tha mi sgìth"
      handleCorrect={handleCorrect}
      handleSubmit={true}
    />,

    <Leniter
      sentence="ta mhi sgìth"
      correctSentence="tha mi sgìth"
      handleCorrect={handleCorrect}
      handleSubmit={true}
    />,

    <Leniter
      sentence="ta mhi sgìth"
      correctSentence="tha mi sgìth"
      handleCorrect={handleCorrect}
      handleSubmit={true}
    />,

    <Leniter
      sentence="ta mhi sgìth"
      correctSentence="tha mi sgìth"
      handleCorrect={handleCorrect}
      handleSubmit={true}
    />,

    <Leniter
      sentence="ta mhi sgìth"
      correctSentence="tha mi sgìth"
      handleCorrect={handleCorrect}
      handleSubmit={true}
    />,
  ]);

  return (
    <>
      Index: {index}
      <br />
      <div>{questions[index]}</div>
      <br />
      Correct answer for all should be "tha mi sgìth" - click word to add/remove
      the h
    </>
  );
};
