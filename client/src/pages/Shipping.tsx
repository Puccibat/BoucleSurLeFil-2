import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Shipping = () => {
  return (
    <>
      <Header textColor={"black"} />
      <section className="pt-32 md:px-28 px-5 font-secondary flex flex-col items-center">
        <h1 className="text-xl">Vos informations de livraisons</h1>
        <div className="pt-6 md:w-1/3 w-full flex flex-col">
          <label>Email*</label>
          <input
            className="border-2 border-solid border-black rounded p-1"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="pt-4 md:w-1/3 w-full flex flex-col">
          <label>Confirmez votre email*</label>
          <input
            className="border-2 border-solid border-black rounded p-1"
            type="email"
            placeholder="Confirmez votre email"
          />
        </div>
        <div className="pt-4 md:w-1/3 w-full flex md:flex-nowrap flex-wrap gap-2">
          <div className="w-full">
            <label>Nom*</label>
            <input
              className="border-2 border-solid border-black rounded p-1 w-full"
              type="text"
              placeholder="Nom"
            />
          </div>
          <div className="w-full">
            <label>Prénom*</label>
            <input
              className="border-2 border-solid border-black rounded p-1 w-full"
              type="text"
              placeholder="Prénom"
            />
          </div>
        </div>
        <div className="pt-4 md:w-1/3 w-full flex flex-col">
          <label>Adresse*</label>
          <input
            className="border-2 border-solid border-black rounded p-1"
            type="text"
            placeholder="Adresse"
          />
        </div>
        <div className="pt-4 md:w-1/3 w-full flex flex-col">
          <label>Code Postal*</label>
          <input
            className="border-2 border-solid border-black rounded p-1"
            type="text"
            placeholder="Code postal"
          />
        </div>
        <div className="pt-4 md:w-1/3 w-full flex flex-col">
          <label>Ville*</label>
          <input
            className="border-2 border-solid border-black rounded p-1"
            type="text"
            placeholder="Ville"
          />
        </div>
        <div className="pt-6 md:w-1/3 w-full">
          <Link to="/checkout/payment">
            <button className=" w-full bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white p-3 rounded">
              Paiement
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Shipping;
