import { FC, useContext } from "react";

import Table from "@components/organisms/Table";
import Button from "@components/atoms/Button";
import QuantityStepper from "@components/molecules/QuantityStepper";

import { CartContext } from "@root/contexts/CartContext";

import { Product } from "@domain/interfaces/product.interface";

import trashIcon from "@assets/icons/trash-icon.svg";

import "./style.css";

const ShoppingCart: FC = () => {
  const { totalItems, cart, decreaseProduct, addProduct, removeProduct } = useContext(CartContext);

  const columns = [
    { header: "Product", key: "image" },
    { header: "Title", key: "title" },
    { header: "Quantity", key: "quantity" },
    { header: "Price", key: "price" },
    { header: "Action", key: "action" },
  ];

  const renderRow = (cartItem: { item: Product; quantityOfItems: number }) => (
    <>
      <td className="table__cell">
        <img
          src={cartItem.item.thumbnail}
          alt={`image-${cartItem.item.title.replace(/ /g, "-").toLowerCase()}`}
          width="80px"
        ></img>
      </td>
      <td className="table__cell">
        <p style={{ fontWeight: 600 }}>{cartItem.item.title}</p>
        <p style={{ color: "var(--text-body-secondary)" }}>{cartItem.item.brand}</p>
      </td>
      <td className="table__cell">
        <QuantityStepper
          onDecrease={() => decreaseProduct(cartItem.item.id)}
          onIncrease={() => addProduct(cartItem.item, 1)}
          value={cartItem.quantityOfItems}
          max={cartItem.item.stock}
        ></QuantityStepper>
      </td>
      <td className="table__cell">
        <p style={{ fontWeight: 600, color: "var(--color-primary)" }}>
          {(cartItem.item.price * cartItem.quantityOfItems).toFixed(2)}
        </p>
      </td>
      <td className="table__cell">
        <Button
          color="none"
          onClick={() => {
            removeProduct(cartItem.item.id);
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
      <p className="shopping-cart__paragraph">You have {totalItems} item in your cart</p>
      <Table columns={columns} data={cart} renderRow={renderRow}></Table>
    </div>
  );
};

export default ShoppingCart;
