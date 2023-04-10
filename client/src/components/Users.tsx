import React from "react";
import User from "./User";

const Users = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl pb-4">Utilisateurs</h1>
      <div className="border-4 border-black rounded-md p-5 w-4/5">
        <div className="bg-slate-100 rounded-md p-2 md:grid grid-cols-11 gap-2 hidden">
          <div>ID</div>
          <div className="col-span-4">Email</div>
          <div className="col-span-2">Nom</div>
          <div>Prénom</div>
          <div className="col-span-2 text-center">Statut</div>
          <div>Action</div>
        </div>
        <div className=" divide-y-2">
          <User />
          <User />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Users;
