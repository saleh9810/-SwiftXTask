import { gql, useQuery } from "@apollo/client";
import { FaCartPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const QUERY_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      name
      products {
        id
        name
        gallery
        attributes {
          name
          id
          items {
            id
            value
            displayValue
          }
        }
        prices {
          currency {
            symbol
            label
          }
          amount
        }
      }
    }
  }
`;
function Products({
  addOnCart,
  chosenCurrency,
  filterDataNumber,
  categorieName,
}) {
  const { data, error, loading } = useQuery(QUERY_ALL_CATEGORIES);

  if (data) {
    console.log(data);
  } else {
    console.log("error");
  }

  if (loading) {
    return <p>lodaing ...</p>;
  }
  if (error) {
    console.log("error");
  }

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
      <h2 className="mt-4">{categorieName}</h2>
      <div className="d-flex justify-content-center align-items-center  flex-wrap">
        {data.categories[filterDataNumber].products.map((item) => {
          return (
            <div className="col-lg-3 product" key={item.id}>
              <Link to={`/product:${item.id}`}>
                <figure>
                  <img
                    className="product-img"
                    src={item.gallery[0]}
                    alt={item.name}
                  ></img>
                  <figcaption className="mt-3">
                    <h6> {item.name} </h6>
                  </figcaption>
                </figure>
              </Link>
              <h6>
                {item.prices[number].currency.symbol}
                {item.prices[number].amount}{" "}
              </h6>
              <FaCartPlus
                onClick={() => addOnCart(item)}
                className="product-add"
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Products;
