import React from "react";
import Cart from "./Cart";
import { Link } from "react-router-dom";

const CartOverlay = ({
  cart,
  chosenCurrency,
  minusQty,
  plusQty,
  removeFromCart,
  active,
  handleOnClick,
}) => {
  return (
    <div className={active ? "cartOverlay" : "hideCartOverlay"}>
      <h4 className="mt-4">My Bag {cart.length} items</h4>
      <Cart
        cart={cart}
        minusQty={minusQty}
        plusQty={plusQty}
        chosenCurrency={chosenCurrency}
        removeFromCart={removeFromCart}
      />
      <div>
        <Link to="/cart">
          <button onClick={() => handleOnClick()} className="btn view">
            VIEW BAG
          </button>
        </Link>
        <button className="btn check">CHECK OUT</button>
      </div>
    </div>
  );
};

export default CartOverlay;
