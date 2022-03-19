import React from "react";
import { useHistory } from "react-router-dom";

export const Redirect = ({logged}) => {
  const history = useHistory();

  setInterval(() => {
      history.push('../')
  }, 1000);

  return (
    <div>
      <center>
          <h3>Logged {logged} successfully.</h3>
          Redirecting...</center>
    </div>
  );
};
