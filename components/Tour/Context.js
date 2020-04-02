import { useEffect, useContext } from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";
import './style.css';

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
          on: "top"
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
  <ShepherdTour steps={[]}>
    <Tour {...props} />
  </ShepherdTour>
);
