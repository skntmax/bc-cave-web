import React from "react";
import { Button } from "@mui/material";
import "././../assets/css/Signup.css";

const Signup = () => {
  return (
    <div className="signup">
      <div className="frame-parent">
        <div className="brand-container">
          <img className="brand-icon2" alt="" src="/brand2.svg" />
          <h3 className="bachelorscave2">
            <span>Bachelors</span>
            <span className="cave2">Cave</span>
          </h3>
        </div>
        <p className="a-house-is-container">
          <span className="a-house-is">{`A House is made of bricks `}</span>
          <span className="a-house-is">{`and beams.A Home is made `}</span>
          <span className="a-house-is">{`of hope and dreams. `}</span>
          <span className="a-house-is">We’ll help you find your home.</span>
        </p>
      </div>
      <img
        className="undraw-city-girl-ccpd-1-icon"
        alt=""
        src="/undraw-city-girl-ccpd-1.svg"
      />
      <h1 className="create-account">Create Account</h1>
      <div className="login-parent">
        <div className="login">Login</div>
        <img className="devicongoogle" alt="" src="/devicongoogle.svg" />
        <div className="login-with-google">Login with Google</div>
      </div>
      <div className="or">or</div>
      <Button
        className="signup-child"
        sx={{ width: 377 }}
        color="primary"
        variant="contained"
      >
        owner signup
      </Button>
      <div className="signup-item" />
      <div className="signup-inner" />
      <div className="full-name-parent">
        <div className="full-name">Full Name</div>
        <img className="frame-child9" alt="" src="/line-6.svg" />
      </div>
      <div className="evaemail-fill-parent">
        <img className="evaemail-fill-icon" alt="" src="/evaemailfill.svg" />
        <div className="full-name">Your Email</div>
        <img className="frame-child9" alt="" src="/line-6.svg" />
      </div>
      <div className="phone-number-parent">
        <div className="full-name">Phone Number</div>
        <img className="biphone-fill-icon" alt="" src="/biphonefill.svg" />
        <img className="frame-child9" alt="" src="/line-6.svg" />
      </div>
      <img
        className="icon-park-solidedit-name"
        alt=""
        src="/iconparksolideditname.svg"
      />
      <div className="your-passowrd-parent">
        <div className="full-name">Your Passowrd</div>
        <img className="frame-child9" alt="" src="/line-6.svg" />
        <img
          className="fa6-solideye-slash-icon"
          alt=""
          src="/fa6solideyeslash.svg"
        />
        <img
          className="mingcutelock-fill-icon"
          alt=""
          src="/mingcutelockfill.svg"
        />
      </div>
      <div className="create-account-wrapper">
        <div className="create-account1">Create Account</div>
      </div>
      <div className="already-have-an-container">
        <span>{`Already have an account? `}</span>
        <span className="login-now">Login now</span>
      </div>
      <div className="by-signing-up-container">
        <span>{`By signing up I agree to `}</span>
        <span className="login-now">{`Terms & Conditions!`}</span>
      </div>
      <div className="signup-child1" />
    </div>
  );
};

export default Signup;
