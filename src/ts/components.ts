import { filterProducts } from './dataController';
import { Product, CategoryFilter } from './interfaces';
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
  const countProducts = products.length ? products.length : 0;

  if (!productListElement) {
    throw new Error('product elements not found');
  }

  while (productListElement.firstChild) {
    productListElement.removeChild(productListElement.firstChild);
  }

  displayProductCountMessage(countProducts);

  products.forEach((product) => {
    const card = createProductCard(product);
    productListElement.appendChild(card);
  });
}

export function displayProductCountMessage(count: number): void {
  const resultTextElement = document.querySelector('.filter__result-number');
  if (resultTextElement) {
    resultTextElement.textContent =
      count === 0
        ? 'No products found'
        : `${count} product${count === 1 ? '' : 's'}`;
  }
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

export function populateCategories(categories: CategoryFilter[]): void {
  const categoryList = document.getElementById('categories');

  if (!categoryList) {
    throw new Error('category list element not found');
  }

  while (categoryList.firstChild) {
    categoryList.removeChild(categoryList.firstChild);
  }
  categories.forEach((category) => {
    const option = document.createElement('option');
    option.value = category.name;
    categoryList.appendChild(option);
  });
}

export function searchAndFilterListeners(products: Product[]): void {
  const productListElement = document.getElementById(
    'cards',
  ) as HTMLElement | null;
  const searchInput = document.querySelector(
    '.search__input',
  ) as HTMLInputElement;
  const categoryInput = document.querySelector(
    '#category',
  ) as HTMLSelectElement;

  searchInput.addEventListener('input', () => {
    const filteredProducts = filterProducts(
      products,
      searchInput.value,
      categoryInput.value,
    );

    displayProducts(filteredProducts);

    if (filteredProducts.length === 0) {
      if (!productListElement) {
        throw new Error('product list element not found');
      }

      const notFound = createNotFound();
      productListElement.appendChild(notFound);
    }
  });

  categoryInput.addEventListener('input', () => {
    const filteredProducts = filterProducts(
      products,
      searchInput.value,
      categoryInput.value,
    );

    displayProducts(filteredProducts);

    if (!productListElement) {
      throw new Error('product list element not found');
    }
    if (filteredProducts.length === 0) {
      const notFound = createNotFound();
      productListElement.appendChild(notFound);
    }
  });
}

export function createNotFound(): HTMLElement {
  const notFound: HTMLElement = document.createElement('article');
  notFound.className = 'not-found';

  const title: HTMLElement = document.createElement('h3');
  title.className = 'not-found__title';
  title.textContent = 'Search Results';

  const paragraph: HTMLElement = document.createElement('p');
  paragraph.className = 'not-found__paragraph';
  paragraph.textContent =
    'No results found. Please adjust your filters or keywords';

  const figure: HTMLElement = document.createElement('figure');

  const img: HTMLImageElement = document.createElement('img');
  img.className = 'not-found__img';
  img.src = '../assets/images/not-found.png';
  img.alt = 'not found - image';

  figure.appendChild(img);

  notFound.appendChild(title);
  notFound.appendChild(paragraph);
  notFound.appendChild(figure);

  return notFound;
}
