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

function App() {


  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <SideMenu />

          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/lessons" exact component={LessonList} />
            <Route path="/lessons/:lesson" exact component={Lesson} />
            <Route path="/dictionary" exact component={Dictionary} />
            <Route path="/discuss/:lesson" exact component={Discuss} />
          </Switch>

      </Container>
    </BrowserRouter>
  );
}

export default App;
