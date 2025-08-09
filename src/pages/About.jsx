import React from "react";
import { MdArrowOutward } from "react-icons/md";
import { PiScrewdriverBold } from "react-icons/pi";
import { PiPipeWrench } from "react-icons/pi";
import { PiPaintBrushHouseholdBold } from "react-icons/pi";
import Aboutmap1 from "../components/Aboutmap1";
import Ourmission from "../components/Ourmission";
import Aboutmap2 from "../components/Aboutmap2";
import WhoWeAre from "../components/WhoWeAre";
import AccodianSection from "../components/AccodianSection";
import Aboutmobile from "../components/Aboutmobile";
import ChatApp from "../components/ChatApp";

const About = () => {
  return (
    <>
      <div className="aboutmain">
        <div className="aboutcircle"></div>
        <div className="aboutheroicons">
          <button className="aboutheroicon1">
            <PiScrewdriverBold />
          </button>
          <button className="aboutheroicon2">
            <PiPipeWrench />
          </button>
          <button className="aboutheroicon1">
            <PiPaintBrushHouseholdBold />
          </button>
        </div>
        <h1>
          Redefining How You <br /> Book Trusted Pros
        </h1>
        <p>
          {" "}
          From home tasks to business services, Twitwi connects you with <br />
          verified professionals—instantly or on your schedule.
        </p>
        <div className="aboutmainbutton">
          <button className="aboutbtn1">
            {" "}
            Join us
            <MdArrowOutward className="aboutbtn1icon" />{" "}
          </button>
          <button className="aboutbtn2">
            Explore Services <MdArrowOutward className="aboutbtn1icon2" />{" "}
          </button>
        </div>
      </div>
        <WhoWeAre/>
      <Ourmission />
      <div className="aboutcomp1">
        <div className="aboutcopmcenter">
          <Aboutmap1 />
        </div>
      </div>
      <AccodianSection/>
      <div className="aboutcomp2">
        <div className="aboutcopm2center">
          <Aboutmap2 />
        </div>
      </div>
      <Aboutmobile/>
      <ChatApp/>
    </>
  );
};

export default About;
