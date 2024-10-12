import { FC } from "react";

import { Product } from "@domain/interfaces/product.interface";

import Button from "@components/atoms/Button";

import "./style.css";

interface ProductCardProps {
  product: Product;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
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
        <div className="cards__pills">
          <p className="pill pill__text">pet supplies</p>
          <p className="pill pill__text">dog food</p>
        </div>
        <div className="card__price">
          <p className="card__price-label">Price</p>
          <p className="card__price-value">{`USD ${product.price} `}</p>
        </div>
      </div>
      <Button color="secondary" size="medium" fullWidth={true}>
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductCard;
