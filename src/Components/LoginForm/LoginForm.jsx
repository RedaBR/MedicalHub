import React from "react";
import "./LoginForm.css";
import { FaUser } from "react-icons/fa";
import { BsEnvelope } from "react-icons/bs";
import { TextField } from "@mui/material";
import { useState } from "react";

const LoginForm = () => {
  const [isSignupClicked, setIsSignupClicked] = useState(false);

  const handleSignupClick = () => {
    setIsSignupClicked(true);
  };
  const renderLoginForm = () => (
    <>
      <h2>MedicalHub</h2>
      <h1>Welcome to MedicalHub</h1>
      <h3>Shaping the future of medical networking</h3>
      <div className="icon-email">
        <BsEnvelope />
        <input
          className="email-text"
          placeholder="Enter email"
          type="email"
          required
        />
      </div>
      <input
        type="button"
        value="Sign up"
        className="submit-btn"
        onClick={handleSignupClick}
      />
      <div className="separator-text">or</div>
      <button className="google-signup">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/512px-Google_%22G%22_Logo.svg.png"
          alt="Google logo"
          width="20"
        />
        Signup with Google
      </button>
      <a className="login-link" href="/login">
        Already have an account? login
      </a>
    </>
  );

  const renderSignupForm = () => (
    <>
      <h2>MedicalHub</h2>
      <h1>Welcome to MedicalHub</h1>
      <h3>Shaping the future of medical networking</h3>
      <div className="fields-container">
        <div className="field-group">
          <label>First Name</label>
          <input type="text" placeholder="Enter first name" />
        </div>
        <div className="field-group">
          <label>Last Name</label>
          <input type="text" placeholder="Enter last name" />
        </div>
        <div className="field-group">
          <label>Phone</label>
          <input type="text" placeholder="123456789" />
        </div>
        <div className="field-group">
          <label>Gender</label>
          <div className="gender-options">
            <button type="button">Male</button>
            <button type="button">Female</button>
          </div>
        </div>
        <div className="field-group">
          <label>Birthday</label>
          <input type="date" />
        </div>
        <div className="field-group">
          <label>Nationality</label>
          <input type="text" placeholder="Enter nationality" />
        </div>
        <div className="field-group">
          <label>Password</label>
          <input type="password" placeholder="Password" />
        </div>
        <div className="field-group">
          <label>Confirm password</label>
          <input type="password" placeholder="Confirm password" />
        </div>
      </div>
      <input type="submit" value="Sign up" className="submit-btn" />
    </>
  );

  return (
    <div className="form-container">
      {isSignupClicked ? renderSignupForm() : renderLoginForm()}
    </div>
  );
};

export default LoginForm;
