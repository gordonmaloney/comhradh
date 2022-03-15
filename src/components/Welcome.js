import React from "react";
import { useState, useEffect } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import { Login } from "./Login";

export const Welcome = () => {
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location, user]);

  return (
    <div>
      <center>
        {user ? (
          <p>Welcome {user.result.givenName}</p>
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
