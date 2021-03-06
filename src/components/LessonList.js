import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import Tooltip from "@mui/material/Tooltip";

import { fetchUserData, updateUser } from "../actions/auth";
import { useSelector, useDispatch } from "react-redux";

import { lessons } from "./Lessons/LessonFrame";

export const LessonList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const posts = useSelector((state) => state);

  console.log(posts.auth.name);

  user?.result?.email &&
    !posts.auth.name &&
    dispatch(fetchUserData(user.result._id));

  const handleChange = (e, level) => {
    console.log(e.target.checked);
    let updatedUser = posts.auth;

    if (e.target.checked) {
      console.log("checking...");
      !updatedUser.progress.includes(level) && updatedUser.progress.push(level);
    } else {
      console.log("unchecking...");
      updatedUser.progress = updatedUser.progress.filter(
        (levels) => levels !== level
      );
    }
    dispatch(updateUser(user?.result?._id, updatedUser));
  };

  const handleComplete = (level) => {
    let updatedUser = posts.auth;
    !updatedUser.progress.includes(level) && updatedUser.progress.push(level);

    console.log(updatedUser);
    dispatch(updateUser(user?.result?._id, updatedUser));
  };

  const handleIncomplete = (level) => {
    let updatedUser = posts.auth;

    if (updatedUser.progress.includes(level)) {
      updatedUser.progress = updatedUser.progress.filter(
        (levels) => levels !== level
      );
    }

    console.log(updatedUser);
    dispatch(updateUser(user?.result?._id, updatedUser));
  };

  if (posts?.auth?.progress) {
    return (
      <div className="innerContainer">
        <center>
          <h3 style={{}}>Pick a lesson to get started</h3>
        </center>
        <div className="lessonList">
          {lessons.map((lesson, index) => {
            return (
              <>
                <Tooltip
                  placement="right"
                  arrow
                  open={index == 0 && posts.auth.progress.length == 0 && true}
                  title="Start here"
                >
                  <Link to={`/lessons/${index}/1`}>
                    <Button
                      fullWidth
                      variant="contained"
                      color="primary"
                      size="large"
                      margin="normal"
                    >
                      {index == 0 ? "Intro" : <>Lesson {index}</>}
                    </Button>
                  </Link>
                </Tooltip>

                <Checkbox
                  size="large"
                  checked={posts.auth.progress.includes(index)}
                  onChange={(e) => handleChange(e, index)}
                />
                <br />
                <br />
              </>
            );
          })}
        </div>
      </div>
    );
  } else {
    return <>Loading...</>;
  }
};
