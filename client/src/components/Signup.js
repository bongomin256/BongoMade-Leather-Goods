import React from "react";
import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { Signupage, SignupStyles } from "./Styles/Signup.styled";

export default function Signup() {
  return (
    <Signupage>
      <SignupStyles>
        <input
          type="name"
          name="first-name"
          id="first-name"
          placeholder="First Name"
        />
        <input
          type="last-name"
          name="last-name"
          id="last-name"
          placeholder="Last Name"
        />
        <input type="password" name="password" id="password" />
        <input type="submit" value="sign up" id="signup" />
        <p>
          Already have an account <Link to="/login">Login</Link>
        </p>
        <Link to="/" id="btn">
          <BiArrowBack />
          Return to Home
        </Link>
      </SignupStyles>
    </Signupage>
  );
}
