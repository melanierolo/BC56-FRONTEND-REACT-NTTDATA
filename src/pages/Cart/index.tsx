import { FC } from "react";

import Container from "@components/organisms/Container";
import ShoppingCart from "@root/components/organisms/ShoppingCart";

const CartPage: FC = () => {
  return (
    <main>
      <Container>
        <section>
          <ShoppingCart />
        </section>
      </Container>
    </main>
  );
};

export default CartPage;
