import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Login } from "./Login";
import { fetchUserData, updateUser } from "../actions/auth";
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

  user?.result?.email && !posts.auth.name && dispatch(fetchUserData(user.result._id))
  
  const handleUpdate = () => {
    let updatedUser = posts.auth
    updatedUser.progress++

    console.log(updatedUser)
    dispatch(updateUser(user?.result?._id, updatedUser))
  }

  return (
    <div>
      <center>
        {user ? (
          <>
            <p>Welcome {user?.result?.name}</p>

            {!posts.auth ? "Loading..." :
            <>
              Level: {posts.auth.progress}<br />
              Words learned: {posts?.auth?.words?.length}

              <button onClick={() => handleUpdate()}>update user</button>
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
