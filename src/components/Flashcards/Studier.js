import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";

//take words from prop
//shuffle them, using useMemo so it only shuffles once
//push duplicate to end of deck if wrong
//activeStep progresses by one w/ each guess

const WordAudio = ({ word }) => {
  try {
    let AudioSrc = require(`../PronunciationCenter/Audio/${word.toLowerCase()}.mp3`);
    let AudioFile = new Audio(AudioSrc.default);
    AudioFile.play();
    return (
      <>
        {" "}
        <VolumeUpIcon onClick={() => AudioFile.play()} />
      </>
    );
  } catch {
    return <></>;
  }
};

export const Studier = ({ words }) => {
  function shuffle(array) {
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    return array;
  }

  const shuffledWords = React.useMemo(() => {
    let wordsToShuffle = words.map((word) => word);
    return shuffle(wordsToShuffle);
  }, []);

  const [studyList, setStudyList] = useState(shuffledWords);

  const [activeCard, setActiveCard] = useState(0);

  const [reveal, setReveal] = useState(false);

  const handleRight = () => {
    setReveal(false);
    setActiveCard(activeCard + 1);
  };

  const handleWrong = () => {
    setStudyList([...studyList, studyList[activeCard]]);
    setReveal(false);
    setActiveCard(activeCard + 1);
  };

  return (
    <>
      {studyList.length != activeCard ? (
        <div style={{ border: "1px solid grey", margin: "5px" }}>
          <center>
            <h4>{studyList[activeCard].en}</h4>
            {!reveal && <br />}
            <h4>
              {reveal && (
                <>
                  {studyList[activeCard].gd}
                  <WordAudio word={studyList[activeCard].gd} />
                </>
              )}
            </h4>
            {!reveal ? (
              <Button
                style={{ width: "90%", margin: "5px" }}
                variant="contained"
                color="primary"
                onClick={() => setReveal(!reveal)}
              >
                Show Answer
              </Button>
            ) : (
              <>
                <Button
                  style={{ margin: "5px", backgroundColor: "lightgreen" }}
                  variant="contained"
                  onClick={handleRight}
                >
                  Right
                </Button>
                <Button
                  style={{ margin: "5px", backgroundColor: "red" }}
                  variant="contained"
                  onClick={handleWrong}
                >
                  Wrong
                </Button>
              </>
            )}
          </center>
        </div>
      ) : (
        <div style={{ border: "1px solid grey", margin: "5px" }}>
          <center>
            <h3>You have finished this deck!</h3>
          </center>
        </div>
      )}
    </>
  );
};
