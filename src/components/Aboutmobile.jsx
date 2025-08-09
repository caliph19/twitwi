import React from "react";
import { MdArrowOutward } from "react-icons/md";

const Aboutmobile = () => {
  return (
    <>
      <div className="aboutmobilemain">
        <div className="aboutmobilecenter">
          <div className="aboutmobileleft">
            <div className="mobileleftdiv1">
              <span id="set-aboutchoose"> twi</span>{" "}
              <span id="set-abouttwi">twi</span> App- Comming Soon!
            </div>
            <div className="mobileleftdiv2">
              <h1>
                Get ready to book pros even faster—right from your pocket.
              </h1>
            </div>
            <button className="probtn1">
              {" "}
              Start Your Booking
              <MdArrowOutward className="homebtn1icon" />{" "}
            </button>
          </div>
          <div className="aboutmobileright">
            <div className="aboutmobilerightimg1"></div>
            <div className="aboutmobilerightimg2"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Aboutmobile;
