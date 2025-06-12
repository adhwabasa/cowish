import React from "react";
import teamMobile from "../assets/team-mobile.png";
import teamDesktop from "../assets/team-desktop.png";
import barnImg from "../assets/barn.jpg"
import cowImg from "../assets/about.jpg"
import cowsImg from "../assets/cows.jpg"

const Team = () => {
  return (
    <div className="container mb-[86px]">
      <div>
        <img src={teamDesktop} alt="" className="hidden lg:block" />
        <img src={teamMobile} alt="" className="lg:hidden mx-auto" />
      </div>
      <h3 className="mt-8 text-center font-heading font-semibold" id="about">About Us</h3>
      <div className="max-w-[800px] mx-auto mt-4 flex flex-col gap-2">
        <p className="border-b pb-2">
          We are a passionate team of Indonesian farmers dedicated to
          sustainable and community-based farming. Led by{" "}
          <b>Pak Slamet Wiryawan</b>, our senior farmer with decades of hands-on
          experience, we combine traditional wisdom with modern practices to
          care for our land and animals.
        </p>
        <div className="border-b pb-2">
          <h6 className="text-primary font-bold">Farm Operations Manager</h6>
          <b>Dedi Saputra</b> ensures the farm runs like clockwork.
        </div>
        <div className="border-b pb-2">
          <h6 className="text-primary font-bold">Animal Care Specialist</h6>
          <b>Siti Marlina</b> lovingly tends to every animal with expert care.
          On the frontlines of education and outreach,
        </div>
        <div>
          <h6 className="text-primary font-bold">Marketing Lead</h6>
          <b>Rani Oktaviani</b> shares our journey with the world through
          stories, videos, and farm visits. Together, we believe that farming
          isn’t just a job—it’s a way of life, and we’re proud to grow with
          heart, honesty, and harmony with nature.
        </div>
      </div>

      <div className="grid grid-cols-12 grid-rows-2 gap-4 max-w-[900px] mx-auto mt-8">
        <div className="col-span-6"><img src={barnImg} alt="" className="rounded-3xl object-cover object-center w-full h-full"/></div>
        <div className="col-span-6 row-span-2 col-start-7"><img src={cowImg} alt="" className="rounded-3xl object-cover object-center w-full h-full"/></div>
        <div className="col-span-6 row-start-2"><img src={cowsImg} alt="" className="rounded-3xl object-cover object-center w-full h-full"/></div>
      </div>
    </div>
  );
};

export default Team;
