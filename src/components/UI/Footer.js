export default function Footer({ fixedPrice }) {
  return (
    <>
      <section className="sticky bottom-0 bg-white p-4 flex gap-4">
        <section className="flex justify-center w-full max-w-xs m-auto">
          <p className="text-m text-white bg-emerald-500 shadow-md rounded px-8 pt-4 pb-4">
            Total: {fixedPrice} €
          </p>
        </section>
        <section className="flex justify-center w-full max-w-xs m-auto">
          <p className="text-m text-white bg-red-500 shadow-md rounded px-8 pt-4 pb-4">
            Money left: {(30.0 - fixedPrice).toFixed(2)} €
          </p>
        </section>
      </section>
    </>
  );
}
