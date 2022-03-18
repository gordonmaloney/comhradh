import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useHistory } from 'react-router-dom'
import MenuIcon from '@mui/icons-material/Menu';
import Fab from '@mui/material/Fab';

export const SideMenu = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push('/')
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

  const list = (anchor) => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <center><h3>Còmhradh</h3></center>
      <List>
        <ListItem button component={Link} to="../">
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button component={Link} to="/lessons">
          <ListItemText primary="Lessons"   />
        </ListItem>
        <ListItem button component={Link} to="/flashcards">
          <ListItemText primary="Flashcards" />
        </ListItem>
        <ListItem button component={Link} to="/dictionary">
          <ListItemText primary="Dictionary" />
        </ListItem>
        <ListItem button component={Link} to="/pronunciation/toilichte">
          <ListItemText primary="Pronunciation Centre" />
        </ListItem>
        <ListItem button component={Link} to="/cheatsheet">
          <ListItemText primary="Cheat Sheet" />
        </ListItem>
        <ListItem button component={Link} to="/discuss/1">
          <ListItemText primary="Discuss" />
        </ListItem>
        <ListItem button onClick={logout}>
          <ListItemText primary="Log Out"  />
        </ListItem>
      </List>

    </Box>
  );

  return (
    <div>
      <Fab className="sidebarFabLeft"  onClick={toggleDrawer("left", true)} style={{position:"fixed", left: "5%", marginTop: '22px', zIndex:1}}>
        <MenuIcon />
      </Fab>

      <Drawer
        anchor="left"
        open={state["left"]}
        onClose={toggleDrawer("left", false)}
      >
        {list("left")}
      </Drawer>
    </div>
  );
};
