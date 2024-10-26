import { FC } from "react";
import ProductCard from "@components/molecules/ProductCard";
import { Product } from "@domain/interfaces/product.interface";

import "./style.css";

interface ProductListProps {
  products: Product[];
  onAddToCart: (product: Product, quantity: number) => void;
}

const ProductList: FC<ProductListProps> = ({ products, onAddToCart }) => {
  return (
    <section className="products">
      <div className="cards">
        {products.map((product: Product) => {
          return <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />;
        })}
      </div>
    </section>
  );
};

export default ProductList;
