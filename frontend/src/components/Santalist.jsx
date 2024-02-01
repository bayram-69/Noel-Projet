import React from "react";
import { useBasket } from "../context/BasketCount";

function SantaList() {
  const { basketItems, setBasketItems } = useBasket();

  // Fonction pour incrémenter ou décrémenter la quantité
  const handleQuantityChange = (itemId, amount) => {
    setBasketItems((prevItems) => {
      const updatedItems = prevItems.map((item) =>
        item.id === itemId
          ? { ...item, quantity: Math.max(0, item.quantity + amount) }
          : item
      );

      // Filtrer les éléments dont la quantité n'est pas égale à 0
      return updatedItems.filter((item) => item.quantity !== 0);
    });
  };

  // Calcul du prix total
  const totalPrice = basketItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calcul de la quantité totale
  const totalQuantity = basketItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <div>
      <h2 className="santalist">My Santa List</h2>
      <div className="santalistPage">
        <div className="santalist-container">
          {basketItems.length === 0 ? (
            <div className="empty-basket">
              <p className="santalist-title">Your basket is empty</p>
            </div>
          ) : (
            <div className="santalist-basket">
              {basketItems.map((item) => (
                <div key={item.id} className="santalist-item">
                  <div className="basket">
                    <button
                      type="button"
                      className="button-basket"
                      onClick={() => handleQuantityChange(item.id, 1)}
                    >
                      +
                    </button>
                    <p className="basket-quantity">{item.quantity}</p>
                    <button
                      type="button"
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="button-basket2"
                    >
                      -
                    </button>{" "}
                  </div>

                  <p className="basket-name">{item.name}</p>

                  <p>{item.price * item.quantity} €</p>
                </div>
              ))}
              <div className="total-price">
                <p>Total Quantity: {totalQuantity}</p>
                <p>Total Price: {totalPrice} €</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default SantaList;
