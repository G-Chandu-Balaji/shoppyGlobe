import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./confirmOrder.css";
import { Navigate, useNavigate } from "react-router";
import { clearCart } from "../utils/cartSlice";

export default function ConfirmOrder() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const orders = useSelector((store) => store.cart.orders);
  const userData = useSelector((store) => store.cart.userData);

  const totalAmount = orders.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  function handleConfirmOrder() {
    dispatch(clearCart());

    alert("Order Confirmed!");
    navigate("/");
  }
  return (
    <div className="confirm-order">
      <h2>Confirm Your Order</h2>
      <div className="confirm-order-container">
        <section className="user-details">
          <h4>Shipping Details</h4>
          <div className="user-info">
            <p>Name:</p>
            <p>{userData.name}</p>
            <p>Email:</p>
            <p>{userData.email}</p>
            <p>Address:</p>
            <p>{userData.address}</p>
          </div>
        </section>

        <section className="cart-items">
          <h4>Items</h4>
          {orders.length > 0 ? (
            <ul>
              {orders.map((item, index) => (
                <li key={index}>
                  {item.title} : ₹{item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          ) : (
            <p>Your cart is empty </p>
          )}
          <p>
            <strong>Total Amount: </strong>₹{totalAmount.toFixed(2)}
          </p>
        </section>
      </div>

      {orders.length > 0 ? (
        <button onClick={handleConfirmOrder}>Confirm Order</button>
      ) : (
        <button onClick={() => navigate("/products")}>Add Items</button>
      )}
    </div>
  );
}
