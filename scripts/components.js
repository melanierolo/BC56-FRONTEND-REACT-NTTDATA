export function createProductCard(product) {
  const card = document.createElement("div");
  card.className = "card";

  const figure = document.createElement("figure");
  figure.className = "card__figure";

  const img = document.createElement("img");
  img.className = "card__img";
  img.src = product.images[0];
  img.alt = "Product Image";

  figure.appendChild(img);
  card.appendChild(figure);

  const content = document.createElement("div");
  content.className = "card__content";

  const title = document.createElement("p");
  title.className = "card__title";
  title.textContent = product.title;

  const brand = document.createElement("p");
  brand.className = "card__brand";
  brand.textContent = product.brand ?? "";

  const pills = document.createElement("div");
  pills.className = "card__pills";
  product.tags.forEach((tag) => {
    const pill = document.createElement("p");
    pill.className = "pill pill__text";
    pill.textContent = tag;
    pills.appendChild(pill);
  });

  const price = document.createElement("div");
  price.className = "card__price";
  const priceLabel = document.createElement("p");
  priceLabel.className = "card__price-label";
  priceLabel.textContent = "Price";

  const priceValue = document.createElement("p");
  priceValue.className = "card__price-value";
  priceValue.textContent = `USD$ ${product.price}`;

  price.appendChild(priceLabel);
  price.appendChild(priceValue);

  content.appendChild(title);
  content.appendChild(brand);
  content.appendChild(pills);
  content.appendChild(price);
  card.appendChild(content);

  const button = document.createElement("button");
  button.className = "btn btn--secondary btn--full-width add-to-cart";
  button.textContent = "Add to Cart";

  button.addEventListener("click", () => {
    addProductCart();
  });

  card.appendChild(button);

  return card;
}

export function addProductCart() {
  const currentCount = parseInt(localStorage.getItem("product-count")) || 0;
  const newCount = currentCount + 1;
  localStorage.setItem("product-count", newCount);

  const productCountElement = document.getElementById("product-count");
  productCountElement.textContent = newCount;
}

export function displayProductCountMessage(count) {
  const resultTextElement = document.querySelector(".filter__result-number");
  resultTextElement.textContent =
    count === 0
      ? "No products found"
      : `${count} product${count === 1 ? "" : "s"}`;
}

export function createNotFound() {
  console.log("hello not found");
  const notFound = document.createElement("article");
  notFound.className = "not-found";

  const title = document.createElement("h3");
  title.className = "not-found__title";
  title.textContent = "Search Results";

  const paragraph = document.createElement("p");
  paragraph.className = "not-found__paragraph";
  paragraph.textContent =
    "No results found. Please adjust your filters or keywords";

  const figure = document.createElement("figure");

  const img = document.createElement("img");
  img.className = "not-found__img";
  img.src = "../assets/images/not-found.png";
  img.alt = "not found - image";

  figure.appendChild(img);

  notFound.appendChild(title);
  notFound.appendChild(paragraph);
  notFound.appendChild(figure);

  return notFound;
}
