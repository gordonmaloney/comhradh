import { Login } from "./components/Login";
import { useState, useEffect } from "react";
import { SideMenu } from "./components/SideMenu";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { LessonList } from "./components/LessonList";
import { Welcome } from "./components/Welcome";
import { Lesson } from "./components/Lesson";
import { Dictionary } from "./components/Dictionary";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
      const token = user?.token;
  
      setUser(JSON.parse(localStorage.getItem("profile")));
    }, [user])

  return (
    <BrowserRouter>
      <Container maxwidth="lg">
        <SideMenu />

          <Switch>
            <Route path="/" exact component={Welcome} />
            <Route path="/lessons" exact component={LessonList} />
            <Route path="/lessons/:lesson" exact component={Lesson} />
            <Route path="/dictionary" exact component={Dictionary} />

          </Switch>

      </Container>
    </BrowserRouter>
  );
}

export default App;
