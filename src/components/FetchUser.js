import React from "react";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { fetchUserData } from "../actions/auth";
import { useSelector, useDispatch } from "react-redux";

export const FetchUser = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("profile")));

  useEffect(() => {
    const token = user?.token;
    setUser(JSON.parse(localStorage.getItem("profile")));
  }, [location]);

  const posts = useSelector((state) => state);
  
  user?.result?.email &&
    !posts.auth.name &&
    dispatch(fetchUserData(user.result._id));

    console.log(posts.auth)
    return (
      <>
      </>
    );
};
