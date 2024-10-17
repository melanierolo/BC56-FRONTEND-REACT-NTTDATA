import { FC } from "react";

import Container from "@components/organisms/Container";
import ShoppingCart from "@root/components/organisms/ShoppingCart";
import OrderSummary from "@root/components/organisms/OrderSummary";

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
            <div></div>
          </div>
        </Container>
      </section>
    </main>
  );
};

export default CartPage;
