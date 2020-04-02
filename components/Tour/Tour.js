import { useEffect, useContext } from "react";
import { ShepherdTour, ShepherdTourContext } from "react-shepherd";

import "shepherd.js/dist/css/shepherd.css";
import "./style.scss";
import steps from './steps';

const Tour = props => {
  const tour = useContext(ShepherdTourContext);
  useEffect(() => {
    if(props.stepIds){
      for(const stepId of props.stepIds){
        if(steps[stepId]) tour.addStep(steps[stepId]());
      }
    }else{
      tour.addStep(steps[props.stepId]());
    }
    tour.show();
    return () => tour.hide();
  }, [props.stepId, props.stepIds]);

  return null;
};

export default props => (
  <>
    <ShepherdTour
      steps={[]}
    >
      <Tour {...props} />
    </ShepherdTour>
  </>
);
