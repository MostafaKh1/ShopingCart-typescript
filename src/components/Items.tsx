import React from "react";
import { formatCurrency } from "./../uitlites/currency";
import { useCart } from "./../context/CartContext";

interface ItemsProps {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
}

function Items({ id, name, price, imgUrl }: ItemsProps) {
  const { getItems, increaseCart, decreaseCart, RemoveFromCart } = useCart();
  const quantity = getItems(id);
  return (
    <div className="pb-12 items-center text-center  ">
      <img
        src={imgUrl}
        className="object-cover mx-auto rounded-md"
        style={{ width: "500px", height: "200px" }}
      />
      <div className="flex mb-4 justify-between pt-4">
        <h2 className="text-2xl font-semibold">{name}</h2>
        <span className="text-xl text-gray-500">{formatCurrency(price)}</span>
      </div>

      {quantity === 0 ? (
        <div className="bg-blue-500 w-full py-2 text-white    items-center text-center rounded-lg ">
          <button className="w-full" onClick={() => increaseCart(id)}>
            + Add to Cart
          </button>
        </div>
      ) : (
        <>
          <div className="flex justify-center pt-6   pb-2 items-center">
            <button
              className="px-5 py-2  cursor-pointer bg-blue-500 text-white rounded-lg "
              onClick={() => decreaseCart(id)}
            >
              -
            </button>
            <p className="mx-2">{quantity} in cart</p>
            <button
              onClick={() => increaseCart(id)}
              className="px-5 py-2 cursor-pointer  bg-blue-500 text-white rounded-lg"
            >
              +
            </button>
          </div>
          <div className="flex justify-center items-center">
            <button
              className="bg-red-500 px-3  py-1 rounded-lg"
              onClick={() => RemoveFromCart(id)}
            >
              Remove
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Items;
