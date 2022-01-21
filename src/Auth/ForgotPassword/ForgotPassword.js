import React, { useState } from "react";
import "./ForgotPassword.css";
import WaveImg from "../../Assets/Images/wave.png";
import Avatar from "../../Assets/Images/avatar.png";
import Background from "../../Assets/Images/bg.png";

const ForgotPassword = () => {
  const [enteredUserName, setEnteredUserName] = useState("");

  const onForgotChangeHandler = (e) => {
    e.preventDefault();
    setEnteredUserName(e.terget.value);
  }

  const onForgotSubmkitHandler = (e) => {
    e.preventDefault();
    console.log(enteredUserName);
    e.target.reset();
  }

  return (
    <div>
      <img className="wave" src={WaveImg} />
      <div className="forgotContainer">
        <div className="img">
          <img src={Background} alt="background" />
        </div>
        <div className="login-content">
          <form action="index.html" onSubmit={onForgotSubmkitHandler}>
            <img src={Avatar} />
            <h2 className="title">Welcome</h2>
            <div className="input-div one">
              <div className="icons">
                <i className="fas fa-user"></i>
              </div>
              <div className="div">
                <h5>Username</h5>
                <input type="text" className="input" name="enteredUserName" onChange={onForgotChangeHandler} required/>
              </div>
            </div>
            <input type="submit" className="btn" value="Reset Password" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
