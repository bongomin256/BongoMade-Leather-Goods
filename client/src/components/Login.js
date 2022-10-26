import React from "react";
import { Link } from "react-router-dom";
// import { Container } from "./Styles/Container.styled";
import { BiArrowBack } from "react-icons/bi";
import { LoginPage, LoginStyles } from "./Styles/Login.styled";

export default function Login() {
  return (
    <LoginPage className="login-form-sec">
      <LoginStyles>
        <input type="email" name="email" id="email" placeholder="Email" />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
        />
        <input type="submit" value="Login" id="login" />
        <p>
          New here <Link to="/signup">Create account</Link>
        </p>

        <Link to="/" id="btn">
          <BiArrowBack />
          Return to Home
        </Link>
      </LoginStyles>
    </LoginPage>
  );
}
