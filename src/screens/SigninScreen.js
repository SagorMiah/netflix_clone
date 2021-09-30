import React, { useRef, useState } from "react";
import "../css/signupScreen.css";
import { auth } from "../firebase";
import SignUpScreen from "./SignUpScreen";

const SiginpScreen = () => {
  const [signUp, setSignUp] = useState(false);
  // const emailRef = useRef(null);
  // const passwordlRef = useRef(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <>
      {signUp ? (
        <SignUpScreen
          email={email}
          password={password}
          setEmail={setEmail}
          setPassword={setPassword}
        />
      ) : (
        <div className="signupScreen">
          <h1>Sign In</h1>
          <div className="signupScreen_form">
            <form action="">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <button onClick={signIn} type="submit">
                Sign In
              </button>
            </form>
          </div>
          <form>
            <h4 className="signupScreen_signup">
              <span className="signupScreen_gray">New to Netflix? </span>
              <button
                type="submit"
                className="signupScreen_link"
                onClick={() => setSignUp(true)}
              >
                Sign up now.
              </button>
            </h4>
          </form>
        </div>
      )}
    </>
  );
};

export default SiginpScreen;
