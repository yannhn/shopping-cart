function TotalPrice({ fixedPrice }) {
  return (
    <>
      <section className=" m-4">
        <h3 className="flex justify-center text-2xl bg-emerald-500 text-white rounded-xl shadow-md">
          Total: {fixedPrice} €
        </h3>
      </section>
      <section className=" m-4">
        <h4 className="flex justify-center text-2xl bg-amber-500 text-white rounded-xl shadow-md">
          Money left to spend: {(30.0 - fixedPrice).toFixed(2)} €
        </h4>
      </section>
    </>
  );
}

export default TotalPrice;
