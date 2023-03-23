import { useState, useEffect } from "react";
import Header from "../components/Header";
import BestProducts from "../components/BestProducts";
import OurSelection from "../components/OurSelection";
import AllProductsList from "../components/AllProductsList";

const Home = () => {
  return (
    <>
      <Header textColor="white" />
      <section className="bg-[url('src/assets/img/herobanner.png')] bg-no-repeat bg-cover  md:h-[70vh] h-[50vh] flex justify-center items-center w-screen">
        <h1 className="md:text-7xl xl:text-9xl text-4xl text-white font-primary">
          BoucleSurLeFil
        </h1>
      </section>
      <OurSelection />
      <BestProducts />
      <section className="flex justify-center items-center flex-col pt-16">
        <h1 className="font-secondary md:text-4xl text-2xl pb-10">
          Tous nos produits
        </h1>
        <AllProductsList />
      </section>
    </>
  );
};

export default Home;
