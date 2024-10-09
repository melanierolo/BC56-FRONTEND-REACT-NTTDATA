import { getProducts } from './services.js';
import { displayProducts } from './components.js';

// Initialize
export async function init() {
  try {
    const products = await getProducts();

    // display all products initially
    displayProducts(products);
  } catch (error) {
    console.error('Error initializing:', error);
  }
}
