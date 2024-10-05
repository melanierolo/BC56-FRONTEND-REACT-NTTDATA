import { getProducts } from "./services.js";
import { filterProducts } from "./dataController.js";
import { createProductCard } from "./components.js";

// DOM elements
const productListElement = document.getElementById("cards");
const searchInput = document.querySelector(".search__input");

// Initialize
async function init() {
  try {
    const products = await getProducts();

    // display all products initially
    displayProducts(products);

    searchInput.addEventListener("input", () => {
      const filteredProducts = filterProducts(products, searchInput.value);
      displayProducts(filteredProducts);
    });
  } catch (error) {
    console.error("Error initializing:", error);
  }
}

function displayProducts(products) {
  while (productListElement.firstChild) {
    productListElement.removeChild(productListElement.firstChild);
  }

  products.forEach((product) => {
    const card = createProductCard(product);
    productListElement.appendChild(card);
  });
}

// start application
init();
