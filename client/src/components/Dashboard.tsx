import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <h1 className=" text-2xl">Dashboard</h1>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4 pt-8">
          <div className=" border-4 border-black md:p-5 p-1 rounded-md ">
            Commandes aujourd'hui: 12
          </div>
          <div className=" border-4 border-black md:p-5 p-2 rounded-md ">
            Chiffre d'affaire du jour: 120€
          </div>
          <div className=" border-4 border-black md:p-5 p-2 rounded-md ">
            Commandes total cette semaine: 36
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
