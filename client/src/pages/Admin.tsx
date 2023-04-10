import React, { useState } from "react";
import Header from "../components/Header";
import bague from "../assets/img/ring1.jpg";
import Dashboard from "../components/Dashboard";
import OrderHistory from "../components/OrderHistory";
import Users from "../components/Users";

const Admin = () => {
  const [openTab, setOpenTab] = useState<number>(1);
  const handleClickTab = (index: number) => {
    setOpenTab(index);
  };

  return (
    <>
      <Header textColor="black" />
      <section className="pt-32 md:px-28 px-5 font-secondary">
        <div className=" border-b-2">
          <ul className="grid grid-cols-3 md:w-1/4">
            <li
              className={`${
                openTab === 1 &&
                "rounded-tl-lg rounded-tr-lg border-l-2 border-t-2 border-r-2"
              } py-2
              `}
              onClick={() => handleClickTab(1)}
            >
              <p className="text-center cursor-pointer">Dashboard</p>
            </li>
            <li
              className={`${
                openTab === 2 &&
                "rounded-tl-lg rounded-tr-lg border-l-2 border-t-2 border-r-2"
              } py-2
              
              `}
              onClick={() => handleClickTab(2)}
            >
              <p className="text-center cursor-pointer">Commandes</p>
            </li>
            <li
              className={`${
                openTab === 3 &&
                "rounded-tl-lg rounded-tr-lg border-l-2 border-t-2 border-r-2"
              } py-2
              
              `}
              onClick={() => handleClickTab(3)}
            >
              <p className="text-center cursor-pointer">Utilisateurs</p>
            </li>
          </ul>
        </div>
        <div className="md:p-2">
          {openTab === 1 ? (
            <Dashboard />
          ) : openTab === 2 ? (
            <OrderHistory />
          ) : (
            <Users />
          )}
        </div>
      </section>
    </>
  );
};

export default Admin;
