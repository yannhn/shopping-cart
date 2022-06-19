import { useState } from "react";
function InputNewItem({ addNewItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewItem(name, price);
  };

  return (
    <>
      <form className="form flex justify-center" onSubmit={handleSubmit}>
        <label htmlFor="input-name">Name:</label>
        <input
          id="input-name"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label htmlFor="input-price">Price per piece:</label>
        <input
          id="input-price"
          type="number"
          value={price}
          onChange={(event) => setPrice(event.target.value)}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
}

export default InputNewItem;
