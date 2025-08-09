import React, { useState } from "react";
import Header from "../../components/header/Header";
import "./home.css";
import { MdArrowOutward } from "react-icons/md";
import { MdCalendarMonth } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import Bookprofessional from "../../components/book professional/Bookprofessional";
import Footer from "../../components/footer/Footer";
import Explore from "../../components/Explore";
import Cardsection from "../../components/Cardsection";
import BlogStackedCarousel from "../../components/carousel";
import PopupSection from "../../components/PopupSection";

const Home = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleRadioChange = (e) => {
    setSelectedOption(e.target.value);
    setShowPopup(true);
  };

  const closePopup = () => {
    setSelectedOption(null);
    setShowPopup(false);
  };

  return (
    <>
      <div className="homemain">
        <div className="homecenter">
          <div className="homeleft">
            <div className="homelefttop">
              <button className="homebtn1">
                {" "}
                For Home
                <MdArrowOutward className="homebtn1icon" />{" "}
              </button>
              <button className="homebtn2">
                For Businesses <MdArrowOutward className="homebtn1icon2" />{" "}
              </button>
            </div>
            <div className="homeleftmiddle">
              <h1>
                {" "}
                <span className="setneedhelp">Need Help?</span> Book Instantly
                or Schedule at Your Convenience!{" "}
              </h1>
              <p>
                twitwi connects you with professionals across home & business
                needs— <br /> fast, reliable, and on your terms.
              </p>
            </div>
            <div className="homeleftbottom">
              <div className="homeleftbottomcenter">
                <div className="homeleftbottomdiv1">
                  What you need help with today?
                </div>
                <div className="homeleftbottomdiv2">
                  <label className="homebottomoption1 cursor-pointer flex items-center gap-2">
                    <input
                      type="radio"
                      name="booking"
                      value="instant"
                      className="mr-2"
                      checked={selectedOption === "instant"}
                      onChange={handleRadioChange}
                    />
                    Instant Booking
                  </label>

                  <label className="homebottomoption2 cursor-pointer flex items-center gap-2">
                    <input
                      type="radio"
                      name="booking"
                      value="schedule"
                      className="mr-2"
                      checked={selectedOption === "schedule"}
                      onChange={handleRadioChange}
                    />
                    <p>Schedule Booking</p>
                    <MdCalendarMonth className="set-calender" />
                  </label>
                </div>

                {showPopup && (
                  <PopupSection
                    onClose={closePopup}
                    selectedOption={selectedOption}
                  />
                )}
                <div className="homeleftbottomdiv3">
                  <input type="text" placeholder="Postcode" />
                </div>
                <div className="homeleftbottomdiv4">
                  <button>
                    <CiSearch id="set-homesearch" /> Find Professional
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="homeright">
            <div className="box box1"></div>
            <div className="box box2"></div>
            <div className="box box3">
              <BlogStackedCarousel />
            </div>
          </div>
        </div>
      </div>
      <div className="homemaindiv">
        <div className="homewholecenter">
          <Bookprofessional />
        </div>
      </div>
      {/* <Mobile/> */}
      <Explore />
      <Cardsection />
      <Footer />
    </>
  );
};

export default Home;
