import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "../styles/cart.css";
import { useSelector } from "react-redux";

export function CartHome() {
  const [isHovered, setIsHovered] = useState(false);

  let isAuth = useSelector((state) => state.isAuth);
  let CartItems = useSelector((state) => state.Cart);

  let currentCart = [];
  if (isAuth) {
    let UserID = localStorage.getItem("UID1mg");
    currentCart = CartItems.filter((ele) => ele.UID === UserID);
  }

  const cartItems = currentCart.length;
  const totalPrice = currentCart.reduce((acc, item) => acc + item.ProductPrice, 0);

  return (
    <div
      className="cart-container"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="cart-icon">
        <FontAwesomeIcon icon={faShoppingCart} flip="horizontal" />
        <span className="cart-count">{cartItems}</span>
      </div>

      {isHovered && (
        <div className="cart-popup">
          <h3>Order Summary</h3>
          <ul>
            {currentCart.map((item, index) => (
              <li key={index}>
                {item.ProductName} x 1 = ₹{item.ProductPrice}
              </li>
            ))}
          </ul>
          <div className="total">Total: ₹{totalPrice}</div>
        </div>
      )}
    </div>
  );
}
