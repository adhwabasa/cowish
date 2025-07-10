import { useEffect } from "react";

const Courier = ({ id, name, cost, etd, weight, desc, formik, costId }) => {
  const priceList = formik.values.price;
  const newCostId = formik.values.price[costId];
  useEffect(() => {
    console.log(priceList);
  }, [formik.values.price]);

  const handleSelect = (e) => {
    const alreadyExists = priceList.some((item) => item.id === id);
    if (!alreadyExists) {
      formik.setFieldValue("price", [
        { id: id, cost: cost, costId: costId },
        ...priceList,
      ]);
    } else if (alreadyExists) {
      formik.setFieldValue(
        "price",
        priceList.map((data) =>
          data.id === id ? { ...data, cost: cost } : data
        )
      );
    }
  };

  return (
    <div
      className={`flex gap-2 py-1`}
      onClick={handleSelect}
    >
      <div htmlFor={costId}>
        <div className="flex flex-col">
          <span>
            {name} - {desc}
          </span>
          <span className="text-sm opacity-50 font-semibold">
            {cost} | {etd} | {weight} kg
          </span>
        </div>
      </div>
    </div>
  );
};

export default Courier;
