import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../Assets/Images/logo.png";
import Login from "./../../Auth/Login/Login";

function Navbar() {
  const [showLogin, setShowLogin] = useState(false);

  const LoginShowHandler = () => {
    setShowLogin(!showLogin);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="navbar-brand">
            <img src={logo} alt="logo" />
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/browse">
                  Browse
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/create">
                  Create
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                >
                  Writer Benefit
                </Link>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <Link className="dropdown-item" to="/writer-benefit">
                    Writer Rewards
                  </Link>
                  <Link className="dropdown-item" to="/author-brand">
                    Author Brand
                  </Link>
                  <Link className="dropdown-item" to="/author-project">
                    Author Project
                  </Link>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contest">
                  Contest
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/library">
                  Library
                </Link>
              </li>
              <li className="nav-item">
                <div className="nav-link-a" onClick={() => LoginShowHandler()}>
                  LOGIN
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {showLogin && <Login />}
    </>
  );
}

export default Navbar;