import { Product } from "./interfaces/product.interface";

export const mockProducts: Product[] = [
    {
      id: 'prd-001',
      name: 'Sunrise in Tuscany Painting',
      description: 'A vibrant oil painting capturing the warm colors of a sunrise over the Tuscan countryside.',
      country: 'Italy',
      price: 129.99,
      stock: 5,
      imageUrls: ['https://via.placeholder.com/300x200?text=Sunrise+Painting']
    },
    {
      id: 'prd-002',
      name: 'Handcrafted Ceramic Vase',
      description: 'A unique, hand-crafted ceramic vase with a beautiful blue glaze.',
      country: 'Greece',
      price: 49.95,
      stock: 10,
      imageUrls: ['https://via.placeholder.com/300x200?text=Ceramic+Vase']
    },
    {
      id: 'prd-003',
      name: 'Woven Bamboo Basket',
      description: 'A spacious and stylish woven bamboo basket, perfect for storage or decoration.',
      country: 'Indonesia',
      price: 24.50,
      stock: 15,
      imageUrls: ['https://via.placeholder.com/300x200?text=Woven+Basket']
    },
    {
      id: 'prd-004',
      name: 'Sterling Silver Necklace',
      description: 'A delicate sterling silver necklace with a handcrafted pendant.',
      country: 'Mexico',
      price: 79.99,
      stock: 2,
      imageUrls: ['https://via.placeholder.com/300x200?text=Silver+Necklace']
    }
  ];