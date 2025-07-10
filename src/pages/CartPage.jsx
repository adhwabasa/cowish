import React from "react";
import Navbar from "../components/Navbar";
import { useEffect, useState } from "react";
import CartList from "../components/CartList";
import useCartStore from "../configs/useStore";
import { FaLocationDot } from "react-icons/fa6";
import Courier from "../components/Courier";
import axios from "axios";
import { useFormik } from "formik";
import * as yup from "yup";
import Swal from "sweetalert2";
import formatRupiah from "../configs/convertRupiah";

const CartPage = () => {
  const handleError = (text, icon = "error") => {
    Swal.fire({
      position: "bottom-end",
      timer: 2000,
      text: text,
      toast: true,
      timerProgressBar: true,
      showConfirmButton: false,
      icon: icon,
    });
  };
  const [couriers, setCouriers] = useState([]);
  const [destinations, setDestinations] = useState([]);
  const [zipcode, setZipcode] = useState(0);

  useEffect(() => {
    if (zipcode) {
      for (let item of cart) {
        handleCourier(item.weight * 1000 * item.qty, item.zipcode, zipcode);
      }
    }
  }, [zipcode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (cart.length === 0) {
      Swal.fire({
        icon: "info",
        title: "Please fill the cart first",
        animation: true,
        confirmButtonColor: "#156f44",
        customClass: "swal",
        iconColor: "#156f44",
      });
      return;
    }
    if (e.key === "Enter") {
      handleDestination(formik.values.zipcode);
      return;
    }
    handleDestination(formik.values.zipcode);
  };

  const handleDestination = async (keyword) => {
    try {
      const res = await axios.get("http://localhost:3000/rajaongkir/location", {
        params: {
          search: keyword,
        },
      });
      setDestinations((prev) => [...prev, res.data.data]);
      setZipcode(res.data.data[0].zip_code);
    } catch (error) {
      if (error.response.status === 429) {
        handleError("Server has reached request limit, try again later");
        return;
      }
      handleError(error.message);
      console.log({ err: error });
    }
  };

  const handleCourier = async (weight, origin, destination) => {
    try {
      const res = await axios.get("http://localhost:3000/rajaongkir/check", {
        params: {
          weight: weight,
          origin: origin,
          destination: destination,
        },
      });
      setCouriers((value) => [...value, res.data.data]);
    } catch (error) {
      handleError(error.message);
      console.log({ err: error });
    }
  };

  const formikCourier = useFormik({
    initialValues: {
      price: [],
    },
  });

  const formik = useFormik({
    initialValues: {
      zipcode: 0,
    },
    validationSchema: yup.object().shape({
      zipcode: yup.number().min(5).max(5).required(),
    }),
    onSubmit: handleSubmit,
  });

  const { cart } = useCartStore();
  return (
    <div className="pt-[100px] h-screen">
      <Navbar />
      <div className="container h-full">
        <div className="lg:grid grid-cols-12 grid-rows-1 gap-4 h-full">
          <div className="col-span-8 flex flex-col gap-2 lg:h-full lg:overflow-y-scroll pr-2 lg:pb-0 pb-8">
            {cart.map((data) => (
              <CartList
                id={data.id}
                key={data.id}
                img={data.imgs[0]}
                name={data.name}
                price={data.price}
                loc={data.loc}
                qty={data.qty}
                data={data}
              />
            ))}
            {cart.length === 0 && "The cart is empty"}
          </div>
          <div className="col-span-4 col-start-9 lg:overflow-y-scroll h-full border py-2 px-4 rounded-2xl sticky">
            <h4 className="text-center font-heading">Shipping Form</h4>
            <div className="py-1 border-t mt-2">
              <h6 className="font-bold font-heading">Location</h6>
              <div className="flex-col flex">
                {cart.map((data) => (
                  <span className="flex items-center gap-1">
                    <FaLocationDot className="text-primary" />
                    {data.loc}
                  </span>
                ))}
              </div>
            </div>

            <div className="py-1 border-t mt-2">
              <h6 className="font-bold font-heading">Destination</h6>
              <form onSubmit={handleSubmit} className="flex flex-col">
                <input
                  type="number"
                  className="p-2 rounded-2xl border-accent border"
                  name="zipcode"
                  onChange={(e) => {
                    formik.setFieldValue(e.target.name, e.target.value);
                  }}
                />
                <label className="text-red-600">
                  {formik.values.zipcode.length !== 5 &&
                    `*${formik.errors.zipcode}`}
                </label>
                <input
                  type="submit"
                  value="Check"
                  className="text-white bg-primary hover:shadow-lg px-3 py-1 rounded-2xl transition-all duration-150 text-base font-heading mt-2"
                />
              </form>
              <div className="mt-2 flex-col flex gap-1">
                {destinations !== undefined &&
                  destinations.map((data) => (
                    <span>
                      <b>Full Address:</b> {data.label}
                    </span>
                  ))}
              </div>

              <div className="py-1 border-t mt-2">
                <h6 className="font-bold font-heading">Courier</h6>
                <form>
                  {cart.map((data, index) => (
                    <div>
                      <span>
                        {data.name} ({data.weight} kg)
                      </span>
                      {couriers[index] !== undefined &&
                        couriers[index].map(
                          ({ name, cost, etd, description }, i) => (
                            <Courier
                              name={name}
                              cost={formatRupiah(cost)}
                              weight={data.weight * data.qty}
                              etd={(etd || "unknown") + " etd"}
                              desc={description}
                              id={index}
                              costId={i}
                              formik={formikCourier}
                            />
                          )
                        )}
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
