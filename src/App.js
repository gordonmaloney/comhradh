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
import { FlashcardsMain } from "./components/Vocab/FlashcardsMain";
import { CheatSheet } from "./components/CheatSheet";

function App() {


  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <SideMenu />

          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/lessons" exact component={LessonList} />
            <Route path="/lessons/:lesson" exact component={Lesson} />
            <Route path="/test/:lesson" exact component={Test} />
            <Route path="/dictionary" exact component={Dictionary} />
            <Route path="/discuss/:lesson" exact component={Discuss} />
            <Route path="/pronunciation/:word" component={PronunciationCentre} />
            <Route path="/flashcards" exact component={FlashcardsMain} />
            <Route path="/cheatsheet" exact component={CheatSheet} />
          </Switch>

      </Container>
    </BrowserRouter>
  );
}

export default App;
