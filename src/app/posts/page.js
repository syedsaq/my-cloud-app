// app/posts/page.jsx
import PostCard from '../components/PostCard';

export default async function PostsPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  return (
    <div className="p-4 sm:p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">All Posts</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
