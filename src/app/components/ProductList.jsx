import ProductCard from './ProductCard';

export default function ProductList({ products }) {
  return (
    <div className="flex flex-wrap gap-4">
      {products.map((product, index) => (
        <ProductCard key={index} product={product} />
      ))}
    </div>
  );
}