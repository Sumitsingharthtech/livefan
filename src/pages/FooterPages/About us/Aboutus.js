import React from "react";
import "./Aboutus.css";
import Create from "../../../Assets/Images/create.png";
import classical from "../../../Assets/Images/classical.png";
import Share from "../../../Assets/Images/share.png";
import Ios from "../../../Assets/Images/ios.png";
import Fb from "../../../Assets/Images/fb.png";
import Android from "../../../Assets/Images/android.png";

const About = () => {
  return (
    <div>
      <div class="about-box ">
        <div className="container">
        <h1 class="area"><span>Love all</span>, Believe a few</h1>
        <p class="area_font"> Fanfiction is an online stroy platform and community  dedicated
          to create a new generation of classic novels and a free zone of imagination powered by technology.</p>
        </div>
         </div>
      <div class="about_background">
          
            <div className="container">
            <div className="about-main">
              <h2>Values</h2>
              <h1 className="our-values">Our Values</h1>
              <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="find-fanfiction-icon">
            <img src={classical} alt="classcial" />
            <h4>Classicality </h4>
            </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="find-fanfiction-icon">
            <img src={Share} alt="share"/>
            <h4>Shareability</h4>
            </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
            <div className="find-fanfiction-icon">
            <img src={Create} alt="create"/>
            <h4> Creativity</h4>
            </div>
            </div>
            </div>
             </div>
          </div>
        <div className="find-fanfiction">
          <div className="container">
          <h1 className="our-values">Find Us On</h1>
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="find-fanfiction-icon">
              <img src={Fb} alt="ios" class="share_fb" />
              <h4 >Facebook</h4>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="find-fanfiction-icon">
              <img src={Ios} alt="ios" />
              <h4>IOS APP</h4>
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="find-fanfiction-icon">
              <img src={Android} alt="android" />
              <h4>Android App</h4>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
