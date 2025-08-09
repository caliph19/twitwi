import React from "react";
import { MdOutlineVerified } from "react-icons/md";

export const MissioncardData = [
  {
    id: 1,
    icon:<MdOutlineVerified />,
    iconbg: "#FF7700",
    missioncardbg: "white",

    heading: "Mission",
    content:
      "To create a world where every service need can be resolved with just a few clicks.",
  },
  {
    id: 2,
    icon: <MdOutlineVerified />,
    iconbg: "#28C76F",
    missioncardbg: "#111116",
    missioncardtext: "#fff",
    heading: "Vision",
    content:
      "To become the most trusted and intelligent service marketplace globally.",
  },
];
const Ourmission = () => {
  return (
    <>
      <div className="missionmain">
        <div className="missioncenter">
          <div className="missionbutton">
            <button>Mission and Vision</button>
          </div>
          <div className="missioncontent">
            {MissioncardData.map((mission) => (
              <>
                <div
                  className="missioncard1"
                  style={{ background: mission.missioncardbg }}
                >
                    <div className="missioncardicon">
                        <button style={{background:mission.iconbg}} >{mission.icon}</button>
                    </div>
                    <div className="missioncardheading" 
                  style={{ color: mission.missioncardtext }}
                    
                    >
                         <h1>{mission.heading}</h1>
                    </div>
                    <div className="missioncarddetails"
                  style={{ color: mission.missioncardtext }}
                    
                    >
                        <p>
                            {mission.content}
                        </p>
                    </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Ourmission;
