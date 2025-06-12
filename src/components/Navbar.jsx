import React from "react";
import Button from "./Button";
import { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router";

const List = ({ isMobile, custom }) => {
  const type = {
    mobile: "",
    desktop: "",
  };

  const linkHover = "hover:text-secondary";
  return (
    <ul className={`${custom} gap-4 ${isMobile ? type.mobile : type.desktop}`}>
      <li className={linkHover}>
        <NavLink to="/#home" >
          Home
        </NavLink>
      </li>
      <li className={linkHover}>
        <a href="/#shipping">Shipping</a>
      </li>
      <li className={linkHover}>
        <a href="/#pricing">Pricing</a>
      </li>
      <li className={linkHover}>
        <a href="/#about">About Us</a>
      </li>
      <li className={linkHover}>
        <a href="/#testimonials">Testimonials</a>
      </li>
      <li className={linkHover}>
        <NavLink to="/livestock">Livestock</NavLink>
      </li>
      <Button content="Contact Us" outline={true} custom={"block lg:hidden"} />
    </ul>
  );
};

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const handleClick = () => {
    setMenu(!menu);
  };

  return (
    <div className="fixed w-full z-[999] top-0 left-1/2 -translate-x-1/2 bg-bg">
      <div className="container z-[900]">
        <div
          className={`border-b w-full flex items-center justify-between py-4`}
        >
          <NavLink className="font-heading text-3xl" to="/">
            Cowish
          </NavLink>
          <List custom={"lg:flex hidden"} />
          <Button
            content="Contact Us"
            outline={true}
            custom={"hidden lg:block"}
          />
          <button
            className="lg:hidden active:scale-75 transition-all duration-150"
            onClick={handleClick}
          >
            <TbMenu3 className="text-3xl" />
          </button>
        </div>
        <div
          className={`${
            menu ? "top-[70px]" : "-top-[400px]"
          } -z-50 fixed container left-1/2 -translate-x-1/2 transition-all duration-500`}
        >
          <List
            custom={
              "w-full py-4 border-b flex flex-col items-center text-center lg:hidden bg-bg bg-opacity-90 backdrop-blur"
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
