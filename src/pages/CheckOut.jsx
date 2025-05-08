import React, { useState } from "react";
import "./CheckOut.css";

export default function CheckoutPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment submitted successfully!");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit} className="checkout-form">
        <label>Name</label>
        <input name="name" value={form.name} onChange={handleChange} required />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <label>Shipping Address</label>
        <textarea
          name="address"
          value={form.address}
          onChange={handleChange}
          required
        />

        <label>Card Number</label>
        <input
          type="text"
          name="cardNumber"
          value={form.cardNumber}
          onChange={handleChange}
          required
        />

        <div className="card-details">
          <div>
            <label>Expiry</label>
            <input
              type="text"
              name="expiry"
              value={form.expiry}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>CVC</label>
            <input
              type="text"
              name="cvc"
              value={form.cvc}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
