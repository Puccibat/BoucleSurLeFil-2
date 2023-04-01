import React from "react";
import CardItem from "./CardItem";

const BestProducts = () => {
  return (
    <section className="flex justify-center items-center flex-col pt-16 px-10 md:px-0">
      <h1 className="font-secondary md:text-4xl text-2xl pb-10">
        Nos best sellers
      </h1>
      <div className="flex flex-col md:flex-row justify-center">
        <div className="md:w-1/2 pb-4 md:pb-0">
          <CardItem />
        </div>
        <div className="md:w-1/4 md:pl-4">
          <CardItem />
          <CardItem />
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
