import { Product } from "@domain/interfaces/product.interface";

export const mockProducts: Product[] = [
  {
    id: 4,
    title: "Red Lipstick",
    description:
      "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
    category: "beauty",
    price: 12.99,
    rating: 2.51,
    stock: 68,
    tags: ["beauty", "lipstick"],
    brand: "Chic Cosmetics",
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
    images: ["https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"],
  },
  {
    id: 5,
    title: "Red Nail Polish",
    description:
      "The Red Nail Polish offers a rich and glossy red hue for vibrant and polished nails. With a quick-drying formula, it provides a salon-quality finish at home.",
    category: "beauty",
    price: 8.99,
    rating: 3.91,
    stock: 71,
    tags: ["beauty", "nail polish"],
    brand: "Nail Couture",
    thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/thumbnail.png",
    images: ["https://cdn.dummyjson.com/products/images/beauty/Red%20Nail%20Polish/1.png"],
  },
  {
    id: 6,
    title: "Calvin Klein CK One",
    description:
      "CK One by Calvin Klein is a classic unisex fragrance, known for its fresh and clean scent. It's a versatile fragrance suitable for everyday wear.",
    category: "fragrances",
    price: 49.99,
    rating: 4.85,
    stock: 17,
    tags: ["fragrances", "perfumes"],
    brand: "Calvin Klein",
    thumbnail:
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/thumbnail.png",
    images: [
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/1.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/2.png",
      "https://cdn.dummyjson.com/products/images/fragrances/Calvin%20Klein%20CK%20One/3.png",
    ],
  },
];

export const mockProduct: Product = {
  id: 4,
  title: "Red Lipstick",
  description:
    "The Red Lipstick is a classic and bold choice for adding a pop of color to your lips. With a creamy and pigmented formula, it provides a vibrant and long-lasting finish.",
  category: "beauty",
  brand: "Chic Cosmetics",
  price: 12.99,
  rating: 2.51,
  stock: 68,
  tags: ["beauty", "lipstick"],
  thumbnail: "https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/thumbnail.png",
  images: ["https://cdn.dummyjson.com/products/images/beauty/Red%20Lipstick/1.png"],
};
