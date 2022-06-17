function TotalPrice(props) {
  const total = props.items.reduce(
    (prevValue, currentValue) => prevValue + currentValue.price,
    0
  );
  return <p>Totalzzz: {total}</p>;
}
export default TotalPrice;
