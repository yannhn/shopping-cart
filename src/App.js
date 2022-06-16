import "./App.css";
import { useState } from "react";
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import ShoppingItem from "./components/ShoppingItem";

function App() {
  return (
    <>
      <Header></Header>
      <ShoppingItem></ShoppingItem>
      <Footer></Footer>
    </>
  );
}

export default App;
