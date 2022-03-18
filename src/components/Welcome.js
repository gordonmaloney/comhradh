import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Login } from "./Login";
import { fetchUserData } from "../actions/auth";
import { useSelector, useDispatch } from "react-redux";


export const Welcome = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));


  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  
 
  const posts = useSelector((state) => state);

  console.log(posts.auth.name)
  


  console.log("test")

  user?.result?.email && !posts.auth.name && dispatch(fetchUserData(user.result.email))
  

  return (
    <div>
      <center>
        {user ? (
          <>
            <p>Welcome {user?.result?.name}</p>

            {!posts.auth ? "Loading..." :
            <>
              Level: {posts.auth.progress}<br />
              Words learned: {posts.auth.words.length}
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
