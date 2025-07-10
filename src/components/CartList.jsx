import React from "react";
import test from "../assets/1.jpg";
import { FaLocationDot } from "react-icons/fa6";
import { FaTrashAlt } from "react-icons/fa";
import formatRupiah from "../configs/convertRupiah";
import { Link } from "react-router";
import useCartStore from "../configs/useStore";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const CartList = ({ id, img, name, price, qty = 1, loc, data }) => {
  const {removeCart, addQty, decQty} = useCartStore()
  return (
    <div className="h-32 w-full pl-2 justify-between border rounded-2xl flex">
      <div className="flex gap-2 w-full">
        <div className="h-full w-28 py-2">
          <img
            src={img}
            alt=""
            className="object-cover h-full w-full rounded-2xl"
          />
        </div>
        <div className="flex-col flex justify-center">
          <Link
            to={`/livestock/${id}`}
            className="font-heading text-lg hover:underline"
          >
            {name}
          </Link>
          <span className="inline-flex flex-wrap items-center">{formatRupiah(qty * price)}<span className="ml-1 text-sm opacity-50">({formatRupiah(price)})</span></span>
            <div className="flex">
              <div className="px-2 bg-slate-100 hover:bg-accent transition-all rounded-lg cursor-pointer flex items-center text-xs" onClick={() => decQty(data)}><FaMinus /></div>
              <div className="px-2">{qty}</div>{" "}
              <div className="px-2 bg-slate-100 hover:bg-accent transition-all rounded-lg cursor-pointer flex items-center text-xs" onClick={() => addQty(data)}><FaPlus /></div>
            </div>
          <span className="flex items-center gap-1">
            <FaLocationDot className="text-primary" />
            {loc}
          </span>
        </div>
      </div>

      <div
        onClick={() => removeCart(data)}
        className="hover:text-bg px-2 bg-slate-200 border-l text-primary transition-all cursor-pointer hover:bg-red-600 flex items-center rounded-r-2xl"
      >
        <FaTrashAlt />
      </div>
    </div>
  );
};

export default CartList;
