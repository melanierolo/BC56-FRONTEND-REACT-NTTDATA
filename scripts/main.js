console.log("Initial");

import { getProducts } from "./api.js";
import { createProductCard } from "./components.js";

// DOM elements
const productListElement = document.getElementById("cards");

// Initialize
async function init() {
  try {
    const products = await getProducts();

    // display all products initially
    displayProducts(products);
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

function displayProducts(products) {
  while (productListElement.firstChild) {
    productListElement.removeChild(productListElement.firstChild);
  }
  console.log("products:", products);

  products.forEach((product) => {
    const card = createProductCard(product);
    productListElement.appendChild(card);
  });
}

// start application
init();
