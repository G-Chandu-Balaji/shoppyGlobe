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
    navigate("/orderConfirmed");
  }
  return (
    <div className="confirm-order">
      <div style={{ display: "flex", gap: ".5rem", marginBottom: "1rem" }}>
        <img src="circle.png" alt="tick" width={50} height={50} />

        <h2>Confirm your Order</h2>
      </div>
      <div className="confirm-order-container">
        <section className="user-details">
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img src="shipped.png" alt="van" width={30} height={30} />
            <h4>Shipping Details</h4>
          </div>
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
          <div style={{ display: "flex", gap: ".5rem" }}>
            <img src="items.png" alt="items" width={30} height={30} />
            <h4>Items</h4>
          </div>
          {orders.length > 0 ? (
            <div className="grid-cart-items">
              {orders.map((item, index) => (
                <>
                  <p key={index}>{item.title} :</p>
                  <p key={index + 100}>
                    ₹{item.price} x {item.quantity}
                  </p>
                </>
              ))}
              <p>
                <strong>Total Amount: </strong>
              </p>
              <p className="line-top">₹{totalAmount.toFixed(2)}</p>
            </div>
          ) : (
            <p>Your cart is empty </p>
          )}
        </section>
      </div>

      {orders.length > 0 ? (
        <div className="buttons">
          <button onClick={handleConfirmOrder} className="confirm-order-button">
            Confirm Order
          </button>
          <button onClick={() => navigate("/cart")} className="cancel-button">
            Cancel Order
          </button>
        </div>
      ) : (
        <button
          onClick={() => navigate("/products")}
          className="add-item-button"
        >
          Add Items
        </button>
      )}
    </div>
  );
}
