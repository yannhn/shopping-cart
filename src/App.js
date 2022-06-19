import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShoppingItem from "./components/ShoppingItem";
import TotalPrice from "./components/TotalPrice";
import InputNewItem from "./components/InputNewItem";

function App() {
  const [items, setItems] = useState([
    { id: nanoid(), title: "Bananas", price: 0.5, amount: 0 },
    { id: nanoid(), title: "Apples", price: 0.6, amount: 0 },
    { id: nanoid(), title: "Avocados", price: 1.9, amount: 0 },
  ]);

  const handleIncrease = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount + 1 };
      } else {
        return item;
      }
    });
    if (newItems.reduce((a, b) => a + b.amount * b.price, 0) <= 30) {
      setItems(newItems);
    }
  };

  const handleDecrease = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, amount: item.amount - 1 };
      } else {
        return item;
      }
    });
    if (!newItems.find((item) => item.amount < 0)) {
      setItems(newItems);
    }
  };

  // FIXME: Fix reset

  // const handleReset = (id) => {
  //   const newItems = items.map((item) => {
  //     if (item.id === id) {
  //       return {
  //         ...item,
  //         amount: item.amount - item.amount,
  //         price: item.price - item.price,
  //       };
  //     } else {
  //       return item;
  //     }
  //   });
  //   setItems(newItems);
  // };

  const handleDelete = (id) => {
    setItems((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  const addNewItem = (title, price) => {
    const newItems = [...items, { id: nanoid(), title, price, amount: 0 }];
    setItems(newItems);
  };

  const totalPrice = items.reduce(
    (previousTotal, currentTotal) =>
      previousTotal + currentTotal.amount * currentTotal.price,
    0
  );
  const fixedPrice = totalPrice.toFixed(2);

  return (
    <section className="min-h-screen bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <Header></Header>
      <TotalPrice fixedPrice={fixedPrice}></TotalPrice>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          handleIncrease={() => handleIncrease(item.id)}
          handleDecrease={() => handleDecrease(item.id)}
          // handleReset={() => handleReset(item.id)}
          handleDelete={() => handleDelete(item.id)}
        ></ShoppingItem>
      ))}
      <InputNewItem addNewItem={addNewItem}></InputNewItem>
      <Footer></Footer>
    </section>
  );
}

export default App;
