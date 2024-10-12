import "./App.css";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";

import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";

import Home from "@pages/Home";
import Products from "@pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/*" element={<Navigate to="/" />}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
