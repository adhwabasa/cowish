import React from "react";
import img from "../assets/certificate.jpg";

const Certificate = ({text}) => {
  return (
    <div className="w-full h-fit relative">
      <span className="lg:text-3xl md:text-xl sm:text-lg absolute left-1/2 -translate-x-1/2 text-center w-full bottom-[56%] font-heading nodisturb text-[#125a4f]">{text}</span>
      <img src={img} alt="" className="w-full rounded-3xl" />
    </div>
  );
};

export default Certificate;
