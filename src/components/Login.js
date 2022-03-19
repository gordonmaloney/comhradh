import React, { useState, useEffect } from "react";
import { Button, Box } from "@material-ui/core";
import { GoogleLogin } from "react-google-login";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signup } from "../actions/auth";

export const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [isSignup, setIsSignup] = useState(false);
  const [open, setOpen] = useState(false);

  const handleSubmit = () => {};

  const handleChange = () => {};

  useEffect(() => {
    console.log(isSignup);
  }, [isSignup]);

  const handleLogin = () => {
    setIsSignup(false);
    setOpen(true);
  };

  const handleSignUp = () => {
    setIsSignup(true);
    setOpen(true);
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  const handleClose = () => setOpen(false);

  const googleSuccess = async (res) => {
    console.log("success")
    const result = res?.profileObj;
    const token = res?.tokenId;
    try {
      //dispatch({ type: "AUTH", data: { result, token } });
      dispatch(signup(res?.profileObj, history));
    } catch (error) {
      console.log(error);
    }
  };

  const googleFailure = (error) => {
    console.log(error);
    console.log("Google sign in was unsuccessful. Try again later");
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={() => handleLogin()}>
        Log in
      </Button>

      <Button
        color="primary"
        variant="contained"
        onClick={() => handleSignUp()}
      >
        Sign up
      </Button>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {isSignup ? "Sign up" : "Log in"}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {isSignup ? "Sign up" : "Log in"}

            <GoogleLogin
              clientId="419018923298-5pgdk5ubds4e8ia10cdiq0k64fh3rg3m.apps.googleusercontent.com"
              render={(renderProps) => (
                <Button
                  className={style.googleButton}
                  color="primary"
                  fullWidth
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                  variant="contained"
                >
                  Google Sign In
                </Button>
              )}
              onSuccess={googleSuccess}
              onFailure={googleFailure}
              cookiePolicy="single_host_origin"
            />
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};
