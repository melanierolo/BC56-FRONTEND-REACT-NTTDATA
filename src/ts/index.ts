import { getProducts } from './services.js';
import { displayProducts } from './components.js';

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

    // display all products initially
    displayProducts(products);
  } catch (error) {
    console.error('Error initializing:', error);
  }
}
