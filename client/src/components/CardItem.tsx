import React from "react";
import ring from "../assets/img/ring1.jpg";
import { Link } from "react-router-dom";

const CardItem = () => {
  return (
    <div className="hover:bg-white hover:opacity-70 hover:cursor-pointer">
      <div className="font-secondary relative flex justify-between top-5">
        <h2 className="text-sm bg-white px-2 rounded-br-lg">Bague</h2>
        <h2 className="text-sm bg-white text-orange-300 px-2 rounded-bl-lg">
          €90.00
        </h2>
      </div>
      <Link to="/products/2">
        <img src={ring} className="rounded" />
      </Link>
    </div>
  );
};

export default CardItem;
