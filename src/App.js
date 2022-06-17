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

  const handleDelete = (id) => {
    setItems((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
  };

  return (
    <section className="min-h-screen bg-gradient-to-t from-blue-100 via-blue-300 to-blue-500">
      <Header></Header>
      {items.map((item) => (
        <ShoppingItem
          key={item.id}
          title={item.title}
          price={item.price}
          amount={item.amount}
          handleDelete={() => handleDelete(item.id)}
        ></ShoppingItem>
      ))}
      <Footer></Footer>
    </section>
  );
}

export default App;
