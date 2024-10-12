import { FC } from "react";
import { useState, useEffect } from "react";

import SearchSection from "@components/organisms/SearchSection";
import Container from "@components/organisms/Container";
import ProductList from "@components/organisms/ProductList";

import { getProducts } from "@services/product.service";

import { Product } from "@domain/interfaces/product.interface";

import { filterProducts } from "@root/utilities/filter-producs.utility";

const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  const getDataProducts = async (): Promise<void> => {
    try {
      const products = await getProducts();
      setProducts(products);
      setFilteredProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getDataProducts();
  }, []);

  useEffect(() => {
    const filtered = filterProducts(products, searchTerm);
    setFilteredProducts(filtered);
  }, [products, searchTerm]);

  return (
    <main>
      <Container>
        <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <ProductList products={filteredProducts}></ProductList>
      </Container>
    </main>
  );
};

export default Products;
