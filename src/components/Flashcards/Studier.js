import React, { useEffect, useState } from "react";

//take words from prop
//shuffle them, using useMemo so it only shuffles once
//push duplicate to end of deck if wrong
//activeStep progresses by one w/ each guess

export const Studier = ({ words }) => {


  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle...
    while (currentIndex != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  const shuffledWords = React.useMemo(() => {
    let wordsToShuffle = words.map(word => word)
    return shuffle(wordsToShuffle)
  }, [])

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
            {studyList[activeCard].en}
            <br />
            <br />
            {reveal && studyList[activeCard].gd}
            <br />
            <br />
            {!reveal ? (
              <button onClick={() => setReveal(!reveal)}>Show Answer</button>
            ) : (
              <>
                <button onClick={handleRight}>Right</button>
                <button onClick={handleWrong}>Wrong</button>
              </>
            )}
          </center>
        </div>
      ) : (
        <div style={{ border: "1px solid grey", margin: "5px" }}>
          <center>You have finished this deck!</center>
        </div>
      )}
    </>
  );
};