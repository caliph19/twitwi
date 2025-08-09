import React from "react";
import { BookprofessionalData }  from "./BookprofessionalData";
import { MdArrowOutward } from "react-icons/md";

const Bookprofessional = () => {
  return (
    <>
      <div className="professionalmain">
        <div className="professionaldiv1">
          {BookprofessionalData.map((items) => (
            <>
              <div className="procardmain  custom-width-card">
                <div className="procardcenter">
                  <div className="procardid">{items.id}</div>
                  <button
                    className="set-procardbtn"
                    style={{ backgroundColor: items.iconcolor }}
                  >
                    {" "}
                    {items.icon}
                  </button>
                  <div className="procardheading">
                    <b> {items.title}</b>
                  </div>
                  <div className="procarddetails">{items.description}</div>
                </div>
              </div>
            </>
          ))}
        </div>
        <div className="professionaldiv2">
          <div className="prodiv2head">
            why <span id="set-choose"> twi</span> <span id="set-twi">twi</span>
          </div>
          <div className="prodiv2details">
            We’re redefining how
            <br /> you find and book <br /> trusted professionals <br />{" "}
            <span id="set-instantly">Instantly</span>
          </div>
          <button className="probtn1">
            {" "}
            Start Your Booking
            <MdArrowOutward className="homebtn1icon" />{" "}
          </button>
        </div>
      </div>
    </>
  );
};

export default Bookprofessional;
