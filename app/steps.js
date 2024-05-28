export const Steps = [
    {
      id: "introduction",
      attachTo: { element: "#navIcon", on: "bottom" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-1", // Added mr-2 for margin-right
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-1", // Used btn-sm for smaller buttons
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
      title:
        "<span class='text-lg font-bold'>Welcome to Your Personalized Health Tracker 👋</span>", // Added classes for larger, bold title
      text: [
        "<p> A health tracker is a tool or application that helps individuals monitor and manage their health-related data. Health trackers often provide visualizations and insights based on the collected data, allowing users to track their progress, set goals, and make informed decisions about their health and well-being </p>",
      ],
    },
    {
      id: "PersonalInfo",
      attachTo: { element: "#PersonalInfo", on: "bottom" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-2 ",
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-2", 
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
      title: "<span class='text-lg font-bold'>Personal Information </span>", // Added classes for larger, bold title
      text: [
        "<p>Use the Personal Info block to see your <b> Age , Weight , Height  </b></p>",
      ],
    },
    {
      id: "Blocks",
      attachTo: { element: "#analyticsBlocks", on: "right" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-2", // Added mr-2 for margin-right
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-2", // Used btn-sm for smaller buttons
          text: "Next",
          action() {
            return this.next();
          },
        },
      ],
      title: "<span class='text-lg font-bold'>Analytics Block </span>", // Added classes for larger, bold title
      text: [
        "<p>Get to know your BMI , BMR , Ideal Body Weight , Body Fat Percentage here and see if you are healthy , lean or obese </p>",
      ],
    },
    {
      id: "BmrBlock",
      attachTo: { element: "#gall", on: "left" },
      buttons: [
        {
          classes: "btn btn-error btn-sm mr-2 mt-2", // Added mr-2 for margin-right
          text: "Exit",
          action() {
            return this.cancel();
          },
        },
        {
          classes: "btn btn-success btn-sm mt-2", 
          text: "Start Journey",
          action() {
            return this.complete();
          },
        },
      ],
      title: "<span class='text-lg font-bold'>Wishing You a happy Journey</span>",
      text: [
        "<p>Remember, fitness is not a destination, it's a journey. Embrace the process, stay consistent, and enjoy the progress!</p>",
      ],
    },
  ];
