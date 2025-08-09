import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoBagCheck } from "react-icons/io5";
import ExploreData from "./ExploreData";

const Explore = () => {
  return (
    <>
      <div className="exploremain">
        <div className="explorecenter">
          <div className="exphigh">
            <div className="exploretop">
              <div className="exploreheading">
                <div className="explorelogo">
                  <span id="explore-choose"> twi</span>{" "}
                  <span id="explore-twi">twi</span>Professionals
                </div>
                <div className="explorediv1contant">
                  Explore Our <br /> Popular{" "}
                  <button>
                    <IoBagCheck />
                  </button>{" "}
                  Services
                </div>
              </div>
              <div className="explorebuttons">
                <button className="homebtn1">
                  {" "}
                  For Home
                  <MdArrowOutward className="homebtn1icon" />{" "}
                </button>
                <button className="explorebtn2">
                  For Businesses <MdArrowOutward className="homebtn1icon2" />{" "}
                </button>
              </div>
              <div className="exploredetails">
                From taps to tasks, <br /> twitwi sends the right pro <br />{" "}
                your way—instantly.
              </div>
            </div>
          </div>
          <div className="exploremap">
            {ExploreData.map((exp) => (
              <div
                className="explorcard"
                style={{ background: exp.explorecardbg }}
              >
                <div className="explorecardtop">
                  <div
                    className="explorecardbutton"
                    style={{ background: exp.explorebtncolor }}
                  >
                    <div className="exploreicon">{exp.icon}</div>
                  </div>
                  <div
                    className="explorediv1title"
                    style={{ color: exp.explortitlecolor }}
                  >
                    {exp.title}
                  </div>
                </div>
                <div className="explorecardbottom">
                  <div
                    className="explorediv1service"
                    style={{ color: exp.explortitlecolor }}
                  >
                    {exp.service}
                  </div>
                  <div className="explorecardimages">
                    <div className="explorcardimgd">
                      {exp.images?.map((img, idx) => (
                        <div key={idx} className="explorcardimgdiv">
                          <img src={img} alt={`person-${idx}`} />
                        </div>
                      ))}
                    </div>
                    <div className="explorecardicondiv">
                      <button>
                        <MdArrowOutward
                          style={{ color: exp.exploreiconcolor }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <div className="setexplastbtn">

            <button className="expbtn11">
              {" "}
              Explore More Services
              <MdArrowOutward className="expbt11icon" />{" "}
            </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Explore;
