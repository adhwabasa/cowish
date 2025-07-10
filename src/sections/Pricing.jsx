import React from "react";
import PricingCard from "../components/PricingCard";
import livestockData from "../assets/fetch";
import { NavLink } from "react-router";
import { useEffect } from "react";
import { Fade } from "react-awesome-reveal";
import { Element } from "react-scroll";

const Pricing = () => {
  const randomLimit = Math.round(Math.random() * livestockData.length);
  const start = randomLimit <= 4 ? 0 : randomLimit - 4;
  const newLiveStock = livestockData.slice(start, randomLimit <= 4 ? 4 : randomLimit );

  return (
    <Element className="container mb-[86px]" id="pricing">
      <div className="flex items-center mb-8 pb-2 border-b justify-between">
        <h3 className="font-heading font-semibold">Pricing List</h3>
        <NavLink to="/livestock">View More</NavLink>
      </div>

      <div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
        <Fade cascade={true} direction="up" damping={0.2} triggerOnce={true}>
        {newLiveStock.map((data) => (
          <PricingCard
            id={data.id}
            weight={data.weight}
            name={data.name}
            loc={data.loc}
            price={data.price}
            img={data.imgs}
            data={data}
          />
        ))}
        </Fade>
      </div>
    </Element>
  );
};

export default Pricing;
