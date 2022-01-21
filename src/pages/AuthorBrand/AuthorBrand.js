
import "./../AuthorBrand/AuthorBrand.css";
import Book from "./../../assets/bookshare.png";
import { IoMdContacts } from "react-icons/io";
import { BiMessageSquareDots } from "react-icons/bi";


import { GiTargeted } from "react-icons/gi";
import { SiTrendmicro } from "react-icons/si";
import { GiCoffeeCup } from "react-icons/gi";
import { FiSmartphone } from "react-icons/fi";

const AuthorBrand = () => {
  return (
    <>

    {/* Top part of the Page *********************************************************************************************************** */}
    <div className="writerrBrand">
      <div className="topPart">
        <div className="writerbrand_bg">
        <div className="container">
          <div className="writerbrand_main">
            <h1>Fanfiction</h1>
            <h2> Author Brand Benefit Project</h2>
            <br />
            <h3>Apply</h3>
          </div>
          </div>
        </div>
        </div>


        {/* ****************************************************************************************************************************** */}

                                     {/* Middle part of the page */}  

        <div className="container">
        <div className="writerrBrand_one">
          <div className="writerrBrand_one_content">
            <h1>1</h1>
            <h2>
              Author's Brand Establisment <strong> Apply</strong>
            </h2>
            <p className="para">
              Fanfiction wiill operate exclusive facebook Fanpages and facebook
              Groups fro top-rated books, wielding our resources to imporve authors's personal brand images and to
              encourage readers to recreate contents around the novels. This would help the facebook group from a good
              community atmosphere, achieve content self-sufficiency and continuously strengthen reader's dependency on novels.</p>
          </div>
          <div className="writerrBrand_one_icons">
            <div className="writerrBrand_one_icons_first"><p><span><IoMdContacts /></span>Creating Personal Facebook Fanpage </p> </div>
            <div className="writerrBrand_one_icons_text">
              <p> Fanfiction wiill operate exclusive facebook Fanpages and facebook Groups fro top-rated books, 
                wielding our sufficiency and continuously strengthen reader's dependency on
                novels. </p>
            </div>
            <div className="writerrBrand_one_icons_first">
              <p>
                <span>
                  <BiMessageSquareDots />
                </span>
                Creating Personal Facebook Group
              </p>
            </div>
            <div className="writerrBrand_one_icons_text">
              <p>Fanfiction wiill operate exclusive facebook Fanpages and facebook Groups fro top-rated books,
                 wielding our sufficiency and continuously strengthen reader's dependency on
                novels.</p></div>
            <div className="writerrBrand_one_icons_first"><p> <span><GiTargeted /> </span>Precise Promotion</p> </div>
            <div className="writerrBrand_one_icons_text">
              <p>
                Fanfiction wiill operate exclusive facebook Fanpages and
                facebook Groups fro top-rated books, wielding our sufficiency and continuously strengthen reader's dependency on
                novels. </p></div>
            <div className="writerrBrand_one_icons_first">
              <p><span><SiTrendmicro /></span> Maintenance Books' Trend </p> </div>
            <div className="writerrBrand_one_icons_text">
              <p> Fanfiction wiill operate exclusive facebook Fanpages and facebook Groups fro top-rated books,
                 wielding our sufficiency and continuously strengthen reader's dependency on
                novels. </p>
            </div>
          </div>
          </div>
        </div>
        
    {/* ***************************************Middle Part End ********************************************************** */}
      
      
    <div className="container">
      <div className="middlePart">
      <div className="writerrBrand_two">
        <div className="writerrBrand_two_content">
          <h1>2</h1>
          <h2>
            Exclusive Exposure Position <strong> Apply</strong>
          </h2>
          <p>
            In order to bring more exposure for our novels on the platform
            Fanfiction hase created many
          </p>
          <p>external and internal exposure positions for book promotion.</p>
        </div>
      </div>
      <div className="writerrbrand_table">
        <div className="writerbband_box">
          <h1><FiSmartphone /> Internal</h1>
          <p> Internal exposure positions are mainly for fanfiction potential users or users to be recalled, through spreading high-quality contents to reach such user and attract them to 
          click on the novel pages. </p></div>
        <div className="writerbband_box">
          <h1><GiCoffeeCup />External</h1>
          <p> External exposure positions are mainly for fanfiction potential users or users to be recalled, through spreading 
          high-quality contents to reach such user and attract them to click the book links. </p></div>
      </div>


      <div className="writerrBrand_three">
        <div className="writerrBrand_three_content">
          <h1>3</h1>
          <h2>Book Sharing <strong> Apply</strong></h2>
          <p>In order to encourge readers to spontaneasuly shae the novel's link,Fanfiction will enrich the approaches of book sharing from fanction app to social media
            platfrom, which include incentive book sharing and personlized book sharing so that novels can reach potential reader through the share's social netowrk.
          </p>
        </div>
      </div>
      </div>
      </div>



{/* **********************************************Bottom Part ******************************************************************************** */}
      <div className="bottomPart">
        <div className="container">
      <div className="writerrBrand_img">
        <img src={Book} alt="Book" class="writerrBrand_img_book" />
        <div className="writerbrand_img_text ">
          <h1> Incentive Book Sharing </h1>
          <p className="p-last"> Incentives such as free coins will encourage reader to share Fanfiction books with their frineds</p>
          <h1>Personalized Book Sharing</h1>
          <p className="p-last"> Fanfiction will create personalized book share links for popular books, the contents of which include personalized 
          excerpts with beautiful pictures,or video clips of novels highlights, so as tos stimulate readers desire to shaer these book
            links </p>
        </div>
      </div>
      </div>
      </div>
    </div>
    </>
  );
};
export default AuthorBrand;

