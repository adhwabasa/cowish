import React from "react";
import Button from "../components/Button";
import heroImg from "../assets/hero-image-grass.png";
import { PiCowBold } from "react-icons/pi";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

const Hero = () => {
  return (
    <Element className="container flex flex-col-reverse lg:flex-col justify-between gap-4 lg:pt-[85px] pt-[100px] mb-[86px]" name="home">
      <div className="font-heading flex flex-col justify-center items-center text-center lg:pt-8 lg:mt-0 mt-8">
        <Fade triggerOnce={true} duration={800}>
          <h5 className="items-center lg:inline-flex inline lg:gap-3 text-text font-semibold">
            <PiCowBold className="inline text-2xl lg:text-4xl" /> We sold up to{" "}
            <span className="italic text-primary">1000 cows</span> a month!
            <span className="lg:inline hidden lg:ml-0 ml-2 py-1 text-base bg-accent text-text px-2 rounded-full">
              Whoa!?
            </span>
          </h5>

          <h1 className="lg:max-w-[1000px] text-4xl md:text-5xl font-medium [&_span]:text-primary">
            Buy Quality <span>Cows</span>, <span>Goats</span> &{" "}
            <span>Sheep</span> – Nationwide Delivery
          </h1>

          <h6 className="font-light mt-2">
            Your reliable source for livestock with health certification and
            island-wide shipping.
          </h6>
          
          <div className="flex gap-2 mt-4 text-base">
            <Button content="Deliver Now" />
            <Button content="Learn More" outline={true} />
          </div>
        </Fade>
      </div>
      <Fade triggerOnce={true} duration={800}>
        <div className="">
          <img
            src={heroImg}
            alt=""
            className="max-w-[900px] h-fit w-full mx-auto "
          />
        </div>
      </Fade>
    </Element>
  );
};

export default Hero;
