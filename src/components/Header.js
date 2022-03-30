import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";

export const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  const dispatch = useDispatch();
  const history = useHistory();

  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (window.scrollY > 70) {
      document.getElementById("navbar").style.padding = "10px 5px";
      document.getElementById("navbar").style.boxShadow = "-5px 2px 12px black";
      document.getElementById("navbarHeader").style.fontSize = "1.5em";
    } else if (window.scrollY == 0) {
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("navbar").style.boxShadow = "0px 0px 0px black";
      document.getElementById("navbarHeader").style.fontSize = "3em";
    }
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    dispatch({ type: "LOGOUT" });
    history.push("/loggedout");
    setUser(null);
  };

  return (
    <div id="navbar">
      <span id="navbarHeader">
        <span style={{ color: "#434a73" }}>Còmh</span>
        <span style={{ color: "#542673" }}>radh</span>
      </span>

      <span className="navBarMobileMenu">
        <MenuIcon sx={{ fontSize: "2em" }} onClick={handleClick} />
      </span>

      <Menu
        className="mobileMenu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
          style: {
            paddingLeft: "15px",
            paddingRight: "15px",
          },
        }}
      >
        <MenuItem button onClick={handleClose} component={Link} to="../">
          <ListItemText primary="Profile" />
        </MenuItem>
        <br />
        <MenuItem button onClick={handleClose} component={Link} to="/lessons">
          <ListItemText primary="Lessons" />
        </MenuItem>
        <br />
        <MenuItem button onClick={handleClose} component={Link} to="/flashcards">
          <ListItemText primary="Flashcards" />
        </MenuItem>
        <br />
        <MenuItem button onClick={handleClose} component={Link} to="/dictionary">
          <ListItemText primary="Dictionary" />
        </MenuItem>
        <br />
        <MenuItem button onClick={handleClose} component={Link} to="/pronunciation/toilichte">
          <ListItemText primary="Pronunciation Centre" />
        </MenuItem>
        <br />
        <MenuItem button onClick={handleClose} component={Link} to="/cheatsheet">
          <ListItemText primary="Cheat Sheet" />
        </MenuItem>
        <br />
        <MenuItem button onClick={handleClose} component={Link} to="/discuss/1">
          <ListItemText primary="Discuss" />
        </MenuItem>
        <br />
        <MenuItem button onClick={() => {logout(); handleClose()}}>
          <ListItemText primary="Log Out" />
        </MenuItem>
      </Menu>
    </div>
  );
};
