import { FC } from "react";
import { useState, useEffect } from "react";

import SearchSection from "@components/organisms/SearchSection";
import Container from "@components/organisms/Container";
import ProductList from "@components/organisms/ProductList";
import FilterByCategorySection from "@components/organisms/FilterByCategorySection";
import NotFoundCard from "@components/molecules/NotFoundCard";

import { getProducts } from "@services/product.service";
import { getCategories } from "@services/category.service";

import { Product } from "@domain/interfaces/product.interface";
import { Category } from "@domain/interfaces/category.interface";

import { filterProducts } from "@root/utilities/filter-producs.utility";

const Products: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [hasSearch, setHasSearch] = useState<boolean>(false);

  const getDataProducts = async (): Promise<void> => {
    try {
      const products = await getProducts();
      setProducts(products);
      setFilteredProducts(products);
    } catch (error) {
      console.error(error);
    }
  };

  const getDataCategories = async (): Promise<void> => {
    try {
      const categories = await getCategories();
      setCategories(categories);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCategoryChange = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
  };

  useEffect(() => {
    getDataProducts();
    getDataCategories();
  }, []);

  useEffect(() => {
    const filtered = filterProducts(products, searchTerm, selectedCategory);
    setFilteredProducts(filtered);
    setHasSearch(true);
  }, [products, searchTerm, selectedCategory]);

  return (
    <main>
      <Container>
        <SearchSection searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <FilterByCategorySection
          options={categories}
          onCategoryChange={handleCategoryChange}
          selectedCategory={selectedCategory}
          totalProducts={filteredProducts.length}
        ></FilterByCategorySection>
        {hasSearch && filteredProducts.length === 0 ? (
          <NotFoundCard />
        ) : (
          <ProductList products={filteredProducts}></ProductList>
        )}
      </Container>
    </main>
  );
};

export default Products;
