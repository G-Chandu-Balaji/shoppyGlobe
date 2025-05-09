import React, { useState } from "react";
import "./QuantityButton.css";

const QuantityInput = ({ min = 1, max = 10, initialValue = 1 }) => {
  const [quantity, setQuantity] = useState(initialValue);

  const handleIncrease = () => {
    if (quantity < max) setQuantity(quantity + 1);
  };

  const handleDecrease = () => {
    if (quantity > min) setQuantity(quantity - 1);
  };

  const handleChange = (e) => {
    const value = Math.max(min, Math.min(max, parseInt(e.target.value) || 0));
    setQuantity(value);
  };

  return (
    <div className="quantity-input">
      <button onClick={handleDecrease} disabled={quantity <= min}>
        −
      </button>
      <input
        type="number"
        value={quantity}
        onChange={handleChange}
        min={min}
        max={max}
      />
      <button onClick={handleIncrease} disabled={quantity >= max}>
        +
      </button>
    </div>
  );
};

export default QuantityInput;
