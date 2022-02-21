import React from "react";
import Products from "../components/Products";

const Tech = ({ addOnCart, chosenCurrency }) => {
  const filterDataNumber = 2;
  const categorieName = "Tech";
  return (
    <div>
      <Products
        addOnCart={addOnCart}
        chosenCurrency={chosenCurrency}
        filterDataNumber={filterDataNumber}
        categorieName={categorieName}
      />
    </div>
  );
};

export default Tech;
