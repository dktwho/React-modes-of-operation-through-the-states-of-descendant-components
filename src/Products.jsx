import React from "react";
import Product from "./Product";
import { initProds } from "./data";
import { useState } from "react";

const Products = () => {
  const [prods, setProds] = useState(initProds);

  function changeField(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }
        return prod;
      })
    );
  }
  const rows = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        id={prod.id}
        name={prod.name}
        cost={prod.cost}
        catg={prod.catg}
        changeField={changeField}
      />
    );
  });
  return (
    <div className="App">
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Products;
