import "./App.css";
import React, { useState } from "react";
import TheNavbar from "./shared/Navbar";
import Home from "./views/home";
import Clothes from "./views/clothes";
import Tech from "./views/tech";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CartPage from "./views/cartPage";
import CartOverlay from "./components/CartOverlay";
import Product from "./views/product";

function App() {
  const [cart, setCart] = useState([]);
  const [chosenCurrency, setCurrency] = useState("USD");
  const [filterDataNumber, setFilterDataNumber] = useState(0);
  const [active, setActive] = useState(false);

  const addOnCart = (item) => {
    if (cart.find((product) => product.id === item.id)) {
      let newDate = cart.map((product) =>
        product.id === item.id ? { ...product, qty: product.qty + 1 } : product
      );
      setCart([...newDate]);
    } else {
      let newItem = Object.assign({}, item, { qty: 1 });
      setCart([...cart, newItem]);
    }
  };

  const removeFromCart = (item) => {
    let newData = cart.filter((product) => product.id !== item.id);
    setCart([...newData]);
  };

  const minusQty = (item) => {
    let newData = cart.map((product) =>
      product.id === item.id ? { ...product, qty: product.qty - 1 } : product
    );
    setCart([...newData]);

    if (item.qty < 2) {
      let newData = cart.filter((product) => product.id !== item.id);
      setCart([...newData]);
    }
  };

  const plusQty = (item) => {
    let newData = cart.map((product) =>
      product.id === item.id ? { ...product, qty: product.qty + 1 } : product
    );
    setCart([...newData]);
  };

  const chooseCurrency = (item) => {
    setCurrency(item);
  };

  const filterData = (number) => {
    setFilterDataNumber(number);
  };

  const handleOnClick = () => {
    if (active === true) {
      setActive(false);
    } else {
      setActive(true);
    }
  };

  return (
    <div className="App">
      <Router>
        <CartOverlay
          chosenCurrency={chosenCurrency}
          plusQty={plusQty}
          minusQty={minusQty}
          removeFromCart={removeFromCart}
          cart={cart}
          active={active}
          handleOnClick={handleOnClick}
        />
        <TheNavbar
          cart={cart}
          filterData={filterData}
          chooseCurrency={chooseCurrency}
          handleOnClick={handleOnClick}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Home chosenCurrency={chosenCurrency} addOnCart={addOnCart} />
            }
          />
          <Route
            path="/clothes"
            element={
              <Clothes chosenCurrency={chosenCurrency} addOnCart={addOnCart} />
            }
          />
          <Route
            path="/tech"
            element={
              <Tech chosenCurrency={chosenCurrency} addOnCart={addOnCart} />
            }
          />

          <Route
            path="/product:id"
            element={
              <Product addOnCart={addOnCart} chosenCurrency={chosenCurrency} />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                chosenCurrency={chosenCurrency}
                plusQty={plusQty}
                minusQty={minusQty}
                cart={cart}
                removeFromCart={removeFromCart}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
