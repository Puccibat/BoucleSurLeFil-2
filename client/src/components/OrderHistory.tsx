import React from "react";
import Order from "./Order";

const OrderHistory = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl pb-4">Commandes</h1>
      <div className="border-4 border-black rounded-md p-5 md:w-4/5 overflow-auto">
        <div className="bg-slate-100 rounded-md p-2 md:grid grid-cols-9 gap-2 hidden">
          <div>ID</div>
          <div className="col-span-2">Nom</div>
          <div className="col-span-2">Adresse</div>
          <div>Date</div>
          <div>Total</div>
          <div>Statut</div>
          <div>Action</div>
        </div>
        <div className=" divide-y-2">
          <Order />
          <Order />
          <Order />
          <Order />
        </div>
      </div>
    </div>
  );
};

export default OrderHistory;
