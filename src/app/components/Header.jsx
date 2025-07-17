import Link from 'next/link';



export default function Header() {
  return (
    <header className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Site</h1>
        <nav className="space-x-4">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/about" className="hover:underline">About</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/products" className="hover:underline">Product</Link>
          <Link href="/posts" className="hover:underline">Post</Link>
           <Link href="/contactus" className="hover:underline">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}