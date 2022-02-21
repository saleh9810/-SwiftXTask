import React, { useEffect, useState } from "react";
import { gql, useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

const Product = ({ chosenCurrency, addOnCart }) => {
  let params = useParams();

  console.log(params.id);

  const GET_PRODUCT_BY_ID = gql`
    query GetProductById {
      product(id: "${params.id.substring(1)}") {
        name
        id
        description
        gallery
        attributes {
          id
          name
          items {
            id
            value
            displayValue
}
        }
        prices {
          amount
          currency {
            symbol
          }
        }
      }
    }
  `;
  const { data, error, loading } = useQuery(GET_PRODUCT_BY_ID);
  const [img, setImg] = useState(" ");

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

  console.log(data);
  if (loading) {
    return <p>loading...</p>;
  }

  const selectImg = (item) => {
    setImg(item);
  };

  const ShowImg = () => {
    if (img === " ") {
      return (
        <figure>
          <img
            className="main-img"
            src={data.product.gallery[0]}
            alt="productPhoto"
          ></img>
        </figure>
      );
    } else {
      return (
        <figure>
          <img className="main-img" src={img} alt="productPhoto"></img>
        </figure>
      );
    }
  };

  return (
    <section className="singleProductSection">
      <div className="container ">
        <div className="d-flex flex-wrap  justify-content-around mt-5 align-items-start">
          <div className="col-lg-2 productImages  col-md-12 ">
            {data.product.gallery.map((item) => {
              return (
                <figure key={item}>
                  <img
                    onClick={() => selectImg(item)}
                    className="w-50"
                    src={item}
                    alt="productPhoto"
                  ></img>
                </figure>
              );
            })}
          </div>
          <div className="col-lg-5 col-md-12 text-center">{ShowImg()}</div>
          <div className="col-lg-3 col-md-12 ms-5 product-data">
            <h3 className="">{data.product.name}</h3>
            <div>
              {data.product.attributes.map((product) => {
                return (
                  <div key={product.id}>
                    <h4 className="mt-4">{product.name}:</h4>
                    <div className="sizes">
                      <div className="d-flex ">
                        {product.items.map((item) => {
                          return (
                            <li className="me-3" key={item.id}>
                              {item.displayValue}
                            </li>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                );
              })}
              <div>
                <h4 className="mt-4">
                  {data.product.prices[number].__typename}:
                </h4>
                <h3 className="mt-3">
                  {data.product.prices[number].currency.symbol}
                  {data.product.prices[number].amount}{" "}
                </h3>
              </div>

              <button
                onClick={() => addOnCart(data.product)}
                className="btn mt-3 addToCart"
              >
                ADD TO CART
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Product;
