import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";

import Home from "@pages/Home";
import Products from "@pages/Products";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<Products />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
