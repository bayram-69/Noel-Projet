import { createContext, useContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

const BasketContext = createContext();

export default function BasketContextProvider({ children }) {
  const [basketItems, setBasketItems] = useState([]);
  const [favoriteProducts, setFavoriteProducts] = useState([]);

  const addToFavorites = (product) => {
    setFavoriteProducts((prevFavorites) => [...prevFavorites, product]);
  };

  const addToBasket = (item) => {
    const existingItem = basketItems.find(
      (basketItem) => basketItem.id === item.id
    );

    if (existingItem) {
      const updatedItems = basketItems.map((basketItem) =>
        basketItem.id === item.id
          ? { ...basketItem, quantity: basketItem.quantity + 1 }
          : basketItem
      );
      setBasketItems(updatedItems);
    } else {
      setBasketItems([...basketItems, { ...item, quantity: 1 }]);
    }
  };

  const basketContextValue = useMemo(
    () => ({
      basketItems,
      setBasketItems,
      addToBasket,
      favoriteProducts,
      setFavoriteProducts,
      addToFavorites,
    }),
    [
      basketItems,
      setBasketItems,
      addToBasket,
      favoriteProducts,
      setFavoriteProducts,
      addToFavorites,
    ]
  );

  return (
    <BasketContext.Provider value={basketContextValue}>
      {children}
    </BasketContext.Provider>
  );
}

export const useBasket = () => useContext(BasketContext);

BasketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
