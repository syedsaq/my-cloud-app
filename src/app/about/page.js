import Card from "../components/Card";

export default function About() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        We are a passionate team building modern web experiences with Next.js and Tailwind CSS.
      </p>
      <div className="flex flex-wrap">
        <Card name="Afnan Yousuf" role="Trainer" email="afnanyousuf@gmail.com" />
        <Card name="Ali Khan" role="Developer" email="alikhan@example.com" />
        <Card name="Sara Ahmed" role="Designer" email="sara.ahmed@example.com" />
      </div>
    </>
  );
}