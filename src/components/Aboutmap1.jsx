import React from "react";
import { AboutArray1 } from "../components/book professional/BookprofessionalData";
import { MdArrowOutward } from "react-icons/md";

const Aboutmap1 = () => {
  return (
    <>
      <div className="professionalmain professionalmain-about">
        <div className="professionaldiv2">
          <div className="prodiv2head">
            What we offer
          </div>
          <div className="prodiv2details">
            We’re redefining how
             you find and book  trusted professionals <br />{" "}
            <span id="set-instantly">Instantly</span>
          </div>
          <button className="probtn1">
            {" "}
            Start Your Booking
            <MdArrowOutward className="homebtn1icon" />{" "}
          </button>
        </div>
        <div className="professionaldiv1">
          {AboutArray1.map((items) => (
            <>
              <div className="procardmain"
              
              >
                <div className="procardcenter">
                  <div className="procardid">{items.aboutmap1id}</div>
                  <button
                    className="set-procardbtn"
                    style={{ backgroundColor: items.aboutmap1iconcolor }}
                  >
                    {" "}
                    {items.aboutmap1icon}
                  </button>
                  <div className="procardheading">
                    <b> {items.aboutmap1title}</b>
                  </div>
                  <div className="procarddetails">
                    {items.aboutmap1description}
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Aboutmap1;
