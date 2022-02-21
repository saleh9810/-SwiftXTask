import React from "react";
import Products from "../components/Products";

const Home = ({ addOnCart, chosenCurrency }) => {
  const filterDataNumber = 0;
  const categorieName = "ALL";
  return (
    <div>
      <Products
        filterDataNumber={filterDataNumber}
        chosenCurrency={chosenCurrency}
        categorieName={categorieName}
        addOnCart={addOnCart}
      />
    </div>
  );
};

export default Home;
