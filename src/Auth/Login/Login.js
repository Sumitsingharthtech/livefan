import React, { useState } from "react";
import logo from "../../Assets/Images/login.png";
import "./Login.css";
import { Link } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import axios from "axios";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import {BsFacebook} from 'react-icons/bs';
import {FcGoogle}from 'react-icons/fc';
import Register from "../Register/Register";

const Login = () => {
  const [showLogin, setShowLogin] = useState(true);
  const [showSingup, setShowSingup] = useState(false);

  const LoginCloseHandler = () => {
    setShowLogin(false);
  };
  const SignupShowHandler = () => {
    setShowSingup(!showSingup);
  };

  

  const componentClicked = (data) => {
    console.log(data);
    // window.location.reload(true);
    setTimeout(() => {
      window.location.reload(true);
    }, 6000);
  };

  const responseFacebook = (response) => {
    console.log("login result", response);
  };

  let googleEmail = localStorage.getItem("googleEmail");
  let googleId = localStorage.getItem("googleId");

  const loginType = {
    logintype: "google",
  };

  const onLoginSuccess = async (res) => {
    console.log("Login Success:", res.profileObj);
    localStorage.setItem("googleEmail", res.profileObj.email);
    localStorage.setItem("googleId", res.profileObj.googleId);
    let result = await axios.post(
      "http://103.171.181.46:2081/api/users",
      {
        email: googleEmail,
        uid: googleId,
      },
      {
        logintype: loginType,
      }
    );
    console.log(result);
  };

  const onLoginFailure = (res) => {
    console.log("Login Failed:", res);
  };

  const [enterLogin, SetEnterLogin] = useState({
    enteredLoginUser: " ",
    enteredLoginPassword: "",
  });
  const { enteredLoginUser, enteredLoginPassword } = enterLogin;

  const onEnteredLoginChange = (e) => {
    e.preventDefault();
    SetEnterLogin({ ...enterLogin, [e.target.name]: e.target.value });
  };

  let loginToken = localStorage.getItem("loginToken");

  const onSubmitForm = async (e) => {
    let result =
      loginToken &&
      (await axios.post("http://103.171.181.46:2081/api/users/login", {
        email: enteredLoginUser,
        password: enteredLoginPassword,
      }));
    console.log(result.data.data.token);
    localStorage.setItem("loginToken", result.data.data.token);
    LoginCloseHandler();
  };

  return (
    <>
    <div className="login-background">
      {showLogin && (
        <div className="login-page">
          <div>
            <div className="cancel" onClick={LoginCloseHandler}>
              <MdOutlineCancel />
            </div>
          </div>
          <div className="logo-login">
            <img src={logo} alt="logo" />
          </div>
          <h4>Welcome to fanfiction</h4>
          <h6>Access tons of Novels and comics by single tap</h6>
          <form onSubmit={onSubmitForm}>
            <div className="login-email">
              <label for="fname">E-mail</label>
              <input
                type="email"
                id="fname"
                onChange={onEnteredLoginChange}
                name="enteredLoginUser"
                required
              />
            </div>
            <div className="login-password">
              <label for="fname">Password</label>
              <input
                type="password"
                id="fname"
                onChange={onEnteredLoginChange}
                name="enteredLoginPassword"
                required
              />
            </div>
            <button className="login-button" type="submit">
              {" "}
              <p> Login Here </p>
            </button>
          </form>
          <button className="google">
            <GoogleLogin
              clientId="663470410274-3q4bvigpv3g43rgmds7r05lke94af94b.apps.googleusercontent.com"
              // buttonText="Login with Google "
              onSuccess={onLoginSuccess}
              onFailure={onLoginFailure}
              cookiePolicy={"single_host_origin"}
              isSignedIn={true}
              render={renderProps => (
                <button className="googleButton" onClick={(e) => { e.preventDefault(); renderProps.onClick(); }}>
                  <FcGoogle/>Login with Google
                </button>
              )}
            />
          </button>
          <button className="facebook">
            <FacebookLogin
              appId="511397210207804"
              autoLoad={true}
              fields="name,email,picture"
              onClick={componentClicked}
              callback={responseFacebook}
              render={renderProps => (
                <button className="feacbookButton" onClick={(e) => { e.preventDefault(); renderProps.onClick(); }}>
                 <BsFacebook/> Login with Facebook
                </button>
              )}
            />
          </button>
          <p className="create-a"  onClick={() => SignupShowHandler()} >
             CREATE ACCOUNT
          </p>
          <p className="copyright">
            ©2022 Fanfiction | Terms of service | Privacy Policy
          </p>
        </div>
      )}
      </div>
      {
        showSingup && <Register/>
      }
    </>
  );
};

export default Login;
