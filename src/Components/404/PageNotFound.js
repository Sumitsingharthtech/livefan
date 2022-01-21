import React from "react";
import "./PageNotFound.css";
import ErrorImage from "../../Assets/Images/qIufhof.png";

const PageNotFound = () => {
  return (
    <>
      <div className="errorPage">
        <img className="errorImage" src={ErrorImage} alt="error image" />
      </div>
    </>
  );
};

export default PageNotFound;
