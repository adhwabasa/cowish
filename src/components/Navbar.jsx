import React from "react";
import Button from "./Button";
import { useState } from "react";
import { TbMenu3 } from "react-icons/tb";
import { NavLink } from "react-router";
import { FaCartShopping } from "react-icons/fa6";
import useCartStore from "../configs/useStore";

const List = ({ isMobile, custom }) => {
  const type = {
    mobile: "",
    desktop: "",
  };

  const linkHover = "hover:text-secondary";
  return (
    <ul className={`${custom} gap-4 ${isMobile ? type.mobile : type.desktop}`}>
      <li className={linkHover}>
        <NavLink to="/">Home</NavLink>
      </li>
      <li className={linkHover}>
        <NavLink to="/">Shipping</NavLink>
      </li>
      <li className={linkHover}>
        <NavLink to="/">Pricing</NavLink>
      </li>
      <li className={linkHover}>
        <NavLink to="/">About Us</NavLink>
      </li>
      <li className={linkHover}>
        <NavLink to="/">Testimonials</NavLink>
      </li>
      <li className={linkHover}>
        <NavLink to="/livestock">Livestock</NavLink>
      </li>
      <Button content="Contact Us" outline={true} custom={"block lg:hidden"} />
    </ul>
  );
};

const Navbar = () => {
  const { cart } = useCartStore();
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
          <div className="flex lg:flex-row-reverse lg:gap-4">
            <Button
              content="Contact Us"
              outline={true}
              custom={"hidden lg:block"}
            />
            <div className="flex gap-4">
              <NavLink
                to="/cart"
                className="w-fit relative bg-transparent py-3 text-lg border hover:text-white text-primary hover:bg-text hover:border-text hover:shadow-lg px-3 rounded-2xl transition-all duration-150 "
              >
                <FaCartShopping />
                <span
                  className={`absolute text-xs -top-2 text-text font-bold -right-2 bg-accent py-1 px-2 rounded-full ${
                    cart.length === 0 && "hidden"
                  }`}
                >
                  {cart.reduce((acc, curr) => acc + curr.qty, 0)}
                </span>
              </NavLink>
              <button
                className="lg:hidden active:scale-75 transition-all duration-150"
                onClick={handleClick}
              >
                <TbMenu3 className="text-3xl" />
              </button>
            </div>
          </div>
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
