import React from "react";
import auth from "../firebase";

const SignupScreen = ({ email, password, setEmail, setPassword }) => {
  const resiter = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((authuser) => {
        console.log(authuser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <div className="signupScreen">
      <h1>Sign Up</h1>
      <form action="">
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
        <button onClick={resiter} type="submit">
          Sign Up Now
        </button>
      </form>
    </div>
  );
};

export default SignupScreen;
