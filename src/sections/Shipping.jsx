import React from "react";
import shippingImg from "../assets/shipping.png";
import { MdOutlinePayment } from "react-icons/md";
import { MdHealthAndSafety } from "react-icons/md";
import { LuPackage } from "react-icons/lu";
import { FaShippingFast } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

const List = ({ title, desc, icon }) => {
  return (
    <div className="flex items-center gap-4 border-b pb-4">
      <div className="text-5xl text-primary">{icon}</div>
      <div>
        <h6 className="font-black">{title}</h6>
        <span className="text-base">{desc}</span>
      </div>
    </div>
  );
};

const Shipping = () => {
  return (
    <div className="container flex flex-col xl:grid grid-cols-12 grid-rows-1 mb-[86px] gap-20" id="shipping">
      <div className="col-span-5 flex">
        <Fade direction="left" triggerOnce={true}>
          <img src={shippingImg} alt="" className="my-auto mx-auto" />
        </Fade>
      </div>

      <div className="col-span-7 col-start-6">
        <div className="flex flex-col gap-4 justify-center h-full">
          <Fade direction="up" triggerOnce={true}>
            <h3 className="font-heading font-semibold mb-4">
              How the{" "}
              <span className="text-primary underline italic">shipping</span>{" "}
              works?
            </h3>
          </Fade>
          <Fade
            direction="right"
            cascade={true}
            triggerOnce={true}
          >
            <List
              title={"Payment Confirmed"}
              desc={"Your order has been successfully paid."}
              icon={<MdOutlinePayment />}
            />

            <List
              title={"Health Check"}
              desc={
                "Our team inspects and ensures your livestock is healthy and ready to travel."
              }
              icon={<MdHealthAndSafety />}
            />
            <List
              title={"Packing & Preparation"}
              desc={
                "The animal is prepared with proper care and travel-safe materials."
              }
              icon={<LuPackage />}
            />
            <List
              title={"Shipping Begins"}
              desc={
                "Your livestock is sent via trusted delivery partners to your destination."
              }
              icon={<FaShippingFast />}
            />
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
