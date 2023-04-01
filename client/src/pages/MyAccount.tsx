import React, { useState } from "react";
import Header from "../components/Header";
import bague from "../assets/img/ring1.jpg";

const MyAccount = () => {
  const userInfos = {
    lastname: "Tata",
    firstname: "Toto",
    email: "tata.toto@gmail.com",
    password: "********",
    shippingAddress: {
      city: "Versailles",
      zipcode: "78000",
      address: "12 rue du chateau",
    },
  };
  const [openTab, setOpenTab] = useState<number>(1);
  const [user, setUser] = useState(userInfos);
  const handleClickTab = (index: number) => {
    setOpenTab(index);
  };

  return (
    <>
      <Header textColor="black" />
      <section className="pt-32 md:px-28 px-5 font-secondary">
        <div className=" border-b-2">
          <ul className="grid grid-cols-2 md:w-1/4">
            <li
              className={`${
                openTab === 1
                  ? "rounded-tl-lg rounded-tr-lg border-l-2 border-t-2 border-r-2"
                  : ""
              } py-2
              `}
              onClick={() => handleClickTab(1)}
            >
              <p className="text-center cursor-pointer">Mes informations</p>
            </li>
            <li
              className={`${
                openTab === 2
                  ? "rounded-tl-lg rounded-tr-lg border-l-2 border-t-2 border-r-2"
                  : ""
              } py-2
              
              `}
              onClick={() => handleClickTab(2)}
            >
              <p className="text-center cursor-pointer">Mes commandes</p>
            </li>
          </ul>
        </div>
        <div>
          {openTab === 1 ? (
            <div className="p-2">
              <div className="">
                <p>Nom:</p>
                <div className="flex items-center justify-between gap-4 md:w-1/2 pb-2">
                  <p>{userInfos.lastname}</p>
                  <button className=" p-2 bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white rounded">
                    Modifier
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <p>Prénom:</p>
                <div className="flex items-center justify-between gap-4 md:w-1/2 pb-2">
                  <p>{userInfos.firstname}</p>
                  <button className=" p-2 bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white rounded">
                    Modifier
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <p>Email:</p>
                <div className="flex items-center justify-between gap-4 md:w-1/2 pb-2">
                  <p>{userInfos.email}</p>
                  <button className=" p-2 bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white rounded">
                    Modifier
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <p>Mot de passe:</p>
                <div className="flex items-center justify-between gap-4 md:w-1/2 pb-2">
                  <p>{userInfos.password}</p>
                  <button className=" p-2 bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white rounded">
                    Modifier
                  </button>
                </div>
              </div>
              <div className="pt-2">
                <p>Adresse:</p>
                <div className="flex items-center justify-between gap-4 md:w-1/2 pb-2">
                  <p>{userInfos.firstname}</p>
                  <button className=" p-2 bg-black hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-200 transform active:scale-90 transition-transform text-white rounded">
                    Modifier
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div className="pt-5">
              <div className="grid grid-cols-4  gap-2">
                <h1 className="text-center text-lg">Bijoux:</h1>
                <h1 className="text-center text-lg">Description:</h1>
                <h1 className="text-center text-lg">Prix:</h1>
                <h1 className="text-center text-lg">Date de commande:</h1>
                <img className="object-cover" src={bague} alt="bague" />
                <p className="text-center my-auto">Nom de la bague</p>
                <p className="text-center my-auto">90€</p>
                <p className="text-center my-auto">12/03/2023</p>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default MyAccount;
