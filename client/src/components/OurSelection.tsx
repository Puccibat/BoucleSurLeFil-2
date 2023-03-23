import React from "react";
import CardItem from "../components/CardItem";

const OurSelection = () => {
  return (
    <section className="flex justify-center items-center flex-col pt-32">
      <h1 className="font-secondary md:text-4xl text-2xl pb-10">
        Notre sélection
      </h1>
      <div className="flex flex-col md:flex-row gap-4 py-4 md:px-28 px-10">
        <CardItem />
        <CardItem />
        <CardItem />
      </div>
    </section>
  );
};

export default OurSelection;
