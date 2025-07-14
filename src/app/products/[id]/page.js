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

export default async function ProductDetail({ params }) {
    const { id } = await params;
  const productId = parseInt(id);
  const product = products.find(p => p.id === productId);

  if (!product) return <div className="p-6">Product not found.</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt={product.name} className="w-96 mb-4 rounded" />
      <p className="text-green-600 font-bold text-xl">${product.price}</p>
    </div>
  );
}
