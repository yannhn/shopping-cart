import { useState } from "react";

function ShoppingItem({ title, price }) {
  const [count, setCount] = useState(0);
  const [cost, setCost] = useState(0);

  const increaseCounter = () => {
    setCount(() => count + 1);
    setCost(() => price * count);
  };

  const decreaseCounter = () => {
    if (count > 0) {
      setCount(() => count - 1);
      setCost(() => count - price);
    }
  };

  const resetCounter = () => {
    setCount(0);
    setCost(0);
  };

  return (
    <>
      <section>
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
        <p>Total: {cost}</p>
      </section>
    </>
  );
}

export default ShoppingItem;
