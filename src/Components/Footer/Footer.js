import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";



const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="footer-col mt-5">
              <h4>About</h4>
              <ul>
                <li>
                  <Link exact to="/aboutus">About Us</Link>
                </li>
                <li>
                  <Link to="/terms-of-use" >Terms Of Use</Link>
                </li>
                <li>
                  <Link to="/Privacypolicy" href="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="/webmap">Web Map</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col mt-5">
              <h4>Contact Us</h4>
              <ul>
                <li>
                  <Link to="/business" >Business</Link>
                </li>
                <li>
            
                  <Link to="/author-brand">Author Brand</Link>
                </li>
                <li>
                  <Link to="/contact-details" >Contact Details</Link>
                </li>
                <li>
          
                  <Link to="/dmca" >DCMA</Link>
                 
                </li>
              </ul>
            </div>
            <div className="footer-col mt-5">
              <h4>Resources</h4>
              <ul>
                <li>
                  <Link to="/writer-benefit">Writer Benefits</Link>
                </li>
                <li>
                  <Link to="/faqs" >FAQs</Link>
                </li>
                <li>
                  <Link to="/content-policy" >Content Policy</Link>
                </li>
              </ul>
            </div>
            <div className="footer-col mt-5">
              <h4>Follow Us</h4>
              <div className="social-links">
                <a href="/">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
