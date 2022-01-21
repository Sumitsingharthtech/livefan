import React from "react";
import { BiPhoneCall } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { ReactComponent as Fbicon } from "../../../Assets/Images/fbicon.svg";
import { ReactComponent as Instaicon } from "../../../Assets/Images/instaicon.svg";
import { ReactComponent as Twittericon } from "../../../Assets/Images/twittericon.svg";
import "./ContactDetail.css";
function ContactDetail() {
  return (
    <div className="main">
      <div className="container">
        <h1 className="contact-11"> Contact Us</h1>
        <div className="contact-icon">
          <div className="phone-1">
            <p className="p-1"><BiPhoneCall style={{background:'#000', color:'#fff',width:'30px',height:'30px',borderRadius:'15px'}}/> (+91) 9000000000</p>
          </div>
          <div className="phone-1">
            <p className="p-2"><AiOutlineMail style={{background:'#000', color:'#fff',width:'30px',height:'30px',borderRadius: '15px',}}/>contact@fanfiction.com </p>
          </div>
        </div>

        <div class="contactus_connect">
          <h1 className="h-11"> Contact With Us </h1>
        </div>
        <div class="contactus_icons">
          <div className="icon-1">
            <Fbicon /> @Fanfiction
          </div>

          <div className="icon-1">
            <Instaicon /> @Fanfiction
          </div>

          <div className="icon-1">
            <Twittericon /> @Fanfiction
          </div>
        </div>
      </div>
    </div>
  );
}
export default ContactDetail;
