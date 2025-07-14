// export default function ProductCard({ product }) {
//   return (
//     <div className="border p-4 rounded shadow-md w-64 bg-white">
//       <img
//         src={product.image}
//         alt={product.name}
//         className="w-full h-40 object-cover mb-2 rounded"
//       />
//       <h2 className="text-lg font-semibold">{product.name}</h2>
//       <p className="text-green-600 font-bold">${product.price}</p>
//     </div>
//   );
// }

import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`}>
      <div className="cursor-pointer border p-4 rounded shadow-md w-64 bg-white hover:shadow-lg transition">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-40 object-cover mb-2 rounded"
        />
        <h2 className="text-lg font-semibold">{product.name}</h2>
        <p className="text-green-600 font-bold">${product.price}</p>
      </div>
    </Link>
  );
}
