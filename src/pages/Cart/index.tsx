import { FC } from "react";

import Container from "@components/organisms/Container";
import ShoppingCart from "@components/organisms/ShoppingCart";
import OrderSummary from "@components/organisms/OrderSummary";
import ShippingSection from "@components/organisms/ShippingSection";

const CartPage: FC = () => {
  return (
    <main>
      <section>
        <Container>
          <div>
            <div>
              <ShoppingCart />
              <OrderSummary />
            </div>
            <div>
              <ShippingSection></ShippingSection>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CartPage;
