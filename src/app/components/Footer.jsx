export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white p-4 mt-10">
      <div className="container mx-auto text-center">
        &copy; {new Date().getFullYear()} My Site
      </div>
    </footer>
  );
}