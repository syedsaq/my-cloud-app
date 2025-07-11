import ProductList from '../components/ProductList';

export default function ProductsPage() {
  const products = [
    {
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
    {
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
      name: 'Apple Watch Series 9',
      image: '/images/watch.jpeg',
      price: 399,
    },
     {
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
        {
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
        {
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
    {
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
      name: 'Apple Watch Series 9',
      image: '/images/watch.jpeg',
      price: 399,
    },
     {
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
        {
      name: 'iPhone 15 Pro',
      image: '/images/iphone.jpg',
      price: 999,
    },
         {
      name: 'MacBook Air M3',
      image: '/images/mac.jpeg',
      price: 1299,
    },
    {
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
