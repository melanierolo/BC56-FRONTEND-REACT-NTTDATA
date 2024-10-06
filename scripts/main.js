import { getProducts, getCategories } from "./services.js";
import { filterProducts, populateCategories } from "./dataController.js";
import {
  createProductCard,
  displayProductCountMessage,
  createNotFound,
} from "./components.js";

// DOM elements
const productListElement = document.getElementById("cards");
const searchInput = document.querySelector(".search__input");
const categoryInput = document.querySelector("#category");
const productCountElement = document.getElementById("product-count");

// Initialize
async function init() {
  try {
    const products = await getProducts();
    const categories = await getCategories();

    const storeCount = localStorage.getItem("product-count");
    productCountElement.textContent = storeCount ? storeCount : "0";

    populateCategories(categories);

    // display all products initially
    displayProducts(products);

    searchInput.addEventListener("input", () => {
      const filteredProducts = filterProducts(
        products,
        searchInput.value,
        categoryInput.value
      );

      displayProducts(filteredProducts);

      if (filteredProducts.length === 0) {
        const notFound = createNotFound();
        console.log(notFound);
        productListElement.appendChild(notFound);
      }
    });

    categoryInput.addEventListener("input", () => {
      const filteredProducts = filterProducts(
        products,
        searchInput.value,
        categoryInput.value
      );

      displayProducts(filteredProducts);

      if (filteredProducts.length === 0) {
        const notFound = createNotFound();
        productListElement.appendChild(notFound);
      }
    });
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

function displayProducts(products) {
  const countProducts = products.length ? products.length : 0;

  while (productListElement.firstChild) {
    productListElement.removeChild(productListElement.firstChild);
  }

  displayProductCountMessage(countProducts);

  products.forEach((product) => {
    const card = createProductCard(product);
    productListElement.appendChild(card);
  });
}

// start application
init();
