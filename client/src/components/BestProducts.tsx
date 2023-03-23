import React from "react";
import CardItem from "./CardItem";

const BestProducts = () => {
  return (
    <section className="flex justify-center items-center flex-col pt-16 px-10">
      <h1 className="font-secondary md:text-4xl text-2xl pb-10">
        Nos best sellers
      </h1>
      <div className="md:grid md:grid-rows-2 md:grid-flow-col md:max-w-7xl md:pl-64">
        <div className=" md:row-start-1 md:row-span-2 pb-4">
          <CardItem />
        </div>
        <div className=" md:row-start-1 md:row-span-1 md:pl-8 md:w-5/12 md:pb-10 pb-4">
          <CardItem />
        </div>
        <div className=" md:row-start-2 md:row-span-1 md:pl-8 md:w-5/12 pb-4">
          <CardItem />
        </div>
      </div>
    </section>
  );
};

export default BestProducts;
