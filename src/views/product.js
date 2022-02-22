import React from "react";
import SingleProduct from "../components/SingleProduct";

const Product = ({ chosenCurrency, addOnCart }) => {
  return (
    <div>
      <SingleProduct chosenCurrency={chosenCurrency} addOnCart={addOnCart} />
    </div>
  );
};

export default Product;
