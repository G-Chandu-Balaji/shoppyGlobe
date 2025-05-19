import React from "react";
import { useForm } from "react-hook-form";
import "./CheckOut.css";
import { addUserData } from "../utils/cartSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

export default function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(addUserData(data));
    alert("shipping address added sucessfully");
    navigate("/confirmOrder");
  };

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="checkout-form">
        <label>Name</label>
        <input
          type="text"
          {...register("name", { required: "Name is required" })}
          className={errors.name ? "input-error" : ""}
        />
        {errors.name && (
          <span className="error-message">{errors.name.message}</span>
        )}

        <label>Email</label>
        <input
          type="email"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Invalid email address",
            },
          })}
          className={errors.email ? "input-error" : ""}
        />
        {errors.email && (
          <span className="error-message">{errors.email.message}</span>
        )}

        <label>Shipping Address</label>
        <textarea
          {...register("address", {
            required: "Address is required",
            minLength: {
              value: 10,
              message: "Address must be at least 20 characters long",
            },
          })}
          className={errors.address ? "input-error" : ""}
        />
        {errors.address && (
          <span className="error-message">{errors.address.message}</span>
        )}

        <label>Card Number</label>
        <input
          type="number"
          {...register("cardNumber", {
            required: "Card number is required",
            minLength: {
              value: 12,
              message: "Card number must be at least 12 digits",
            },
            maxLength: {
              value: 19,
              message: "Card number cannot exceed 19 digits",
            },
          })}
          className={errors.cardNumber ? "input-error" : ""}
        />
        {errors.cardNumber && (
          <span className="error-message">{errors.cardNumber.message}</span>
        )}

        <div className="card-details">
          <div>
            <label>Expiry</label>
            <input
              type="text"
              {...register("expiry", {
                required: "Expiry date is required",
                pattern: {
                  value: /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/,
                  message: "Invalid expiry date",
                },
              })}
              className={errors.expiry ? "input-error" : ""}
            />
            {errors.expiry && (
              <span className="error-message">{errors.expiry.message}</span>
            )}
          </div>
          <div>
            <label>CVC</label>
            <input
              type="password"
              {...register("cvc", {
                required: "CVC is required",
                minLength: {
                  value: 3,
                  message: "CVC must be at least 3 digits",
                },
                maxLength: {
                  value: 4,
                  message: "CVC cannot exceed 4 digits",
                },
              })}
              className={errors.cvc ? "input-error" : ""}
            />
            {errors.cvc && (
              <span className="error-message">{errors.cvc.message}</span>
            )}
          </div>
        </div>

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}
