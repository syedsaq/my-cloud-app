import FeedbackGrid from "../components/FeedbackGrid";

export default function FeedbackPage() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">User Feedback</h1>
      <FeedbackGrid />
    </div>
  );
}