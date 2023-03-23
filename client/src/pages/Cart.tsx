import React from "react";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <Header textColor="black" />
      {/* <section className=" pt-32 md:px-28 px-10 font-secondary">
        <div className="grid grid-cols-3 gap-4 px-60">
          <div className="text-center">Retirer</div>
          <div className="text-center">Bijoux</div>
          <div className="text-center">Qté</div>
          <CartItem />
          <CartItem />
          <CartItem />
        </div>
      </section> */}
      <section className=" pt-32 px-10 font-secondary flex justify-center items-center flex-col">
        <table>
          <thead className="text-sm font-normal">
            <tr className="divide-x">
              <th className=" w-32 p-4">Retirer</th>
              <th className="p-4">Bijoux</th>
              <th className="w-32 p-4">Qté</th>
              <th className="w-32 p-4">Prix</th>
            </tr>
          </thead>
          <tbody>
            <tr className="divide-x">
              <CartItem />
            </tr>
            <tr className="divide-x">
              <CartItem />
            </tr>
            <tr className="divide-x">
              <CartItem />
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th>
                <div className="pt-6">Total: 270€</div>
              </th>
            </tr>
          </tfoot>
        </table>
        <div className="pt-6">
          <Link to="/checkout">
            <button className="bg-orange-300 hover:bg-orange-400 focus:outline-none focus:ring-4 focus:ring-orange-200 transform active:scale-90 transition-transform text-white p-3 rounded">
              Commander
            </button>
          </Link>
        </div>
      </section>
    </>
  );
};

export default Cart;
