import React from "react";
import { CiCalendar } from "react-icons/ci";
import { MdOutlineVerified } from "react-icons/md";
import { BsListCheck } from "react-icons/bs";
import { MdOutlineTaskAlt } from "react-icons/md";
import { IoMdArrowForward } from "react-icons/io";
import worker1 from "../../images/c4.png";
import worker2 from "../../images/c5.png";
import worker3 from "../../images/c1.png";
import worker4 from "../../images/c2.png";

const DashboardContent = () => {
  const dashboardCards = [
    {
      title: "Upcoming Booking",
      count: 2,
      description: "Booked and awaiting service.",
      icon: <CiCalendar />,
      status: "Scheduled",
      cardbgcolor: "#323232",
      cardtextcolor: "#fff",
    },
    {
      title: "Ongoing Tasks",
      count: 1,
      description: "Currently being handled.",
      icon: <BsListCheck />,
      status: "In Progress",
    },
    {
      title: "Past Services",
      count: 5,
      description: "Recently finished tasks.",
      icon: <MdOutlineTaskAlt />,
      status: "Completed",
    },
  ];

  const dashboardCard2Data = [
    {
      workerimg: worker1,
      workername: "David",
      workerprice: "150$",
      occupation: "Murphy Plumbing",
      icon: <MdOutlineVerified />,
      status: "completed",
      dateofwork: "12 Feb 2025",
      experties: " (Electrician & Fixture Expert) ",
      wrokerbtn1: "Cancel",
      workerbtn2: "View Details",
      workerbtn3: "Message",
    },
  ];
  const dashboardCard3Data = [
    {
      preimg: worker2,
      occupation: "Flores Home Services",
      icon: <MdOutlineVerified />,
      workexperties: " Plumber & Drainage Expert ",
      prebtn1: "Book Again",
    },
    {
      preimg: worker3,
      occupation: "Wilson HandyFix Ltd.",
      icon: <MdOutlineVerified />,
      workexperties: " Plumber & Drainage Expert ",
      prebtn1: "Book Again",
    },
    {
      preimg: worker4,
      occupation: "Henry Plumbing & Co.",
      icon: <MdOutlineVerified />,
      workexperties: " Plumber & Drainage Expert",
      prebtn1: "Book Again",
    },
  ];

  const dashboardCard4Data = [
    {
      activityimg: worker2,
      activityname: " John(Homeowner) joined ",
      activitytime: "Just now",
    },
    {
      activityimg: worker3,
      activityname: "Job #234 booked by Sarah",
      activitytime: "59 minutes ago",
    },
    {
      activityimg: worker4,
      activityname: " Professional Alex approved",
      activitytime: "12 hours ago",
    },
    {
      activityimg: worker2,
      activityname: " Payment of $100 processed",
      activitytime: "Today, 11:59 AM",
    },
    {
      activityimg: worker3,
      activityname: "Job #234 booked by Sarah",
      activitytime: "59 minutes ago",
    },
    {
      activityimg: worker4,
      activityname: " Professional Alex approved",
      activitytime: "12 hours ago",
    },
  ];
  return (
    <>
      <div className="dashboarddiv1">
        <div className="dashdiv1content">
          <h1>Welcome Back, Rashid</h1>
          <p>Need help today? Book a pro in seconds.</p>
        </div>
        <div className="dashdiv1button">
          <button>Book a Service</button>
        </div>
      </div>

      <div className="dashboarddiv2">
        {dashboardCards.map((card, index) => (
          <div
            className="dashboard-card"
            key={index}
            style={{ background: card.cardbgcolor }}
          >
            <div className="card-info" style={{ color: card.cardtextcolor }}>
              <h1
                calssName="dashcard-title"
                style={{ color: card.cardtextcolor }}
              >
                {card.title}
              </h1>
              <div className="card-count">
                {" "}
                <h2 id="set-cardcount">{card.count}</h2>{" "}
                <p id="set-cardstatus">{card.status}</p>{" "}
              </div>
              <div className="dashboardcardtexticon">
                <p
                  className="card-description"
                  style={{ color: card.cardtextcolor }}
                >
                  <IoMdArrowForward />
                  {card.description}
                </p>
              </div>
            </div>
            <div className="card-icon">{card.icon}</div>
          </div>
        ))}
      </div>
      <div className="dashboarddiv3">
        <h1>Your Last Booking</h1>
      </div>
      <div className="dashboarddiv4">
        <div className="dashboarddiv4left">
          <div className="dasleftdiv1">
            {dashboardCard2Data.map((card2) => (
              <div className="dasleftdiv1card">
                <div className="dashmap2img">
                  <img src={card2.workerimg} alt="" />
                </div>
                <div className="dashmap2contentsec">
                  <div className="map2workeroccupation">
                    <p>
                      {" "}
                      <b>{card2.occupation} </b>{" "}
                    </p>
                    <p id="set-card2icon">{card2.icon}</p>
                  </div>
                  <div className="map2wrokername">
                    <p>
                      {" "}
                      {card2.workername} {card2.experties}{" "}
                    </p>
                  </div>
                  <div className="map2wrokerprice">
                    <h1> {card2.workerprice} </h1>
                  </div>
                </div>
                <div className="dashmap2buttonssec">
                  <div className="dashmap2btnsec">
                    <p> {card2.dateofwork} </p>
                    <button> {card2.status} </button>
                  </div>
                  <div className="dashmap2btns2">
                    <button id="set-workerbtn1"> {card2.wrokerbtn1} </button>
                    <button id="set-workerbtn2"> {card2.workerbtn2} </button>
                  </div>
                </div>
              </div>
            ))}
            <div className="dasleftdiv1image">
              <div className="card2workerimg">
                <img src={worker1} alt="" />
              </div>
              <button>Message</button>
            </div>
          </div>
          <div className="dashboardlastbooking">
            <h1>Professional Network</h1>
          </div>
          <div className="dashboardmap3section">
            {dashboardCard3Data.map((card3) => (
              <div className="dashmap3main">
                <div className="dashmap3img">
                  <img src={card3.preimg} alt="" />
                </div>
                <div className="dashmap3job">
                  <h1>{card3.occupation}</h1>{" "}
                  <p id="set-map3icon">{card3.icon}</p>
                </div>
                <div className="dashmap3experties">
                  <p> {card3.workexperties} </p>
                </div>
                <div className="dashmap3button">
                  <button> {card3.prebtn1} </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="dashboarddiv4right">
          <div className="dashmap3righttop">
            <p>Activities</p>
          </div>
          <div className="dasactivites">
            {dashboardCard4Data.map((act) => (
              <div className="dasactmain">
                <div className="dashactimg">
                  <img src={act.activityimg} id="set-dasimg" alt="" />
                </div>
                <div className="activedasheading">
                  <h1> {act.activityname} </h1>
                  <p> {act.activitytime} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardContent;
