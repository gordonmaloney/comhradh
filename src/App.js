import { Login } from "./components/Login";
import { useState, useEffect } from "react";
import { SideMenu } from "./components/SideMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { LessonList } from "./components/LessonList";
import { Welcome } from "./components/Welcome";
import { Lesson } from "./components/Lesson";
import { Dictionary } from "./components/Dictionary/Dictionary";
import { Discuss } from "./components/Forum/Discuss";
import { Test } from "./components/Test";
import { PronunciationCentre } from "./components/PronunciationCenter/PronunciationCentre";
import { FlashcardsMain } from "./components/Flashcards/FlashcardsMain";
import { CheatSheet } from "./components/CheatSheet";
import { Profile } from "./components/Profile";
import { FetchUser } from "./components/FetchUser";
import { Redirect } from "./components/Redirect";
import { Header } from "./components/Header";
import { Quiz } from "./components/Quiz";


function App() {
  return (
    <BrowserRouter>


      <FetchUser />
      <Header />

      <SideMenu />

      <div className="outerContainer">
       
        <Switch>
          <Route path="/" exact component={Welcome} />
          <Route path="/lessons" exact component={LessonList} />
          <Route path="/lessons/:lesson/:step" exact component={Lesson} />
          <Route path="/test/:lesson" exact component={Test} />
          <Route path="/dictionary" exact component={Dictionary} />
          <Route path="/discuss" exact component={Discuss} />
          <Route path="/pronunciation" exact component={PronunciationCentre} />
          <Route path="/pronunciation/:lesson/:stage" component={PronunciationCentre} />
          <Route path="/flashcards" exact component={FlashcardsMain} />
          <Route path="/cheatsheet" exact component={CheatSheet} />
          <Route path="/profile" exact component={Profile} />


          <Route path="/quiz" exact component={Quiz} />
          <Route
            path="/loggedout"
            exact
            render={(props) => <Redirect logged="out" />}
          />
          <Route
            path="/loggedin"
            exact
            render={(props) => <Redirect logged="in" />}
          />
        </Switch>
      </div>


    </BrowserRouter>
  );
}

export default App;
