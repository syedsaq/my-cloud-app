// components/PostCard.jsx
import Link from 'next/link';

export default function PostCard({ post }) {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl hover:scale-[1.02] transition-transform duration-200 ease-in-out p-6 cursor-pointer">
        <h2 className="text-xl font-semibold mb-2 text-gray-800">
          {post.title}
        </h2>
        <p className="text-gray-600 line-clamp-3">
          {post.body}
        </p>
      </div>
    </Link>
  );
}
