import React from "react";

const User = () => {
  return (
    <>
      <div className="md:grid grid-cols-11 gap-2 p-2 pt-4 hidden">
        <div>1224</div>
        <div className="col-span-4 break-words">
          baptiste.puccinelli@gmail.com
        </div>
        <div className="col-span-2 break-words">Puccinelli</div>
        <div className="break-words">Baptiste</div>
        <div className="col-span-2 text-center">En attente</div>
        <div>Action</div>
      </div>
      <div className="grid grid-cols-2 gap-2 p-2 pt-4 md:hidden">
        <div>ID:</div>
        <div>1224</div>
        <div>Email:</div>
        <div className=" break-words">baptiste.puccinelli@gmail.com</div>
        <div>Nom:</div>
        <div className=" break-words">Puccinelli</div>
        <div>Prénom:</div>
        <div className=" break-words">Baptiste</div>
        <div>Statut:</div>
        <div>En attente</div>
        <div>Action:</div>
        <div>Action</div>
      </div>
    </>
  );
};

export default User;
