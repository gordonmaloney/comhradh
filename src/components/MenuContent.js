import React, {useState} from 'react'
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

export const MenuContent = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const logout = () => {
        dispatch({ type: "LOGOUT" });
        history.push("/loggedout");
        setUser(null);
      };

      const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  return (
    <List>
          <ListItem button component={Link} to="../">
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button component={Link} to="/lessons">
            <ListItemText primary="Lessons" />
          </ListItem>
          <ListItem button component={Link} to="/flashcards">
            <ListItemText primary="Flashcards" />
          </ListItem>
          <ListItem button component={Link} to="/dictionary">
            <ListItemText primary="Dictionary" />
          </ListItem>
          <ListItem disabled button component={Link} to="/pronunciation">
            <ListItemText primary="Pronunciation Centre" />
          </ListItem>
          <ListItem button component={Link} to="/cheatsheet">
            <ListItemText primary="Cheat Sheet" />
          </ListItem>
          <ListItem disabled button component={Link} to="/discuss">
            <ListItemText primary="Discuss" />
          </ListItem>

          <ListItem button onClick={logout}>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
  )
}
