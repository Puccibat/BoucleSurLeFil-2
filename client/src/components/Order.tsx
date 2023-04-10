import React from "react";

const Order = () => {
  return (
    <>
      <div className="md:grid grid-cols-9 gap-2 p-2 pt-4 hidden">
        <div>1224</div>
        <div className="col-span-2 break-words">Baptiste Puccinelli</div>
        <div className="col-span-2 break-words">
          26 rue Diderot, 94300 Vincennes
        </div>
        <div>03/04/23</div>
        <div>120€</div>
        <div>En attente</div>
        <div>Action</div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 pt-4 md:hidden">
        <div>ID:</div>
        <div>1224</div>
        <div>Nom:</div>
        <div className=" break-words">Baptiste Puccinelli</div>
        <div>Adresse:</div>
        <div className=" break-words">26 rue Diderot, 94300 Vincennes</div>
        <div>Date:</div>
        <div>03/04/23</div>
        <div>Total:</div>
        <div>120€</div>
        <div>Statut:</div>
        <div>En attente</div>
        <div>Action:</div>
        <div>Action</div>
      </div>
    </>
  );
};

export default Order;
