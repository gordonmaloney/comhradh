import { Login } from "./components/Login";
import { useState, useEffect } from "react";
import { SideMenu } from "./components/SideMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { LessonList } from "./components/LessonList";
import { Welcome } from "./components/Welcome";


function App() {
  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <SideMenu />

        <Welcome />

        <Switch>

        <Route path="/" exact component={Login} />
        <Route path="/lessons" exact component={LessonList} />

        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
