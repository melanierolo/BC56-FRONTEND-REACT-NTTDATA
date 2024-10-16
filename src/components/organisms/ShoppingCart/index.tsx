import { FC, useState } from "react";

import Table from "@components/organisms/Table";
import Button from "@components/atoms/Button";
import QuantityStepper from "@components/molecules/QuantityStepper";

import { Product } from "@domain/interfaces/product.interface";

import trashIcon from "@assets/icons/trash-icon.svg";

import "./style.css";

const ShoppingCart: FC = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 9.99,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
    {
      id: 1,
      title: "Essence Mascara Lash Princess Essence Mascara Lash Princess",
      description:
        "The Essence Mascara Lash Princess is a popular mascara known for its volumizing and lengthening effects. Achieve dramatic lashes with this long-lasting and cruelty-free formula.",
      category: "beauty",
      price: 999999.99,
      rating: 4.94,
      stock: 5,
      tags: ["beauty", "mascara"],
      brand: "Essence",
      images: [
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png",
      ],
      thumbnail:
        "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png",
    },
  ]);

  const columns = [
    { header: "Product", key: "image" },
    { header: "Title", key: "title" },
    { header: "Quantity", key: "quantity" },
    { header: "Price", key: "price" },
    { header: "Action", key: "action" },
  ];

  const renderRow = (product: Product) => (
    <>
      <td className="table__cell">
        <img
          src={product.thumbnail}
          alt={`image-${product.title.replace(/ /g, "-").toLowerCase()}`}
          width="120px"
        ></img>
      </td>
      <td className="table__cell">
        <p style={{ fontWeight: 600 }}>{product.title}</p>
        <p style={{ color: "var(--text-body-secondary)" }}>{product.brand}</p>
      </td>
      <td className="table__cell">
        <QuantityStepper
          onDecrease={() => console.log("-1")}
          onIncrease={() => console.log("+1")}
          value={1}
          max={product.stock}
        ></QuantityStepper>
      </td>
      <td className="table__cell">
        <p style={{ fontWeight: 600, color: "var(--color-primary)" }}>{product.price}</p>
      </td>
      <td className="table__cell">
        <Button
          color="none"
          onClick={() => {
            console.log("delete item:", product.title);
          }}
        >
          {<img src={trashIcon} alt="delete item icon" height="20px"></img>}
        </Button>
      </td>
    </>
  );

  return (
    <div className="shopping-cart">
      <h2 className="shopping-cart__title">Shopping cart</h2>
      <p className="shopping-cart__paragraph">You have 1 item in your cart</p>
      <Table columns={columns} data={products} renderRow={renderRow}></Table>
    </div>
  );
};

export default ShoppingCart;
