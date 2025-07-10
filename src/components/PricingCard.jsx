import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { NavLink } from "react-router";
import { FaCartArrowDown } from "react-icons/fa6";
import formatRupiah from "../configs/convertRupiah";
import Swal from "sweetalert2";
import useCartStore from "../configs/useStore";

const PricingCard = ({
  img = imgTest,
  price = 1000000,
  loc = "Bekasi, West Java",
  name = "Cow",
  weight = 10,
  id,
  data,
}) => {
  const handleDeliver = () => {
    Swal.fire({
      icon: "question",
      input: "text",
      title: `Total price is ${formatRupiah(price)}`,
      animation: true,
      inputLabel: "Shipping Adress",
      text: "Note: This is just a concept. The system is not actually working.",
      confirmButtonColor: "#156f44",
      customClass: "swal",
      showCancelButton: true,
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: "success",
          title: "Your transaction has completed.",
          animation: true,
          text: "Note: This is just a concept. The transaction was not actually real.",
          confirmButtonColor: "#156f44",
          customClass: "swal",
        });
      }
    });
  };

  const {addToCart} = useCartStore()
  return (
    <div className="h-[270px] relative" key={id}>
      <NavLink to={`/livestock/${id}`}>
        <img
          src={img[0]}
          alt=""
          className="object-cover object-center w-full h-full rounded-3xl"
        />
      </NavLink>

      <div className="flex justify-between items-center absolute bottom-0 gradient-bg rounded-b-3xl px-4 py-4 w-full">
        <div className="flex flex-col text-bg font-medium">
          <h5 className="font-black drop-shadow-2xl inline-flex items-center">
            {name}{" "}
            <span className="bg-accent text-text text-base px-2 ml-2 rounded-full py-[1px]">
              {weight} kg
            </span>
          </h5>
          <span className="text-lg">{formatRupiah(price)}</span>
          <span className="inline-flex items-center gap-1 font-light">
            <FaLocationDot /> {loc}
          </span>
        </div>
        <button className="text-primary bg-bg text-3xl p-3 rounded-2xl hover:mb-2 transition-all" onClick={() => addToCart(data)}>
          <FaCartArrowDown />
        </button>
      </div>
    </div>
  );
};

export default PricingCard;
