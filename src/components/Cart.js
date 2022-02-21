import React from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = ({
  cart,
  chosenCurrency,
  minusQty,
  plusQty,
  removeFromCart,
  cartTitle,
  hr,
}) => {
  let number =
    chosenCurrency === "USD"
      ? 0
      : chosenCurrency === "GBP"
      ? 1
      : chosenCurrency === "AUD"
      ? 2
      : chosenCurrency === "JPY"
      ? 3
      : chosenCurrency === "RUB"
      ? 4
      : 0;
  return (
    <section className="container">
      <h2 className="mt-4">{cartTitle}</h2>
      {cart.map((item) => {
        return (
          <>
            {hr}
            <div
              className="d-flex mt-5   justify-content-between"
              key={item.id}
            >
              <div className="col-lg-5">
                <h4>{item.name}</h4>
                <h5>
                  {" "}
                  {item.prices[number].currency.symbol}
                  {item.prices[number].amount * item.qty}{" "}
                </h5>
              </div>
              <div className="cart-img col-lg-2 d-flex align-items-center">
                <div className="me-3">
                  <span onClick={() => plusQty(item)} className="plus">
                    <FaPlus />
                  </span>
                  <h4 className="itemQty">{item.qty}</h4>
                  <span onClick={() => minusQty(item)} className="minus">
                    <FaMinus />
                  </span>
                </div>
                <Link to={`/product:${item.id}`}>
                  <figure>
                    <img
                      className="cart-img"
                      src={item.gallery[0]}
                      alt="productImg"
                    ></img>
                  </figure>
                </Link>
                <button
                  className="btn btn-dark ms-2"
                  onClick={() => removeFromCart(item)}
                >
                  DELETE
                </button>
              </div>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Cart;
