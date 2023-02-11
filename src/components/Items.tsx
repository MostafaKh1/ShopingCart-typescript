import React from "react";
import { formatCurrency } from "./../uitlites/currency";

interface ItemsProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

function Items({ id, name, price, imgUrl }: ItemsProps) {
  const quintaty = 12;
  return (
    <div
      className="py-16 items-center text-center  "
      style={{ height: "300px" }}
    >
      <img
        src={imgUrl}
        className="object-cover mx-auto rounded-md"
        style={{ width: "500px", height: "200px" }}
      />
      <div className="flex justify-between pt-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <span className="text-xl text-gray-500">{formatCurrency(price)}</span>
      </div>

      {quintaty < 0 ? (
        <div className="bg-blue-500 w-full py-2 text-white    items-center text-center rounded-lg ">
          <button>+ Add to Cart</button>
        </div>
      ) : (
        <>
          <div className="flex justify-center pt-6   pb-2 items-center">
            <button className="px-4 py-1 bg-blue-500 text-white rounded-lg ">
              -
            </button>
            <p className="mx-2">7 in cart</p>
            <button className="px-4 bg-blue-500 text-white rounded-lg">
              +
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button className="bg-red-500 px-3  py-1 rounded-lg">Remove</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Items;
