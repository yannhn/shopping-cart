import "./App.css";
import { useState } from "react";
import { nanoid } from "nanoid";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  const [items, setItems] = useState([
    { id: nanoid(), title: "Bananas", price: 0.5 },
    { id: nanoid(), title: "Apples", price: 0.6 },
    { id: nanoid(), title: "Avocados", price: 1.9 },
  ]);

  return (
    <>
      <Header></Header>
      <ShoppingItem></ShoppingItem>
      <Footer></Footer>
    </>
  );
}

export default App;
