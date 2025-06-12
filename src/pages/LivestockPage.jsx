import React from "react";
import Navbar from "../components/Navbar";
import livestockData from "../assets/fetch";
import PricingCard from "../components/PricingCard";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";

const LivestockPage = () => {
  const [data, setData] = useState([]);
  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setData(
      livestockData.filter((item) =>
        item.name.toLowerCase().includes(keyword.toLowerCase())
      )
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    setData(livestockData);
  }, []);
  return (
    <div>
      <Navbar />
      <div className="container pt-[100px]">
        <div className="mb-8">
          <form
            className="flex md:flex-row flex-col gap-2 items-center"
            onSubmit={handleSearch}
          >
            <div className="flex gap-2">
              <input
                type="text"
                className="p-2 rounded-2xl border-accent border"
                id="search"
                onChange={(e) => {
                  setKeyword(e.target.value);
                }}
              />
              <input
                type="submit"
                value="Search"
                className="text-white bg-primary hover:shadow-lg  p-2 rounded-2xl transition-all duration-150 text-base font-heading"
              />
            </div>

            {keyword.length > 0 && (
              <span>
                Search results for "{keyword}" – {data.length} livestock found
              </span>
            )}
          </form>
        </div>
        <div className="grid xl:grid-cols-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-4">
          {data.map(({ weight, name, id, loc, price, imgs }) => (
            <PricingCard
              id={id}
              weight={weight}
              name={name}
              loc={loc}
              price={price}
              img={imgs}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LivestockPage;
