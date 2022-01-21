import React from "react";
import "./Business.css";

function Business() {
  return (
    <>
      <div className="business_box ">
        <div className="container">
          <div className="business_title">
            <h1>Business </h1>
          </div>
          <div className="business_content">
            <p>
              <ul>
                <li>Dear User, </li>
                <li>
                  Thankyou for your interest in Fanfiction. We Want to hear your
                  voice.
                </li>
                <li>
                  <p>
                    If you are looking for business opportunities, please send
                    us email to <br />
                    <p className="p1"> business@fanfiction.com </p>
                  </p>
                </li>
                <li>
                  <p>
                    If you are interested in any work opportunities here with us
                    Fanfiction team, Please contact us with <br />
                    <p className="p1"> hr@fanfiction.com </p>
                  </p>
                </li>
                <li>
                  <p>
                    If you have other questions or concerns please send us email
                    to <br />
                    <p className="p1"> contact@fanfiction.com</p>
                  </p>
                </li>
                <li> Thanks you again </li>
                <li> Best Regards</li>
                <li>
                  <h3> Fanfiction </h3>
                </li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Business;
