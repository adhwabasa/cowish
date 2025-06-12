import React from "react";
import { FaStar } from "react-icons/fa";
import { FaUserCheck } from "react-icons/fa";

const Satisfied = () => {
  return (
    <div className="italic inline-flex items-center gap-1 absolute right-4 -top-4  bg-primary px-2 text-bg font-bold rounded-lg">
      <FaUserCheck />
      <span>Client is Satisfied!</span>
    </div>
  );
};

const TestiCard = ({ stars = 3, desc = "lorem ipsum", name = "Rizky" }) => {
  const defStars = [<FaStar />, <FaStar />, <FaStar />, <FaStar />, <FaStar />];
  const rating = defStars.slice(0, stars);
  return (
    <div className="flex flex-col justify-between p-4 border rounded-3xl relative">
      <div className="mb-2">
        <div className="flex text-yellow-400 gap-1 mb-1">
          {rating.map((data, i) => (
            <div key={i}>{data}</div>
          ))}
        </div>

        <p>{desc}</p>
      </div>

      <span className="font-bold">{name}</span>
      {stars > 3 && <Satisfied />}
    </div>
  );
};

export default TestiCard;
