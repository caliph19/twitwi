import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { MdCalendarMonth } from "react-icons/md";
import { AiOutlineCloudUpload } from "react-icons/ai";
import popupStepData from "./PopupSrepData";

import { DatePicker, TimePicker } from "antd";
// import "antd/dist/reset.css";
import { CalendarOutlined, DownOutlined } from "@ant-design/icons";

const steps = ["Step 1", "Step 2", "Step 3"];

const PopupSection = ({ onClose, selectedOption }) => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleNext = () => {
     if (activeStep === steps.length - 1) {
    onClose();
  } else {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const renderStepContent = (step) => {
    const data = popupStepData[selectedOption]; // selectedOption is passed from parent

    if (!data) return null;

    switch (step) {
      case 0:
        return (
          <div className="popupstep1center">
            <div className="popupstep1head">
              <h2>{data.step1.title}</h2>
              <p>{data.step1.description}</p>
            </div>

            <div className="popupstep1detail">
              What do you need help with today?
            </div>

            <div className="popupleftbottomdiv2">
              <label className="popupbottomoption1 cursor-pointer flex items-center gap-2">
                <input
                  type="radio"
                  name="booking"
                  value="instant"
                  className="mr-2"
                  checked={selectedOption === "instant"}
                  readOnly
                />
                Instant Booking
              </label>

              <label className="popupbottomoption2 cursor-pointer flex items-center gap-2">
                <input
                  type="radio"
                  name="booking"
                  value="schedule"
                  className="mr-2"
                  checked={selectedOption === "schedule"}
                  readOnly
                />
                <p>Schedule Booking</p>
                <MdCalendarMonth className="set-calender" />
              </label>
            </div>

            <div className="popupleftbottomdiv3">
              <input type="text" placeholder="Postcode" />
            </div>
          </div>
        );

      case 1:
        return (
          <div className="popupstep2content flex flex-col gap-4">
            {selectedOption === "instant" && data.step2.step2title && (
              <div className="instantstep2heading">
                <h3>{data.step2.step2title}</h3>
                <p>{data.step2.step2details}</p>
              </div>
            )}

            {data.step2.showDate && (
              <div className="datetime-wrapper">
                <DatePicker
                  className="custom-picker"
                  placeholder="Select a date"
                  suffixIcon={<CalendarOutlined />}
                />
                <TimePicker
                  className="custom-picker"
                  placeholder="Select Time"
                  use12Hours
                  format="h:mm a"
                  suffixIcon={<DownOutlined />}
                />
              </div>
            )}


            {data.step2.showMediaUpload && (
              <div className="custom-upload">
                <div className="uploadheading">
                  <p>Show us what needs doing?</p>
                </div>
                <div className="customefileinputfield">
                  <input
                    type="file"
                    multiple
                    className="customfileinput"
                    id="file-upload"
                  />
                  <p>
                    <AiOutlineCloudUpload /> upload
                  </p>
                </div>
                <div className="uploadhint">
                  <p>Upload a photo or video</p>
                </div>
              </div>
            )}

            {data.step2.showTaskDescription && (
              <div clasName="set-productdetail">
                {/* <label className="block font-medium mb-1">Describe Task:</label> */}
                <textarea
                  placeholder="Write Description about your work..."
                  className="inputstyletextarea"
                />
              </div>
            )}
          </div>
        );

      case 2:
        return (
          <div className="popupstep3content">
            {selectedOption === "instant" && data.step3.instantstep3text1 && (
              <div className="instantstep3heading1">
                <h1>{data.step3.instantstep3text1}</h1>
                <p>{data.step3.instantstep3text2}</p>
              </div>
            )}

            {data.step3.instantstep3phonenumber && (
              <div className="instantstep3phonediv">
                <div className="instantstep3phonedivheading">
                  <h1>{data.step3.instantstep3phonenumber}</h1>
                  <p>{data.step3.instantstep3text2}</p>
                  <PhoneInput
                    country={"us"}
                    value={phoneNumber}
                    onChange={setPhoneNumber}
                    inputStyle={{
                      width: "100%",
                      height: "40px",
                    }}
                  />
                </div>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="popupsection-overlay">
      <div className="popupsection">
        <Box sx={{ width: "100%" }}>
          <Stepper
            activeStep={activeStep}
            sx={{
              "& .MuiStepIcon-root text": {
                display: "none",
              },

              "& .MuiStepIcon-root": {
                width: 20,
                height: 20,
                fontSize: "14px",
                color: "#cfd8dc",
              },
              "& .MuiStepIcon-root.Mui-active": {
                color: "rgb(255,119,0)",
              },
              "& .MuiStepIcon-root.Mui-completed": {
                color: "rgb(255,119,0)",
              },

              "& .MuiStep-root": {
                paddingLeft: "3px !important",
                paddingRight: "3px !important",
              },

              "& .MuiStepLabel-label": {
                display: "none",
              },
              "& .MuiStepConnector-line": {
                borderTopWidth: "1px",
                borderColor: "#ccc",
              },
            }}
          >
            {steps.map((_, index) => (
              <Step key={index}>
                <StepLabel>
                  {/* Hide label visually */}
                  <span style={{ display: "none" }}>{steps[index]}</span>
                </StepLabel>
              </Step>
            ))}
          </Stepper>

          {activeStep === steps.length ? (
            <Typography sx={{ mt: 2, mb: 1 }}>
              ✅ All steps completed – you're finished!
            </Typography>
          ) : (
            <>
              <Box sx={{ mt: 3 }}>{renderStepContent(activeStep)}</Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  flexDirection: "row",
                  pt: 4,
                }}
              >
                <button className="popupclose-btn" onClick={onClose}>
                  Cancel
                </button>
                <Button
                  onClick={handleNext}
                  variant="contained"
                  className="custom-next-button"
                >
                  {activeStep === steps.length - 1
                    ? "  Find Professional"
                    : "Save and continue →"}
                </Button>
              </Box>
            </>
          )}
        </Box>
      </div>
    </div>
  );
};

export default PopupSection;
