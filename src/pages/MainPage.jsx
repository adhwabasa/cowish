import React from "react";
import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Hero from "../sections/Hero";
import Shipping from "../sections/Shipping";
import Map from "../sections/Map";
import Pricing from "../sections/Pricing";
import Team from "../sections/Team";
import Testimonials from "../sections/Testimonials";
import { FaWhatsapp } from "react-icons/fa6";
import Contact from "../sections/Contact";
import Footer from "../components/Footer";

const MainPage = () => {

  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Shipping />
      <Map />
      <Pricing />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
      <a className="hover:rotate-12 fixed bottom-4 right-4 text-5xl text-bg bg-primary p-2 rounded-full">
        <FaWhatsapp />
      </a>
    </div>
  );
};

export default MainPage;
