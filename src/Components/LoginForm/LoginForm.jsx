import React from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { Box, Divider, TextField, Typography } from "@mui/material";
import { useState } from "react";
import googleLogo from "../Assets/google-icon.png";

const LoginForm = () => {
  const [step, setStep] = useState("signUp");
  const boxStyle = { display: "flex" };
  const handleSignupClick = () => {
    setStep("createAccount");
  };
  const handleLoginClick = () => {
    setStep("login");
  };
  const renderSignupForm = () => (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          width: "100%",
          marginLeft: "30px",
          alignItems: "center",
        }}
      >
        <BsEnvelope color="#ffffffb8" />
        <Typography
          sx={{
            color: "#ffffffb8",
          }}
        >
          |
        </Typography>
        <input
          className="email-text"
          placeholder="Enter email"
          type="email"
          required
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="button"
          value="Sign up"
          className="submit-btn"
          onClick={handleSignupClick}
        />
        <Divider
          component="div"
          sx={{
            width: "100%",
            "&::before,&::after": { borderColor: "#ffffffb8" },
          }}
        >
          or
        </Divider>
        <button className="google-signup">
          <img src={googleLogo} alt="Google logo" width="20" />
          Signup with Google
        </button>
      </Box>
      <Typography onClick={handleLoginClick}>
        Already have an account? login
      </Typography>
    </>
  );

  const renderLoginForm = () => (
    <>
      <Box
        sx={{
          display: "flex",
          gap: "8px",
          width: "100%",
          marginLeft: "30px",
          alignItems: "center",
        }}
      >
        <BsEnvelope color="#ffffffb8" />
        <Typography
          sx={{
            color: "#ffffffb8",
          }}
        >
          |
        </Typography>
        <input
          className="email-text"
          placeholder="Enter email"
          type="email"
          required
        />
        <input
          className="email-text"
          placeholder="Enter password"
          type="email"
          required
        />
      </Box>
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          gap: "10px",
        }}
      >
        <input
          type="button"
          value="Sign up"
          className="submit-btn"
          onClick={handleSignupClick}
        />
        <Divider
          component="div"
          sx={{
            width: "100%",
            "&::before,&::after": { borderColor: "#ffffffb8" },
          }}
        >
          or
        </Divider>
        <button className="google-signup">
          <img src={googleLogo} alt="Google logo" width="20" />
          Signup with Google
        </button>
      </Box>
      <Typography onClick={handleLoginClick}>
        Already have an account? login
      </Typography>
    </>
  );
  const renderCreateAccountForm = () => (
    <>
      <Box
        className="BoxStyle"
        src={{ display: "flex", flexDirection: "row", alignItems: "center" }}
      >
        <Box className="BoxStyleFpb">
          <div className="field-group">
            <label>First Name</label>
            |
            <input type="text" placeholder="Enter first name" />
          </div>
          <div className="field-group">
            <label>Phone</label>
            |
            <input type="text" placeholder="123456789" />
          </div>
          <div className="field-group">
            <label>Birthday</label>
            |
            <input type="date" />
          </div>
        </Box>
        <Box className="BoxStyleLgn">
          <div className="field-group">
            <label>Last Name</label>
            |
            <input type="text" placeholder="Enter last name" />
          </div>

          <div className="field-group">
            <label>Gender</label>|
            <div className="gender-options">
              <Box className="boxButtonGender">
                <button type="button">Male</button>
                <button type="button">Female</button>
              </Box>
            </div>
          </div>

          <div className="field-group">
            <label>Nationality</label>
            |
            <input type="text" placeholder="Enter nationality" />
          </div>
        </Box>
      </Box>
      <Box className="password">
        <div className="field-group">
          <label>Password</label>
          |
          <input type="password" placeholder="Password" />
        </div>
        <div className="field-group">
          <label>Confirm password</label>
          |
          <input type="password" placeholder="Confirm password" />
        </div>
      </Box>
      <input type="submit" value="Sign up" className="submit-btn" />
    </>
  );

  return (
    <div className="form-container">
      <Typography
        sx={{ fontFamily: "Inter", fontWeight: 700, fontSize: "15px" }}
      >
        MedicalHub
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 300,
          fontSize: "50px",
          lineHeight: "1.2",
        }}
      >
        <p>Welcome to</p> MedicalHub
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter",
          fontWeight: 400,
          fontSize: "15px",
          color: "#ffffffb8",
        }}
      >
        Shapping the future medical network
      </Typography>
      {step == "signUp" && renderSignupForm()}
      {step == "createAccount" && renderCreateAccountForm()}
      {step == "login" && renderLoginForm()}
    </div>
  );
};

export default LoginForm;
