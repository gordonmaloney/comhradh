import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Login } from "./Login";
import { fetchUserData, updateUser } from "../actions/auth";
import { useSelector, useDispatch } from "react-redux";
import { WORDS } from "./Lessons/WORDS";

//deprecated - no longer in use

export const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);
  const posts = useSelector((state) => state);
  user?.result?.email && !posts.auth.name && dispatch(fetchUserData(user.result._id))
  

  const userLevels = posts.auth.progress
  
  const words = []

  WORDS.length && userLevels && WORDS.map(lesson => 
    userLevels.map(userLevel => 
      {lesson.lesson == userLevel && lesson.words.map(word => words.push(word))})
  )
  console.log("TEST", words)

  return (
    <div>
      <center>
        {user ? (
          <>
            <p>Welcome {user?.result?.name}</p>

            {!posts.auth ? "Loading..." :
            <>
              Levels completed: {posts.auth.progress.length}<br />
              Words learned: {words?.length}

<br />
            </>
            }
          </>
        ) : (
          <>
            <p>You need to log-in</p>
            <Login />
          </>
        )}
      </center>
    </div>
  );
};
