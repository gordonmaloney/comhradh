import React from "react";
import { useState } from "react";
import { Login } from "./Login";
import { useSelector } from "react-redux";
import { LandingPage } from "./LandingPage";
import { WORDS } from "./Lessons/WORDS";
import { FlashcardsMain } from "./Flashcards/FlashcardsMain";

export const Welcome = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const posts = useSelector((state) => state);


  const userLevels = posts.auth.progress
  
  const words = []

  WORDS.length && userLevels && WORDS.map(lesson => 
    userLevels.map(userLevel => 
      {lesson.lesson == userLevel && lesson.words.map(word => words.push(word))})
  )
  console.log("TEST", words)

  if (posts?.auth.progress) {
    return (
      <div>
        <center>
          {user ? (
            <>
              <h1><p>Fàilte, {user?.result?.name}!</p></h1>

              {!posts.auth ? (
                "Loading..."
              ) : (
                <>
                <h3>Your stats: </h3>
                  Levels completed: {posts.auth.progress.length - 1}
                  <br />
                  Words learned: {words?.length}
                  <br />

                  <h3>Your flashcards:</h3>
                  <FlashcardsMain hideTitle={true} />
                </>
              )}
            </>
          ) : (
            <>
              <center>
                <LandingPage />
                <Login />
              </center>
            </>
          )}
        </center>
      </div>
    );
  } else {
    return (
      <>
        <center>
          <LandingPage />
          <Login />
          <br /><br /><br />
        </center>
      </>
    );
  }
};
