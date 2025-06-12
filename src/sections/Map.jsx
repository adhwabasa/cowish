import React from "react";
import map from "../assets/map.png";
import { Fade } from "react-awesome-reveal";

const Map = () => {
  return (
    <div className="container flex flex-col items-center gap-8 uppercase mb-[86px]">
      <Fade cascade={true} triggerOnce={true}>
        <h3 className="font-heading font-semibold text-center">
          Across <span className="text-primary">Indonesia</span>
        </h3>
        <img src={map} alt="" className="lg:max-w-[1000px] w-full" />
      </Fade>
    </div>
  );
};

export default Map;
