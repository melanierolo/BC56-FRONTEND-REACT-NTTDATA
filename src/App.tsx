import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductsRoutes from "@pages/ProductsRoutes";

import LoginPage from "@root/pages/Login";

import { CartProvider } from "./contexts/CartContext";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path="login" element={<LoginPage />}></Route>
          <Route path="/*" element={<ProductsRoutes />}></Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
