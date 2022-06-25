function ShoppingItem({
  title,
  price,
  amount,
  handleDelete,
  handleIncrease,
  handleDecrease,
  // handleReset,
}) {
  return (
    <>
      <section className="flex justify-center">
        <section className="bg-white rounded shadow-md shadow-indigo-600/40 md:container m-4 w-64">
          <section className="flex justify-end">
            <button
              type="button"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded "
              onClick={handleDelete}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
            </button>
          </section>
          <section>
            <h2 className="flex justify-center text-2xl font-bold">{title}</h2>
            <h3 className="flex justify-center text-lg font-medium">
              {price} per piece
            </h3>
          </section>
          <section className="flex justify-center">
            <button
              type="button"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 m-2 border border-blue-500 hover:border-transparent rounded"
              onClick={handleIncrease}
            >
              +
            </button>
            <button
              type="button"
              className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-6 m-2 border border-blue-500 hover:border-transparent rounded"
              onClick={handleDecrease}
            >
              -
            </button>
            {/* <button
            type="button"
            className="bg-red-400 hover:bg-red-500 text-gray-800 font-bold py-2 px-4 rounded-l"
            onClick={handleReset}
          >
            RESET
          </button> */}
          </section>
          <section className="divide-y-2 divide-dotted flex-col justify-center items-center">
            <p className="items-center flex justify-center text-xl">
              Amount: {amount}
            </p>
            <p className="items-center flex justify-center text-xl">
              Total: {(amount * price).toFixed(2)} €
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default ShoppingItem;
