import { Login } from "./components/Login";
import { useState, useEffect } from "react";
import { SideMenu } from "./components/SideMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { LessonList } from "./components/LessonList";
import { Welcome } from "./components/Welcome";
import { Lesson } from "./components/Lesson";
import { Dictionary } from "./components/Dictionary";
import { Discuss } from "./components/Discuss";
import { Test } from './components/Test'
import { PronunciationCentre } from './components/PronunciationCenter/PronunciationCentre'
import { FlashcardsMain } from "./components/Flashcards/FlashcardsMain";
import { CheatSheet } from "./components/CheatSheet";
import { Profile } from "./components/Profile";
import { FetchUser } from "./components/FetchUser";
import { Redirect } from "./components/Redirect";

function App() {

  return (
    <BrowserRouter>
        <FetchUser />
        <SideMenu />

          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/lessons" exact component={LessonList} />
            <Route path="/lessons/:lesson/:step" exact component={Lesson} />
            <Route path="/test/:lesson" exact component={Test} />
            <Route path="/dictionary" exact component={Dictionary} />
            <Route path="/discuss/:lesson" exact component={Discuss} />
            <Route path="/pronunciation/:word" component={PronunciationCentre} />
            <Route path="/flashcards" exact component={FlashcardsMain} />
            <Route path="/cheatsheet" exact component={CheatSheet} />
            <Route path="/profile" exact component={Profile} />

            <Route path='/loggedout' exact render={(props) => <Redirect logged="out" />} />
            <Route path='/loggedin' exact render={(props) => <Redirect logged="in" />} />
          </Switch>

    </BrowserRouter>
  );
}

export default App;
