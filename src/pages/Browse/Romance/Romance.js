import React, {useState, useEffect} from "react";
import Box1 from "../../../Assets/Images/box1.png";
// import Box2 from "../../../Assets/Images/box2.png";
// import Box3 from "../../../Assets/Images/box3.png";
// import werewolf from "../../../Assets/Images/werewolf.png";
import { GrAddCircle } from "react-icons/gr";
import "../Browse.css";
import BrowseNavbar from "../BrowseNavbar/BrowseNavbar";
import axios from "axios";
import ShowMore from 'react-show-more';

const Romance = () => {
  const [getRomanceBooks, setRomanceBooks] = useState([]);

  useEffect(() => {
    GetRomanceBooksHandler();
  }, []);

  const GetRomanceBooksHandler = async () => {
    let result = await axios.get("http://103.171.181.46:2081/api/books");
    console.log(result.data.data);
    setRomanceBooks(result.data.data);
  };
  return (
    <>
      <BrowseNavbar />
      <div className="browse-card">
        <div className="container">
          <div className="row">
            {getRomanceBooks.slice(0,3).map((topWerewolfBooks) => (
              <div className="col-sm-12 col-md-6 col-lg-4">
                <div className="browse-card-image">
                  <img src={Box1} alt="box1" />
                </div>
                <div className="browse-box-2">
                  <div className="browse-card-book-image">
                    <img src={topWerewolfBooks.pic.resize_url} alt="Werewolf" />
                    <div className="browse-card-content-button">
                      <h3>{topWerewolfBooks.title}</h3>
                      <h5>Author: {topWerewolfBooks.author} </h5>
                      <a href={topWerewolfBooks.pdf.url}>Read</a>
                      <h5>
                        <GrAddCircle />
                        Add to Library
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="browse-book-content">
        <div className="container">


        {getRomanceBooks.slice(0,10).map((wereWolfBooks, index) => (
           
           <div className="row">
             <div className="col-sm-12 col-md-1 col-lg-1">
               <div className="serial-no">
                 <h1>{index + 1}</h1>
               </div>
             </div>
             <div className="col-sm-12 col-md-2 col-lg-2">
               <div className="browse-book-content-image">
                 <img src={wereWolfBooks.pic.resize_url} alt="werewolf" />
               </div>
             </div>
             <div className="col-sm-12 col-md-6 col-lg-7">
               <div className="browse-book-content-text">
                 <h1>{wereWolfBooks.title}</h1>
                 <h5>Author : {wereWolfBooks.author} </h5>
                 <p>{wereWolfBooks.description}</p>
               </div>
             </div>
             <div className="col-sm-12 col-md-3 col-lg-2">
               <div className="browse-book-content-button">
                 <a href={wereWolfBooks.pdf.url}>Read</a>
                 <h5>
                   <GrAddCircle />
                   Add to Library
                 </h5>
               </div>
             </div>
           </div>
         ))}
        <ShowMore
lines={1}
more='Show more'
less='Show less'
anchorClass='seemore'
>
          {getRomanceBooks.slice(11,35).map((wereWolfBooks, index) => (
           
            <div className="row">
              <div className="col-sm-12 col-md-1 col-lg-1">
                <div className="serial-no">
                  <h1>{index + 11}</h1>
                </div>
              </div>
              <div className="col-sm-12 col-md-2 col-lg-2">
                <div className="browse-book-content-image">
                  <img src={wereWolfBooks.pic.resize_url} alt="werewolf" />
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-7">
                <div className="browse-book-content-text">
                  <h1>{wereWolfBooks.title}</h1>
                  <h5>Author : {wereWolfBooks.author} </h5>
                  <p>{wereWolfBooks.description}</p>
                </div>
              </div>
              <div className="col-sm-12 col-md-3 col-lg-2">
                <div className="browse-book-content-button">
                  <a href={wereWolfBooks.pdf.url}>Read</a>
                  <h5>
                    <GrAddCircle />
                    Add to Library
                  </h5>
                </div>
              </div>
            </div>
          ))}

</ShowMore>

          </div>
      </div>
    </>
  );
};

export default Romance;
