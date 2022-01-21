import React from "react";
import { Link } from "react-router-dom";
import "./BrowseNavbar.css";

const BrowseNavbar = () => {
  return (
    <div className="browse_main_nav">
      <div className="container">
        <h1> BOOK RANKINGS </h1>
        <ul>
          <Link to="/werewolf"><li><h6> Werewolf </h6></li></Link>
          <Link to="/romance"><li><h6> Romance </h6></li></Link>
          <Link to="/ceo"><li><h6> CEO </h6></li></Link>
          <Link to="/marriage"><li><h6> Marriage </h6></li></Link>
          <Link to="/paranormal"><li><h6> Paranormal </h6></li></Link>
          <Link to="/fentasy"><li><h6> Fantasy </h6></li></Link>
        </ul>
      </div>
    </div>
  );
};

export default BrowseNavbar;
