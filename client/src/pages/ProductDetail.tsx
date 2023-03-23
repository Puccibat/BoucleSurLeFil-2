import React, { useEffect } from "react";
import Header from "../components/Header";
import ring from "../assets/img/ring1.jpg";
import OurSelection from "../components/OurSelection";

const ProductDetail = () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });

  return (
    <>
      <Header textColor="black" />
      <section className=" pt-32 md:px-28 px-10 pb-10 grid md:grid-cols-2 grid-cols-1 gap-10 font-secondary">
        <div>
          <img src={ring} className="rounded" />
        </div>
        <div className="flex flex-col justify-between">
          <div className="py-2 md:py-0">
            <h1 className="text-5xl ">Bague</h1>
            <h2 className="text-3xl text-orange-300 pt-4">prix: 90€</h2>
          </div>
          <div className="py-2">
            <h2 className="text-2xl">Description</h2>
            <p className="md:w-3/4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              debitis voluptatem qui saepe aperiam nobis velit numquam, officia
              error modi dolorum soluta tenetur nam, iste perspiciatis non ullam
              provident itaque!
            </p>
          </div>
          <div className="py-2 md:py-0">
            <button className="bg-orange-300 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-200 transform active:scale-90 transition-transform text-white p-3 rounded">
              Ajouter au panier
            </button>
          </div>
        </div>
      </section>
      <OurSelection />
    </>
  );
};

export default ProductDetail;
