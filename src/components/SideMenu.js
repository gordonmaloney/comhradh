import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Fab from "@mui/material/Fab";
import { useLocation } from "react-router-dom";

export const SideMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
const location = useLocation()
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")))
  }, [location])

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/loggedout");
    setUser(null);
  };

  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  if (user) {
  return (
    <div style={{position: "fixed"}}>
      <Box className="sideMenu">
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
          <ListItem button component={Link} to="/pronunciation">
            <ListItemText primary="Pronunciation Centre" />
          </ListItem>
          <ListItem button component={Link} to="/cheatsheet">
            <ListItemText primary="Cheat Sheet" />
          </ListItem>
          <ListItem button component={Link} to="/discuss">
            <ListItemText primary="Discuss" />
          </ListItem>

          <ListItem button onClick={logout}>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Box>
    </div>
  )
  } else {
    return <></>
  }

};
