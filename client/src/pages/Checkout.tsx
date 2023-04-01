import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <>
      <Header textColor={"black"} />
      <section className="pt-32 md:px-28 px-5 font-secondary flex flex-col items-center">
        <h1 className="text-xl text-center">
          Connectez-vous ou continuez en tant qu'invité pour finaliser la
          commande
        </h1>
        <div className="divide-x grid grid-cols-2 pt-10">
          <div className=" flex md:justify-center items-center">
            <p className="underline underline-offset-2 cursor-pointer hover:text-slate-500 h-5">
              <Link to="/checkout/shipping">Continuer en tant qu'invité</Link>
            </p>
          </div>
          <div className="px-2">
            <h3>Se connecter:</h3>
            <div className="flex flex-wrap gap-4 pt-2">
              <input
                className="border-2 border-solid border-black rounded p-1"
                type="email"
                placeholder="Email"
              />
              <input
                className="border-2 border-solid border-black rounded p-1"
                type="password"
                placeholder="Mot de passe"
              />
              <button className="bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white p-2 rounded">
                Connexion
              </button>
            </div>
            <p className="pt-2">
              Vous n'avez pas de compte ?{" "}
              <Link
                className="underline underline-offset-2 cursor-pointer hover:text-slate-500"
                to="/signup"
              >
                Créer un compte
              </Link>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;
