import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ForgetPassword from "../forgetPassword";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Alert, Button, IconButton, Snackbar, CloseIcon } from "@mui/material";
import Stack from "@mui/material/Stack";

const SignIn = () => {
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [open, setOpen] = React.useState(true);
  // const handleClick = () => {
  //   setOpen(true);
  // };
  // const action = (
  //   <React.Fragment>
  //     <Button color="secondary" size="small" onClick={handleClose}>
  //       UNDO
  //     </Button>
  //     <IconButton
  //       size="small"
  //       aria-label="close"
  //       color="inherit"
  //       onClick={handleClose}
  //     >
  //       <CloseIcon fontSize="small" />
  //     </IconButton>
  //   </React.Fragment>
  // );
  // const handleClose = (event, reason) => {
  //   if (reason === "clickaway") {
  //     return;
  //   }

  //   setOpen(false);
  // };

  const changeUsername = (e) => {
    setUsername(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const navigate = useNavigate();

  const func = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/login", {
        email: username,
        password,
      })
      .then((response) => {
        // setOpen(true);
        toast.success("Login SucessFul");

        //alert(response.data);
        navigate("/HomePage");
      })
      .catch((err) => {
        toast.error("Login Failed");
        console.log(err);
      });
  };

  return (
    <>
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          This is a success message!
        </Alert>
      </Snackbar> */}
      <form onSubmit={func} className="sign-in-form">
        <h2 className="title">Sign in</h2>
        <div className="input-field">
          <i className="fas fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={changeUsername}
            required
          />
        </div>
        <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
            required
          />
        </div>
        {/* <div className="input-field">
          <i className="fas fa-lock"></i>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={changePassword}
            required
          />
        </div> */}

        <input type="submit" value="Login" className="btn solid" />
        <p
          style={{
            cursor: "pointer",
            fontSize: "12px",
          }}
          onClick={ForgetPassword}
        >
          <u>Forgot Password</u>
        </p>
        <p className="social-text">Or Sign in with social platforms</p>
        <div className="social-media">
          <button className="social-icon">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-twitter"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-google"></i>
          </button>
          <button className="social-icon">
            <i className="fab fa-linkedin-in"></i>
          </button>
        </div>
      </form>
      <ToastContainer />
      {/* <ForgetPassword /> */}
    </>
  );
};

export default SignIn;
