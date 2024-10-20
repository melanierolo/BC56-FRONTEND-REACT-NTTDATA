import { FC } from "react";

import Container from "@components/organisms/Container";
import ShoppingCart from "@components/organisms/ShoppingCart";
import OrderSummary from "@components/organisms/OrderSummary";
import ShippingSection from "@components/organisms/ShippingSection";

import "./style.css";

const CartPage: FC = () => {
  return (
    <main>
      <section className="cart">
        <Container>
          <div className="cart__container">
            <div className="cart__shopping-cart">
              <ShoppingCart />
            </div>
            <div className="cart__order-summary">
              <OrderSummary />
            </div>
            <div className="cart__shipping-section">
              <ShippingSection></ShippingSection>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CartPage;
