import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { FaShoppingBag, FaCartArrowDown, FaDollarSign } from "react-icons/fa";
import { gql, useQuery } from "@apollo/client";
import { NavLink } from "react-router-dom";

const QUERY_ALL_CURRENCIES = gql`
  query GetAllCurrencies {
    currencies {
      symbol
      label
    }
  }
`;

const TheNavbar = ({ chooseCurrency, filterData, handleOnClick, cart }) => {
  const { data, error, loading } = useQuery(QUERY_ALL_CURRENCIES);
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
  return (
    <div>
      <Navbar bg="" expand="lg">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="nav">
              {" "}
              <div className="d-flex">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "active" : "inactive"
                  }
                  to="/"
                >
                  {" "}
                  <p onClick={() => filterData(0)}> ALL </p>{" "}
                </NavLink>
                <NavLink to="/clothes">
                  {" "}
                  <p onClick={() => filterData(1)}> CLOTHES </p>{" "}
                </NavLink>
                <NavLink to="/tech">
                  {" "}
                  <p onClick={() => filterData(2)}> TECH </p>{" "}
                </NavLink>
              </div>
            </Nav>
            <div>
              <FaShoppingBag className="shoppingBag" />
            </div>

            <div className="d-flex align-items-center">
              <NavDropdown
                title={<FaDollarSign className="dollarSign" />}
                id="basic-nav-dropdown"
              >
                {data.currencies.map((item) => {
                  return (
                    <NavDropdown.Item
                      onClick={() => chooseCurrency(item.label)}
                      key={item.symbol}
                    >
                      {item.symbol} {item.label}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </div>
          </Navbar.Collapse>
          <div className="cartIcon">
            <FaCartArrowDown
              onClick={() => handleOnClick()}
              className="cartArrowDown"
            />
            <span className="itemsInCart">{cart.length}</span>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default TheNavbar;
