import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import jewel from "../assets/img/ring1.jpg";

const CartItem = () => {
  return (
    <>
      <th className="p-4">
        <div className="flex justify-center items-center cursor-pointer">
          <FontAwesomeIcon
            className="transform active:scale-50 transition-transform"
            icon={faXmark}
          />
        </div>
      </th>
      <th className="md:p-4">
        <div className="max-w-xs mx-auto">
          <img src={jewel} />
        </div>
      </th>
      <th className="p-4">
        <div className="flex justify-center items-center gap-2">
          <button className="bg-black hover:bg-gray-800 transform active:scale-90 transition-transform text-white p-1 h-5 rounded flex items-center">
            <FontAwesomeIcon
              className="transform active:scale-80 transition-transform"
              icon={faMinus}
              size="xs"
            />
          </button>
          <div className="text-sm">1</div>
          <button className="bg-black hover:bg-gray-800 transform active:scale-90 transition-transform text-white p-1 h-5 rounded flex items-center">
            <FontAwesomeIcon
              className="transform active:scale-80 transition-transform"
              icon={faPlus}
              size="xs"
            />
          </button>
        </div>
      </th>
      <th>
        <div className="flex justify-center items-center cursor-pointer">
          90€
        </div>
      </th>
    </>
  );
};

export default CartItem;
