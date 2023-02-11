import React from "react";
import Items from "../components/Items";
import Product from "../data/items.json";

function Store() {
  return (
    <section>
      <h1>Store</h1>
      <div className="grid gap-x-4 gap-y-16 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Product.map((item) => (
          <div key={item.id}>
            <Items {...item} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Store;
