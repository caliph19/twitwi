// popupStepData.js
const popupStepData = {
  instant: {
    step1: {
      title: "What do you need help with?",
      description: "Choose a category to get started",
      showDate: false,
      showTime: false,
      showMediaUpload: false,
    },
    step2: {
      showMediaUpload: true,
      showTaskDescription: true,
      step2title:'Upload Media & Describe the Task',
      step2details:'Give us a better idea of your task by adding photos or a short video, and a brief description.',
    },
    step3: {
        instantstep3text1:'Almost there!',
        instantstep3phonenumber:'Phone Number',
        instantstep3text2:'Add your phone number so we can connect you with the right pro',
      confirmationText: "You’ve selected Instant Booking. Please confirm and proceed."
    },
  },

  schedule: {
    step1: {
      title: "What do you need help with?",
      description: "Choose a category to get started",
      showDate: false,
      showTime: false,
      showMediaUpload: false,
    },
    step2: {
      showDate: true,
      showTime: true,
      showMediaUpload: true,
      showTaskDescription: true,
    },
    step3: {
      confirmationText: "You’ve selected Schedule Booking. Please review your details."
    },
  },
};

export default popupStepData;
