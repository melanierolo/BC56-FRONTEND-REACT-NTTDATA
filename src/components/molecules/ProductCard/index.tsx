import { FC, useContext } from "react";

import { Product } from "@domain/interfaces/product.interface";
import { USD_CURRENCY } from "@root/domain/constants/currencies.constants";

import Button from "@components/atoms/Button";
import Chip from "@components/atoms/Chip";

import { CartContext } from "@root/contexts/CartContext";

import "./style.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const { addProduct } = useContext(CartContext);
  const handleAddToCart = () => {
    addProduct(product, 1);
  };

  return (
    <div className="card">
      <figure className="card__figure">
        <img
          className="card__img"
          src={product.thumbnail}
          alt={`products image - ${product.title}`}
        ></img>
      </figure>
      <div className="card__content">
        <p className="card__title">{product.title}</p>
        <p className="card__brand">{product.brand}</p>
        <div className="card__chips">
          {product.tags.map((tag: string, key: number) => {
            return <Chip key={`tag-${key}`} label={tag}></Chip>;
          })}
        </div>
        <div className="card__price">
          <p className="card__price-label">Price</p>
          <p className="card__price-value">{`${USD_CURRENCY.code} ${USD_CURRENCY.symbol} ${product.price} `}</p>
        </div>
      </div>
      <Button color="secondary" size="medium" fullWidth={true} onClick={handleAddToCart}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
