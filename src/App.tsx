import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";

import HomePage from "@pages/Home";
import ProductsPage from "@pages/Products";
import CartPage from "@pages/Cart";
import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/products" element={<ProductsPage />}></Route>
          <Route path="/cart" element={<CartPage />}></Route>
          <Route path="/*" element={<Navigate to="/" />}></Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
