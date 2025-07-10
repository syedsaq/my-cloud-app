import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'

export const metadata = {
  title: "My Next.js Site",
  description: "A simple site with header and footer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="container mx-auto p-4 flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
