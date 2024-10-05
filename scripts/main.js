import { getProducts, getCategories } from "./services.js";
import { filterProducts, populateCategories } from "./dataController.js";
import { createProductCard } from "./components.js";

// DOM elements
const productListElement = document.getElementById("cards");
const searchInput = document.querySelector(".search__input");
const categoryInput = document.querySelector("#category");

// Initialize
async function init() {
  try {
    const products = await getProducts();
    const categories = await getCategories();

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
    });

    categoryInput.addEventListener("input", () => {
      const filteredProducts = filterProducts(
        products,
        searchInput.value,
        categoryInput.value
      );
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
