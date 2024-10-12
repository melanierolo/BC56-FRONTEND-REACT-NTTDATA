import { FC } from "react";
import ProductCard from "@components/molecules/ProductCard";
import { Product } from "@domain/interfaces/product.interface";

import "./style.css";

interface ProductListProps {
  products: Product[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
  return (
    <section className="products">
      <div className="cards">
        {products.map((product: Product) => {
          return <ProductCard key={product.id} product={product} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
