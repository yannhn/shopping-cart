import { useState } from "react";

function InputNewItem({ addNewItem }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const handleSubmit = (event) => {
    event.preventDefault();
    addNewItem(name, price);
  };

  // TODO: finish styling

  return (
    <section className="w-full max-w-xs m-auto">
      <form
        className=" bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <section className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input-name"
          >
            Name:
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="input-name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </section>
        <section className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="input-price"
          >
            Price per piece:
          </label>
          <input
            className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="input-price"
            type="number"
            value={price}
            onChange={(event) => setPrice(event.target.value)}
          />
        </section>
        <section className="flex items-center justify-center">
          <button
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
            value="Submit"
          >
            Add
          </button>
        </section>
      </form>
    </section>
  );
}

export default InputNewItem;
