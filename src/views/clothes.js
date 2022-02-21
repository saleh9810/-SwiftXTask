import React from "react";
import Products from "../components/Products";

const Clothes = ({ addOnCart, chosenCurrency }) => {
  const filterDataNumber = 1;
  const categorieName = "Clothes";

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

export default Clothes;
