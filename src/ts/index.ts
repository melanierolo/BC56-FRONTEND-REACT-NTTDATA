import { getProducts, getCategories } from './services.js';
import {
  displayProducts,
  populateCategories,
  searchAndFilterListeners,
} from './components.js';

// Initialize
export async function init() {
  try {
    const productCountElement = document.getElementById('product-count');
    const storeCount = localStorage.getItem('product-count');
    if (!productCountElement) {
      throw new Error('product count element not found');
    }
    productCountElement.textContent = storeCount ? storeCount : '0';

    const products = await getProducts();
    const categories = await getCategories();

    populateCategories(categories);

    // display all products initially
    displayProducts(products);

    searchAndFilterListeners(products);
  } catch (error) {
    console.error('Error initializing:', error);
  }
}
