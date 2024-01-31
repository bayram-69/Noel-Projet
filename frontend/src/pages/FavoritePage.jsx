import React from "react";
import { useBasket } from "../context/BasketCount";

function FavoritePage() {
  const { favoriteProducts } = useBasket();
  return (
    <div>
      <h2 className="santalist">Favorite Products</h2>
      <div className="favorite">
        {favoriteProducts.map((product) => (
          <div className="favorite-container">
            <div key={product}>{product.name}</div>
            <p>Price: {product.price} 💵 </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FavoritePage;
