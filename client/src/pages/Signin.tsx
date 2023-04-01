import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <Header textColor="black" />
      <section className="pt-32 md:px-28 px-5 font-secondary flex flex-col items-center">
        <h1 className="text-xl">Connectez-vous</h1>
        <div className="pt-6 md:w-1/3 w-full flex flex-col">
          <label>Email*</label>
          <input
            className="border-2 border-solid border-black rounded p-1"
            type="email"
            placeholder="Email"
          />
        </div>
        <div className="pt-4 md:w-1/3 w-full flex flex-col">
          <label>Mot de passe*</label>
          <input
            className="border-2 border-solid border-black rounded p-1"
            type="password"
            placeholder="Mot de passe"
          />
        </div>
        <div className="md:w-1/3 w-full pt-4 flex justify-center">
          <button className="w-full p-2 bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white rounded">
            Connexion
          </button>
        </div>
        <p className=" pt-4 md:w-1/3 w-full ">
          Vous n'avez pas encore de compte chez nous ?{" "}
          <Link
            className="underline underline-offset-2 cursor-pointer hover:text-slate-500 h-5"
            to="/signup"
          >
            S'inscrire
          </Link>
        </p>
      </section>
    </>
  );
};

export default Signin;
