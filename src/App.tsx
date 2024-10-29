import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductsRoutes from "@pages/ProductsRoutes";

import LoginPage from "@root/pages/Login";

import { CartProvider } from "@root/contexts/CartContext";
import { AuthProvider } from "@root/contexts/AuthContext";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route path="login" element={<LoginPage />}></Route>
            <Route path="/*" element={<ProductsRoutes />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
