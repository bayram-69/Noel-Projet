import React, { useState } from "react";
import { toast } from "react-toastify";
import { NavLink, useLoaderData } from "react-router-dom";
import { useBasket } from "../context/BasketCount";
import CreateProduct from "./CreateProduct";

function ProductList() {
  const products = useLoaderData();
  const { addToBasket } = useBasket();

  const allCategories = [
    "book",
    "toy",
    "plush",
    "high-tech",
    "sport",
    "food",
    "clothes",
    "other",
    "game",
    "video game",
    "multimedia",
    "kitchen",
    "jewel",
  ];

  const [filters, setFilters] = useState({});

  const applyFilters = () => {
    return products.filter((product) => {
      if (
        filters.category &&
        product.category_name.toLowerCase() !== filters.category.toLowerCase()
      ) {
        return false;
      }

      if (
        filters.search &&
        !product.name.toLowerCase().includes(filters.search.toLowerCase())
      ) {
        return false;
      }

      if (
        product.price < filters.minPrice ||
        product.price > filters.maxPrice
      ) {
        return false;
      }
      return true;
    });
  };

  const handleClick = (filterType, value) => {
    setFilters((prevFilters) => {
      return {
        ...prevFilters,
        [filterType]: value,
      };
    });
  };

  const handleAddToBasket = (product) => {
    addToBasket(product);
    toast.success(`${product.name} added to your santalist!`);
  };

  const filteredProducts = applyFilters();

  return (
    <div className="productList">
      <div>
        <div className="filteredContainer">
          <div className="filtered">
            <div>
              <div className="filteredCategory">
                <h2>Filters </h2>
                <p>Filter by Category:</p>
                <select
                  value={filters.category}
                  className="filteredSelect"
                  onChange={(e) => handleClick("category", e.target.value)}
                >
                  <option value="">---</option>
                  {allCategories.map((name) => (
                    <option key={name} value={name}>
                      {name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="Search by name"
                value={filters.search}
                className="filteredSelect"
                onChange={(e) => handleClick("search", e.target.value)}
              />
              <input
                type="number"
                placeholder="Min Price"
                value={filters.minPrice}
                className="filteredSelect"
                onChange={(e) => handleClick("minPrice", e.target.value)}
              />
              <input
                type="number"
                placeholder="Max Price"
                value={filters.maxPrice}
                className="filteredSelect"
                onChange={(e) => handleClick("maxPrice", e.target.value)}
              />
            </div>
          </div>
        </div>

        <div className="addProduct">
          <CreateProduct />
        </div>
      </div>

      <div>
        <div className="container">
          {filteredProducts &&
            filteredProducts.map((p) => (
              <ul key={p.id}>
                <li className="products">
                  <h1 className="products-name">{p.name}</h1>
                  <p>Quantity: {p.quantity}</p>
                  <p>{p.price} 💵 </p>
                  <p>Category: {p.category_name}</p>
                  <div className="image-container">
                    <div>
                      <NavLink to={`/products/${p.id}`}>
                        <button type="button" className="transparent-button">
                          <img
                            className="basket-icon"
                            src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-bauble-christmas-baubles-justicon-lineal-color-justicon-13.png"
                            alt="external-bauble-christmas-baubles-justicon-lineal-color-justicon-13"
                          />
                          <span className="hover-text">Learn more</span>
                        </button>
                      </NavLink>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="transparent-button"
                        onClick={() => {
                          handleAddToBasket(p);
                        }}
                      >
                        <img
                          className="basket-icon"
                          src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/external-snowball-christmas-day-justicon-lineal-color-justicon.png"
                          alt="external-snowball-christmas-day-justicon-lineal-color-justicon"
                        />
                        <span className="hover-text">Add to my santalist</span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            ))}
        </div>
      </div>
    </div>
  );
}

export default ProductList;
