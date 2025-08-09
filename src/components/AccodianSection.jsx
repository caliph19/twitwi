import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import { IoIosArrowDown } from "react-icons/io";

const AccodianSection = () => {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const accordionItems = [
    {
      id: "panel1",
      title: "What is Twitwi?",
      content:
        "An on-demand service platform to book vetted pros instantly or on schedule.",
    },
    {
      id: "panel2",
      title: "What services can I book?",
      content: "Content for accordion 2",
    },
    {
      id: "panel3",
      title: "What makes Twitwi different?",
      content: "Content for accordion 3",
    },
    {
      id: "panel4",
      title: "Can I trust the professionals?",
      content: "Content for accordion 4",
    },
    {
      id: "panel5",
      title: "Can I schedule in advance?",
      content: "Content for accordion 5",
    },
    {
      id: "panel6",
      title: "Is there a mobile app?",
      content: "Content for accordion 6",
    },
  ];

  return (
    <div className="accmain">
      <div className="accenter">
        <div className="accleft">
          <div className="accleftimg">
            <div className="accleftimg1">
              {/* <button>hello</button> */}
            </div>
            <div className="accleftimg2"></div>
          </div>
        </div>

        <div className="accright">
          <div className="accrightbutton">
            <button>Frequently Asked Questions</button>
          </div>
          {accordionItems.map((item) => (
            <Accordion
              expanded={expanded === item.id}
              onChange={handleChange(item.id)}
              disableGutters
              elevation={0}
              square
              sx={{
                border: "none",
                borderBottom: "1px solid #ddd",
                borderRadius: 0,
                boxShadow: "none",

                marginBottom: "20px",

                "&::before": {
                  display: "none",
                },

                "&.Mui-expanded": {
                  borderRadius: "20px",
                  backgroundColor: "#ff7700",
                  color: "#fff",

                  marginTop: "10px",
                  marginBottom: "16px",
                },
              }}
            >
              <AccordionSummary
                expandIcon={
                  <IoIosArrowDown
                    style={{
                      color: expanded === item.id ? "#fff" : "#000",
                      transition: "color 0.3s ease",
                    }}
                  />
                }
                aria-controls={`${item.id}-content`}
                id={`${item.id}-header`}
              >
                <Typography component="span">{item.title}</Typography>
              </AccordionSummary>

              <AccordionDetails>
                <Typography>{item.content}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AccodianSection;
