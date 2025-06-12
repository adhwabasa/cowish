import React from "react";
import { useSwiper } from "swiper/react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";

const SwiperNavs = () => {
  const swiper = useSwiper();
  return (
    <div className="flex justify-between mt-4 absolute z-10 text-2xl w-full top-1/2 px-2 -translate-y-1/2 ">
      <button
        onClick={() => swiper.slidePrev()}
        className="bg-bg p-1 rounded-full hover:bg-gray-300"
      >
        <MdNavigateBefore />
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="bg-bg p-1 rounded-full hover:bg-gray-300"
      >
        <MdNavigateNext />
      </button>
    </div>
  );
};

export default SwiperNavs;
