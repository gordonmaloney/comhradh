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
import { WORDS } from "./Lessons/WORDS";
import Fab from '@mui/material/Fab';
import MenuBookIcon from '@mui/icons-material/MenuBook';

export const VocabSidebar = (props) => {

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>

        <h4>Lesson {props.lesson} vocab</h4>
        {WORDS.filter(WORD => WORD.lesson == props.lesson)[0].words.map(word => <p>{word.gd} - {word.en}</p>)}

        <Button onClick={toggleDrawer(anchor, false)}>Close</Button>

      </List>
    </Box>
  );

  return (
    <div>
    
      <Fab onClick={toggleDrawer("right", true)} style={{float: "right"}}>
        <MenuBookIcon />
      </Fab>

      <Drawer
        anchor="right"
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        {list("right")}
      </Drawer>
    </div>
  );
};
