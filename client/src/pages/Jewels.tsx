import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";
import AllProductsList from "../components/AllProductsList";

const Jewels = () => {
  return (
    <>
      <Header textColor="black" />
      <section className=" pt-32 md:px-28 px-10 pb-10 flex flex-col  font-secondary">
        <h1 className="text-center md:text-4xl text-2xl pb-4">Nos bijoux</h1>
        <nav className=" font-secondary flex justify-center flex-wrap">
          <Link
            className="px-2  after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/products"
          >
            Bagues
          </Link>
          <span>-</span>
          <Link
            className="px-2  after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/products"
          >
            Boucles d'oreilles
          </Link>
          <span>-</span>
          <Link
            className="px-2  after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/products"
          >
            Colliers
          </Link>
          <span>-</span>
          <Link
            className="px-2  after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/products"
          >
            Bracelets
          </Link>
          <span>-</span>
          <Link
            className="px-2  after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/products"
          >
            Sautoirs
          </Link>
          <span>-</span>
          <Link
            className="px-2  after:content-[''] after:block after:w-0 after:h-1 after:bg-orange-300 after:transition-[width] after:delay-100 hover:after:w-full"
            to="/products"
          >
            Autres
          </Link>
        </nav>
      </section>
      <AllProductsList />
    </>
  );
};

export default Jewels;
