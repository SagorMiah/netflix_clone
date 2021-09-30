import React, { useState } from "react";
import "../css/loginScreen.css";
import SiginpScreen from "./SigninScreen";

const LoginScreen = () => {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <img className="loginScreen__logo" src="/images/logo.png" alt="logo" />

        <button
          onClick={() => setSignIn(true)}
          className="loginScreen__loginButton"
        >
          Sign In
        </button>

        <div className="loginScreen__gradient" />
      </div>

      <div className="loginScreen_body">
        {signIn ? (
          <SiginpScreen />
        ) : (
          <>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Cancel anytime.</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            <div className="loginScreen_input">
              <form action="">
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen_getstarted"
                >
                  Get Started
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginScreen;
