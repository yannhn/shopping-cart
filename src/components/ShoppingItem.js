import { useState } from "react";

function ShoppingItem({ title, price, amount, handleDelete }) {
  const [count, setCount] = useState(amount);

  const increaseCounter = () => {
    setCount(() => count + 1);
  };

  const decreaseCounter = () => {
    if (count > 0) {
      setCount(() => count - 1);
    }
  };

  const resetCounter = () => {
    setCount(0);
  };

  return (
    <>
      <section>
        <button type="button" onClick={handleDelete}>
          Delete
        </button>
        <h2>{title}</h2>
        <h3>{price} per piece</h3>
        <button type="button" onClick={increaseCounter}>
          +
        </button>
        <button type="button" onClick={decreaseCounter}>
          -
        </button>
        <button type="button" onClick={resetCounter}>
          RESET
        </button>
        <p>Amount: {count}</p>
        <p>Total: {(count * price).toFixed(2)} €</p>
      </section>
    </>
  );
}

export default ShoppingItem;
