import { useEffect, useContext } from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";

import "shepherd.js/dist/css/shepherd.css";
import "./welcome.module.scss";

const Tour = props => {
  const tour = useContext(ShepherdTourContext);
  useEffect(() => {
    const steps = {
      first: {
        id: "go-to-second",
        attachTo: {
          element: document.querySelector(".tour-documentation-first"),
          on: "top"
        },
        buttons: [
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
            async action() {
              const elem = document.querySelector(".tour-documentation-first");
              elem && elem.click();
            }
          }
        ],
        title: "You are on first page",
        text: ["Click here to get to second page"]
      },
      second: {
        id: "go-to-first",
        attachTo: {
          element: document.querySelector(".tour-documentation-second"),
          on: "left"
        },
        buttons: [
          {
            classes: "shepherd-button-primary",
            text: "Next",
            type: "next",
            async action() {
              document.querySelector(".tour-documentation-second").click();
            }
          }
        ],
        title: "You are on second page",
        text: ["Click here to get to first page"]
      }
    };
    tour.addStep(steps[props.stepId]);
    tour.show();
    return () => tour.hide();
  }, [props.stepId]);

  return null;
};

export default props => (
  <>
    <div id="tour"></div>
    <ShepherdTour
      steps={[]}
      tourOptions={{
        modalContainer: document.querySelector("#tour"),
        useModalOverlay: false
      }}
    >
      <Tour {...props} />
    </ShepherdTour>
  </>
);
