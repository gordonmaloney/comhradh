import React from "react";
import { useState } from "react";
import { Login } from "./Login";
import { useSelector } from "react-redux";
import { LandingPage } from "./LandingPage";

export const Welcome = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));
  const posts = useSelector((state) => state);

  if (posts?.auth.progress) {
    return (
      <div>
        <center>
          {user ? (
            <>
              <p>Welcome {user?.result?.name}</p>

              {!posts.auth ? (
                "Loading..."
              ) : (
                <>
                  Levels completed: {posts.auth.progress.length - 1}
                  <br />
                  Words learned: {posts?.auth?.words?.length}
                  <br />
                </>
              )}
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
  } else {
    return (
      <>
        <center>
          <LandingPage />
          <Login />
        </center>
      </>
    );
  }
};
