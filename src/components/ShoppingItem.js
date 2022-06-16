import { useState } from "react";

function ShoppingItem() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section>
        <h2>Shopping Item</h2>
        <h3>??? per piece</h3>
        <button type="button" onClick={() => setCount(count + 1)}>
          +
        </button>
        <button type="button" onClick={() => setCount(count - 1)}>
          -
        </button>
        <button type="button" onClick={() => setCount(0)}>
          RESET
        </button>
        <p>Amount: {count}</p>
        <p>Total: </p>
      </section>
    </>
  );
}

export default ShoppingItem;
