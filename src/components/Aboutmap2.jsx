import React from "react";
import { AboutArray2 } from "../components/book professional/BookprofessionalData";
import { MdArrowOutward } from "react-icons/md";

const Aboutmap2 = () => {
  return (
    <>
      <div className="professionalmain professionalmain-about professionalmain-about2">
        <div className="professionaldiv2">
          <div className="prodiv2head">
            why <span id="set-choose"> twi</span> <span id="set-twi">twi</span> is different?
          </div>
        </div>
        <div className="professionaldiv1">
          {AboutArray2.map((items) => (
            <>
              <div className="procardmain"
                    style={{ backgroundColor: items.aboutmap2bgcolor }}
              
              >
                <div className="procardcenter">
                  <div className="procardid">{items.aboutmap2id}</div>
                  <button
                    className="set-procardbtn"
                    style={{ backgroundColor: items.aboutmap2iconcolor }}
                  >
                    {" "}
                    {items.aboutmap2icon}
                  </button>
                  <div className="procardheading">
                    <b> {items.aboutmap2title}</b>
                  </div>
                  <div className="procarddetails">
                    {items.aboutmap2description}
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

export default Aboutmap2;
