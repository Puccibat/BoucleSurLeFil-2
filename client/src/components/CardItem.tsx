import React from "react";
import ring from "../assets/img/ring1.jpg";
import { Link } from "react-router-dom";

const CardItem = () => {
  return (
    <div className="hover:bg-white hover:opacity-70 hover:cursor-pointer flex flex-col">
      <Link to="/products/2">
        <img src={ring} className="rounded" />
      </Link>
      <div className="font-secondary">
        <h2 className="text-sm ">Bague</h2>
        <h2 className="text-sm text-orange-300 ">€90.00</h2>
      </div>
    </div>
  );
};

export default CardItem;
