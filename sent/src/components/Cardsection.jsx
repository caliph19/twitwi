import React, { useState } from "react";
import CardsectionData from "./CardsectionData";
import { MdArrowOutward } from "react-icons/md";

const Cardsection = () => {
  const [activeCardId, setActiveCardId] = useState(2); // default active card

  const handleCardClick = (cardid) => {
    setActiveCardId(cardid);
  };

  return (
    <div className="cardsectionmain">
      <div className="cardsectioncenter">
        <div className="cardsectionheading">
          <div className="cardsectionlogo">
            Who's using
            <span id="cardsection-choose"> twi</span>{" "}
            <span id="cardsection-twi">twi</span> today?
          </div>
        </div>

        <div className="cardsectionmap">
          {CardsectionData.map((card) => (
            <div
              key={card.cardid}
              className={`cardsectionmapcard ${
                activeCardId === card.cardid ? "active-card" : ""
              }`}
              onClick={() => handleCardClick(card.cardid)}
              style={{ background: card.cardbgcolor }}
            >
              <div className="cardsectionmapimg">
                <img src={card.cardimg} alt="" />
              </div>
              <div className="cardsectionmaptitle">
                <p>{card.cadbusinesstype}</p>
              </div>
              <div className="cardsectionmapdisc">
                <p>{card.cadservices}</p>
              </div>
              <div className="cardsectionmapbtn">
                <button>
                  {card.cardbtncontant}
                  <MdArrowOutward className="cardsectionicon" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cardsection;
