import React from "react";
import Cart from "../components/Cart";

const CartPage = ({
  cart,
  chosenCurrency,
  minusQty,
  plusQty,
  removeFromCart,
}) => {
  return (
    <div>
      <Cart
        cart={cart}
        minusQty={minusQty}
        plusQty={plusQty}
        chosenCurrency={chosenCurrency}
        removeFromCart={removeFromCart}
        cartTitle="CART"
        hr={<hr></hr>}
      />
    </div>
  );
};

export default CartPage;
