import React from "react";
import "./CreateBooks.css";
import { Link } from "react-router-dom";
import Rating from "react-rating";


const CreateBooks = () => {
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
                  placeholder="Chapter titles sholud be within 60 characters."
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

                <div className="rating-star">
<Rating
emptySymbol="fa fa-star-o fa-2x"
fullSymbol="fa fa-star fa-2x"
fractions={2}
/>
                </div>
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
                  minLength={20}
                  maxLength={300}
                  placeholder="Description......."
                ></textarea>
              </div>

              <div className="btn-div">
                <Link to= "/chapter">
                <button className="create-button"> Create </button>
                </Link>
                

              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateBooks;
