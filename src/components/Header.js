import React, { useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";

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
  const location = useLocation();

  window.onscroll = function () {
    scrollFunction();
  };

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  function scrollFunction() {
    if (window.scrollY > 70) {
      document.getElementById("navbar").style.padding = "10px 5px";
      document.getElementById("navbar").style.boxShadow = "-5px 2px 12px black";
      document.getElementById("navbarHeader").style.fontSize = "1.5em";
    } else if (window.scrollY == 0) {
      document.getElementById("navbar").style.padding = "20px 10px";
      document.getElementById("navbar").style.boxShadow = "0px 0px 0px black";
      if (window.innerWidth > 600)
        document.getElementById("navbarHeader").style.fontSize = "3em";
    }
  }

  useEffect(() => {
    window.innerWidth < 600
      ? (document.getElementById("navbarHeader").style.fontSize = "1.5em")
      : (document.getElementById("navbarHeader").style.fontSize = "3em");
  }, []);

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
      <span id="navbarHeader" onClick={() => history.push("../")}>
        <span style={{ color: "#434a73" }}>Còmh</span>
        <span style={{ color: "#542673" }}>radh</span>
      </span>

      {user && (
        <>
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
            <ListItem button onClick={handleClose} component={Link} to="../">
              <ListItemText primary="Profile" />
            </ListItem>
            <br />
            <ListItem
              button
              onClick={handleClose}
              component={Link}
              to="/lessons"
            >
              <ListItemText primary="Lessons" />
            </ListItem>
            <br />
            <ListItem
              button
              onClick={handleClose}
              component={Link}
              to="/flashcards"
            >
              <ListItemText primary="Flashcards" />
            </ListItem>
            <br />
            <ListItem
              button
              onClick={handleClose}
              component={Link}
              to="/dictionary"
            >
              <ListItemText primary="Dictionary" />
            </ListItem>
            <br />
            <ListItem
              button
              onClick={handleClose}
              component={Link}
              to="/pronunciation"
            >
              <ListItemText primary="Pronunciation Centre" />
            </ListItem>
            <br />
            <ListItem
              button
              onClick={handleClose}
              component={Link}
              to="/cheatsheet"
            >
              <ListItemText primary="Cheat Sheet" />
            </ListItem>
            <br />
            <ListItem
              button
              onClick={handleClose}
              component={Link}
              to="/discuss"
            >
              <ListItemText primary="Discuss" />
            </ListItem>
            <br />
            <ListItem
              button
              onClick={() => {
                logout();
                handleClose();
              }}
            >
              <ListItemText primary="Log Out" />
            </ListItem>
          </Menu>
        </>
      )}
    </div>
  );
};
