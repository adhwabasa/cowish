import { useEffect } from "react";
import Navbar from "../components/Navbar";
import livestockData from "../assets/fetch";
import { useParams } from "react-router";
import img from "../assets/cows.jpg";
import Label from "../components/Label";
import formatRupiah from "../configs/convertRupiah";
import Button from "../components/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../index.css";
import { useSwiper } from "swiper/react";
import SwiperNavs from "../components/SwiperNavs";
import Swal from "sweetalert2";

const ProductPage = () => {
  const handleDeliver = () => {
    Swal.fire({
      icon: "question",
      input: "text",
      title: `Total price is ${formatRupiah(data.price)}`,
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
  const swiper = useSwiper();
  useEffect(() => {
    console.log(data);
  });
  const params = useParams();
  const data = livestockData.find((data) => data.id === parseInt(params.id));
  return (
    <div>
      <Navbar />
      <div className="pt-[100px] container pb-32">
        <div className="h-96 flex w-full ">
          <Swiper
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              612: {
                slidesPerView: 2,
              },
              1280: {
                slidesPerView: 3,
              },
            }}
            style={{
              "--swiper-pagination-color": "#9ad1e5",
              "--swiper-pagination-bullet-inactive-color": "#FFFFFF",
            }}
            spaceBetween={16}
            modules={[Pagination]}
            pagination={{ clickable: true }}
            className="relative overflow-visible z-[-999]" >
            {data.imgs.map((img) => (
              <SwiperSlide className="w-fit">
                <img
                  src={img}
                  alt=""
                  className="w-full rounded-3xl h-full object-cover object-center"
                />
              </SwiperSlide>
            ))}
            <SwiperNavs />
          </Swiper>
        </div>
        <div className="max-w-[800px] mx-auto">
          <h3 className="font-heading mt-4 inline-flex items-center">
            {data.name}{" "}
            <span className="text-base font-content ml-2">
              {" "}
              - {data.nickname} ({data.gender})
            </span>
          </h3>
          <h4>{formatRupiah(data.price)}</h4>
          <p className="mb-8">{data.description}</p>
          <div className="mx-auto flex flex-col mb-8">
            <h4 className="text-center font-heading">Description</h4>
            <Label title="Location" text={data.loc} />
            <Label title="Shipping To" text={data.shipping} />
            <Label title="Condition" text={data.condition} />
            <Label title="Certification" text={data.certification} />
            <Label title="Weight" text={`${data.weight} kg`} />
          </div>
          <p className="p-4 bg-red-600 text-bg rounded-3xl">
            Caution!!, To truly understand the condition of our livestock, we
            recommend seeing them in person. Online listings are helpful, but
            nothing beats a real-life visit.
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 lg:flex-row lg:gap-32 bg-bg container left-1/2 flex flex-col gap-2 -translate-x-1/2 py-2 border-t">
        <div className="flex lg:flex-col lg:gap-0 gap-2">
          <span className="font-semibold">Price :</span>
          <span>{formatRupiah(data.price)}</span>
        </div>

        <Button content="Deliver Now!" custom="w-full py-3 text-lg" event={handleDeliver} />
      </div>
    </div>
  );
};

export default ProductPage;
