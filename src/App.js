import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  const [items, setItems] = useState([
    { id: nanoid(), title: "Bananas", price: 0.5, amount: 0 },
    { id: nanoid(), title: "Apples", price: 0.6, amount: 0 },
    { id: nanoid(), title: "Avocados", price: 1.9, amount: 0 },
  ]);

  return (
    <>
      <Header></Header>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
        ></ShoppingItem>
      ))}

      <Footer></Footer>
    </>
  );
}

export default App;
