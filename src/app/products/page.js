import ProductList from '../components/ProductList';

export default function ProductsPage() {
  const products = [
    {
       id: 1,
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
    {
       id: 2,
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
       id: 3,
      name: 'Apple Watch Series 9',
      image: '/images/watch.jpeg',
      price: 399,
    },
    {
      id: 4,
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
      id: 5,
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
    {
       id: 6,
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
    {
      id: 7,
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
      id: 8,
      name: 'Apple Watch Series 9',
      image: '/images/watch.jpeg',
      price: 399,
    },
    {
      id: 9,
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
      id: 10,
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
    {
      id: 11,
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
      id: 12,
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Our Products</h1>
      <ProductList products={products} />
    </div>
  );
}
