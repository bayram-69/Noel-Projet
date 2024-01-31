import React from "react";
import { useBasket } from "../context/BasketCount";

function SantaList() {
  const { basketItems } = useBasket();

  const totalPrice = basketItems.reduce((total, item) => total + item.price, 0);

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
                  <p>{item.name}</p>
                  <p>{item.price} €</p>
                </div>
              ))}
              <div className="total-price">
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
