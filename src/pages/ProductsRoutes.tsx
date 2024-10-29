import { Route, Routes } from "react-router-dom";

import Header from "@components/organisms/Header";
import Footer from "@components/organisms/Footer";

import HomePage from "@pages/Home";
import ProductsPage from "@pages/Products";
import CartPage from "@pages/Cart";

import { PrivateRoutes } from "@root/router/PrivateRoutes";

const ProductsRoutes = () => {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route
          path="/products"
          element={
            <PrivateRoutes>
              <ProductsPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <PrivateRoutes>
              <CartPage />
            </PrivateRoutes>
          }
        ></Route>
        <Route path="*" element={<HomePage />}></Route>
      </Routes>
      <Footer></Footer>
    </>
  );
};

export default ProductsRoutes;
