import React, { useState, useEffect } from "react";
import { ImArrowRight2 } from "react-icons/im";

import AwesomeSlider from 'react-awesome-slider';

import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import Book1 from "./../../Assets/Images/book1.jpg";
import Book2 from "./../../Assets/Images/book2.jpg";
import Book3 from "./../../Assets/Images/book3.jpg";
import Book4 from "./../../Assets/Images/book4.jpg";
import Book5 from "./../../Assets/Images/banner.png";
import ShowMore from 'react-show-more';
  //  {/* background-image: url(../../Assets/Images/banner.png); */}

import "./Home.css";
import axios from "axios";
// import { Audio } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { Link } from "react-router-dom";


const Home = () => {
  const [getAllBooks, setGetAllBooks] = useState([]);
  // const [loading,SetLoading]= useState(false);
  useEffect(() => {
    GetAllBooksHandler();
  }, []);


  const GetAllBooksHandler = async () => {
    let result = await axios.get("http://103.171.181.46:2081/api/books");
    console.log("data", result.data.data);
    setGetAllBooks(result.data.data);
    // SetLoading(true);
  };
  const bgImg = {
    position: "absolute",
    zIndex: -1,
    left: 0,
    top: 0,
    width: "100%"
  };

  return (
    <>
    {/* const slider = ( */}
  <AwesomeSlider style={{height: "400px"}} interval={3000} >
  <div style={{ zIndex: 2 }}>
        <div>
          <img
            style={bgImg}
            alt="Wow"
            src={Book1}
            />
             <h1>Fanfiction
</h1>
          <h1>Accademy</h1>
          <button className="banner-button" >GET INSPIRED</button>
        </div>
        
      </div>
      <div style={{ zIndex: 2 }}>
        <div>
          <img
            style={bgImg}
            alt="Wow"
            src={Book2}
            />
           <h1>Fanfiction
</h1>
          <h1>Accademy</h1>
          <button className="banner-button" >GET INSPIRED</button>
        </div>
        
      </div>
      <div style={{ zIndex: 2 }}>
        <div>
          <img
            style={bgImg}
            alt="Wow"
            src={Book3}
            />
            <h1>Fanfiction
</h1>
          <h1>Accademy</h1>
          <button className="banner-button" >GET INSPIRED</button>
        </div>
        
      </div>
      <div style={{ zIndex: 2 }}>
        <div>
          <img
            style={bgImg}
            alt="Wow"
            src={Book4}
            />
          <h1>Fanfiction
</h1>
          <h1>Accademy</h1>
          <button className="banner-button" >GET INSPIRED</button>
        </div>
        
      </div>
      <div style={{ zIndex: 2 }}>
        <div>
          <img
            style={bgImg}
            alt="Wow"
            src={Book5}
            />
             <h1>Fanfiction
</h1>
          <h1>Accademy</h1>
          <button className="banner-button" >GET INSPIRED</button>
         
        </div>
        
      </div>

 
      
  </AwesomeSlider>



      {/* ******************************************************Banner************************************************************ */}
      {/* <div className="banner">
        <div className="container">
          <h1>Fanfiction</h1>
          <h1>Accademy</h1>
          <button>GET INSPIRED</button>
          <div className="contest">
            <button> CONTEST </button>
          </div>
        </div>
      </div> */}


      {/* *****************************************************Popular************************************************************** */}
      <div className="popular">
        <div className="container">
          <h1>Popular</h1>
          <div className="popular-image">
            <div className="row">
              {



              // loading?
               getAllBooks.slice(0,4).map((booksData) => (
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <div className="popular-content-image">
                    <img
                      className="bookCover1"
                      src={booksData.pic.resize_url}
                      alt="book cover"
                    />
                  </div>
                  <div className="popular-content">
                    <h5>{booksData.title}</h5>
                    <ShowMore
lines={10}
more='Show more'
less='Show less'
anchorClass='button-read-more-show-less'
> <p>{booksData.description}</p></ShowMore>
                    
                    <h6> Author: {booksData.author}</h6>
                  </div>
                </div>
              ))

            //   :  <Audio
            //   heigth="100"
            //   width="100"
            //   color='grey'
            //   ariaLabel='loading'
            // /> 
            
            }
            </div>
            <Link to="/browse">
            <h2>
          More
              <ImArrowRight2 />
            </h2>
            </Link>
          </div>
        </div>
      </div>
      {/* ************************************************************Love Story******************************************************** */}
      <div className="lovestory">
        <div className="container">
          <div className="lovestory-image">
            <h1>Love Story</h1>
            <div className="row">
              {getAllBooks.slice(0,12).map((getloveStory) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="lovestory-bookimage">
                    <img
                      className="bookCover2"
                      src={getloveStory.pic.resize_url}
                      alt="book cover2"
                    />
                  </div>
                  <div className="lovestory-bookname">
                    <h6> {getloveStory.title} </h6>
                    <p>{getloveStory.author}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/marriage"> 
            <h2>
              More
              <ImArrowRight2 />
            </h2>
       
            </Link>
            
          </div>
        </div>
      </div>
      {/* *******************************************************Romance************************************************************* */}
      <div className="romance">
        <div className="container">
          <div className="romance-main">
            <h1>Romance</h1>
            <div className="row">
              {getAllBooks.slice(0,12).map((romanceBooks) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="romance-bookimage">
                    <img
                      className="bookCover2"
                      src={romanceBooks.pic.resize_url}
                      alt="book cover2"
                    />
                  </div>
                  <div className="romance-bookname">
                    <h6> {romanceBooks.title} </h6>
                    <p>{romanceBooks.author}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* <ShowMore
                // {* Default options *}
                lines={1}
                more='Show more'
                less='Show less'
                anchorClass="show-more"
          
            >
                <div className="row">
              {getAllBooks.slice(12,24).map((romanceBooks) => (
                <div className="col-sm-6 col-md-4 col-lg-2">
                  <div className="romance-bookimage">
                    <img
                      className="bookCover2"
                      src={romanceBooks.pic.resize_url}
                      alt="book cover2"
                    />
                  </div>
                  <div className="romance-bookname">
                    <h6> {romanceBooks.title} </h6>
                    <p>{romanceBooks.author}</p>
                  </div>
                </div>
              ))}
            </div>
            </ShowMore> */}
   <Link to="/romance">
            <h2>
              More
              <ImArrowRight2 />
            </h2>
            </Link>
          </div>
        </div>
      </div>
      {/* *********************************************Bookdetail********************************************************** */}
      <div className="book-detail">
        <div className="container">
          <div className="row">
            {getAllBooks.slice(0,4).map((downDummyBooks) => (
              <div className="col-sm-12 col-md-6 col-lg-6">
                <div className="book-detail-image-a">
                  <img
                    className="bookCover-a"
                    src={downDummyBooks.pic.resize_url}
                    alt="book cover"
                  />
                </div>
                <div className="book-detail-content-a">
                  <h5>The Forsaken Boy</h5>
                  
                  <ShowMore
lines={10}
more='Show more'
less='Show less'
anchorClass='second-button-read-more-show-less'
> <p>{downDummyBooks.description}</p> </ShowMore>
                  <h6> Author: {downDummyBooks.author} </h6>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
