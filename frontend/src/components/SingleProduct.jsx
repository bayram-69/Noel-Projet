import PropTypes from "prop-types";
import React from "react";
import { useBasket } from "../context/BasketCount";

function SingleProduct({ products }) {
  const { addToFavorites } = useBasket();

  const manufacturer = (manufacturerId) => {
    switch (manufacturerId) {
      case 1:
        return "France 🇫🇷 ";
      case 2:
        return "United Kingdom 🇬🇧 ";
      case 3:
        return "Spain 🇪🇸 ";
      case 4:
        return "Germany 🇩🇪 ";
      case 5:
        return "Denmark 🇩🇰 ";
      case 6:
        return "USA 🇺🇸 ";
      default:
        return "Unknown Country";
    }
  };

  const handleAddToFavorites = () => {
    addToFavorites(products);
  };

  return (
    <div className="single-container">
      <div className="container3">
        <h1>{products.name}</h1>
        <p>Quantity: {products.quantity}</p>
        <p>Price: {products.price} 💵 </p>
        <p>Category: {products.category_name}</p>
        <p>Manufacturer: {manufacturer(products.manufacturer_id)}</p>
        <button
          type="button"
          className="transparent-button"
          onClick={handleAddToFavorites}
        >
          <img
            className="basket-icon"
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/external-christmas-religion-flaticons-flat-flat-icons.png"
            alt="external-christmas-religion-flaticons-flat-flat-icons"
          />
          <span className="hover-text">Add to my favorites</span>
        </button>
      </div>
    </div>
  );
}

SingleProduct.propTypes = {
  products: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    category_name: PropTypes.string.isRequired,
    fav: PropTypes.number.isRequired,
    quantity: PropTypes.number.isRequired,
    manufacturer_id: PropTypes.number.isRequired,
  }).isRequired,
};

export default SingleProduct;
