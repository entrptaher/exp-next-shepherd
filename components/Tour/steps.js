export default {
  first: function() {
    const element = document.querySelector(".tour-documentation-first");
    return {
      id: "go-to-second",
      attachTo: {
        element,
        on: "top"
      },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
          async action() {
            element && element.click();
          }
        }
      ],
      title: "You are on first page",
      text: ["Click here to get to second page"]
    };
  },
  second: function() {
    const element = document.querySelector(".tour-documentation-second");
    return {
      id: "go-to-first",
      attachTo: {
        element,
        on: "left"
      },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
          async action() {
            element && element.click();
          }
        }
      ],
      title: "You are on second page",
      text: ["Click here to get to first page"]
    };
  },
  "second-one": function() {
    const element = document.querySelector(".tour-documentation-second-one");
    return {
      id: "tour-documentation-second-one",
      attachTo: {
        element,
        on: "left"
      },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
          action() {
            this.next();
          }
        }
      ],
      title: "This is the second one",
      text: ["Click here to get to first page"]
    };
  },
  "second-two": function() {
    const element = document.querySelector(".tour-documentation-second-two");
    return {
      id: "tour-documentation-second-two",
      attachTo: {
        element,
        on: "right"
      },
      buttons: [
        {
          classes: "shepherd-button-primary",
          text: "Next",
          type: "next",
          action() {
            this.next();
          }
        }
      ],
      title: "This is the second two",
      text: ["Click here to get to first page"]
    };
  }
};
