import { Product } from './interfaces';
import { addProductToCart } from './services';

export function createProductCard(product: Product): HTMLElement {
  const card = document.createElement('div');
  card.className = 'card';

  const figure = document.createElement('figure');
  figure.className = 'card__figure';

  const img = document.createElement('img');
  img.className = 'card__img';
  img.src = product.images[0];
  img.alt = 'Product Image';

  figure.appendChild(img);
  card.appendChild(figure);

  const content = document.createElement('div');
  content.className = 'card__content';

  const title = document.createElement('p');
  title.className = 'card__title';
  title.textContent = product.title;

  const brand = document.createElement('p');
  brand.className = 'card__brand';
  brand.textContent = product.brand ?? '';

  const pills = document.createElement('div');
  pills.className = 'card__pills';
  product.tags.forEach((tag) => {
    const pill = document.createElement('p');
    pill.className = 'pill pill__text';
    pill.textContent = tag;
    pills.appendChild(pill);
  });

  const price = document.createElement('div');
  price.className = 'card__price';
  const priceLabel = document.createElement('p');
  priceLabel.className = 'card__price-label';
  priceLabel.textContent = 'Price';

  const priceValue = document.createElement('p');
  priceValue.className = 'card__price-value';
  priceValue.textContent = `USD$ ${product.price}`;

  price.appendChild(priceLabel);
  price.appendChild(priceValue);

  content.appendChild(title);
  content.appendChild(brand);
  content.appendChild(pills);
  content.appendChild(price);
  card.appendChild(content);

  const button = document.createElement('button');
  button.className = 'btn btn--secondary btn--full-width add-to-cart';
  button.textContent = 'Add to Cart';

  button.addEventListener('click', () => {
    updateCartCount();
  });

  card.appendChild(button);

  return card;
}

export function displayProducts(products: Product[]): void {
  // DOM elements
  const productListElement = document.getElementById(
    'cards',
  ) as HTMLElement | null;

  if (!productListElement) {
    throw new Error('product elements not found');
  }

  while (productListElement.firstChild) {
    productListElement.removeChild(productListElement.firstChild);
  }

  products.forEach((product) => {
    const card = createProductCard(product);
    productListElement.appendChild(card);
  });
}

export function updateCartCount(): void {
  const newCount = addProductToCart().toString();
  localStorage.setItem('product-count', newCount);

  const productCountElement = document.getElementById('product-count');
  if (!productCountElement) {
    throw new Error('product count element not found');
  }

  productCountElement.textContent = newCount;
}
