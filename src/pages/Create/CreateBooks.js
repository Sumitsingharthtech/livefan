import React from "react";
import "./CreateBooks.css";
// import { Link } from "react-router-dom";
import StarsRating from 'stars-rating'


const CreateBooks = () => {
  const ratingChanged = (newRating) => {
    console.log(newRating)
  }
  return (
    <>
      <div className="create-page">
        <div className="container">
          <h1 className="novel-info"> NOVEL INFORMATION </h1>
          <hr className="novel-line" />
          <div className="form-div">
            <form className="form-part">
              <div className="label-input-div">
                <label className="all-label"> Book title </label> <br />
                <input
                  className="create-book-inp"
                  type="text"
                  placeholder="Chapter titles sholud be within 50 characters."
                  maxLength= "50"
                  required
                />
              </div>

              <div className="label-input-div">
                <label className="all-label"> Novel Category </label> <br />
                <select className="select-type">
                  <option className="opt-novel-type" placeholder="Original" required >
                    Category
                  </option>
                  <option className="opt-novel-type"> Romance </option>
                  <option className="opt-novel-type"> CEO </option>
                  <option className="opt-novel-type"> Marriage </option>
                  <option className="opt-novel-type"> Paranormal </option>
                  <option className="opt-novel-type"> Fantasy </option>
                  <option className="opt-novel-type"> Werewolf </option>
                </select>
              </div>

              <div className="label-input-div">
                <label className="all-label"> Language </label> <br />
                <select className="language-selection"  required >
                  <option className="lang-point"> English </option>
                  <option className="lang-point"> Hindi </option>
                </select>
              </div>

              <div className="label-input-div">
                <label className="all-label"> Content Rating </label> <br />
                <StarsRating
  count={5}
  onChange={ratingChanged}
  size={24}
  color2={'#ffd700'} />
              </div>

              <div className="label-input-div">
                <label className="all-label"> Synopsis </label>
                <p className="synopsis-para">
                  Please Write a description for your story with 20 to 300 words{" "}
                </p>
                <textarea
                  className="text-area-1"
                  cols="30"
                  rows="5"
                  maxlength="600"
                  placeholder="Description......."
                ></textarea>
              </div>

              <div className="btn-div">
                {/* <Link to= "/chapter"> */}
                <button className="create-button"> Create </button>
                {/* </Link> */}
                

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBooks;
