import { BrowserRouter, Route, Routes } from "react-router-dom";

import ProductsRoutes from "@root/pages/ProductsRoutes";
import LoginPage from "@root/pages/Login";
import { PublicRoutes } from "@root/router/PublicRoutes";

import { CartProvider } from "@root/contexts/CartProvider";
import { AuthProvider } from "@root/contexts/AuthProvider";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/login/*"
              element={
                <PublicRoutes>
                  <Routes>
                    <Route path="/*" element={<LoginPage />} />
                  </Routes>
                </PublicRoutes>
              }
            />
            <Route path="/*" element={<ProductsRoutes />}></Route>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
