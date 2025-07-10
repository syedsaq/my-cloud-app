export default function Contact() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
      <p className="mb-6">
        We’d love to hear from you! Here’s how you can reach us:
      </p>

      <div className="space-y-4">
        <div>
          <span className="font-semibold">Email:</span>{' '}
          <a href="mailto:info@example.com" className="text-blue-600 underline">
            info@example.com
          </a>
        </div>

        <div>
          <span className="font-semibold">Phone:</span> +1 (234) 567-890
        </div>

        <div className="flex space-x-4 mt-4">
          <a
            href="https://twitter.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Twitter
          </a>
          <a
            href="https://linkedin.com/in/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourhandle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:underline"
          >
            GitHub
          </a>
        </div>
      </div>
    </>
  );
}
