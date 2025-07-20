"use client";

import { useEffect, useState } from "react";

const FeedbackGrid = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [search, setSearch] = useState("");
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [editingId, setEditingId] = useState(null);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const [page, setPage] = useState(1);
  const perPage = 6;

  // ✅ Re-fetch when page or search changes
  useEffect(() => {
    fetchFeedback();
  }, [page, search]);

  const fetchFeedback = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/contact?page=${page}&limit=${perPage}&search=${encodeURIComponent(search)}`);
      const data = await res.json();
      setFeedbacks(data.feedbacks);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Error fetching feedbacks:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm("Are you sure you want to delete this feedback?")) return;
    await fetch("/api/contact", {
      method: "DELETE",
      body: JSON.stringify({ id }),
    });
    fetchFeedback();
  };

  const handleEdit = (feedback) => {
    setEditingId(feedback._id);
    setFormData({
      name: feedback.name,
      email: feedback.email,
      message: feedback.message,
    });
  };

  const handleUpdate = async () => {
    await fetch("/api/contact", {
      method: "PUT",
      body: JSON.stringify({ id: editingId, ...formData }),
    });
    setEditingId(null);
    fetchFeedback();
  };

  if (loading) return <div className="text-center py-8">Loading...</div>;

  return (
    <div className="p-4 max-w-6xl mx-auto">
      {/* Search */}
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1); // ✅ reset to page 1 on search
        }}
        className="mb-4 p-2 border w-full rounded"
      />

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {feedbacks.length === 0 ? (
          <p className="col-span-full text-center text-gray-500">No feedback found.</p>
        ) : (
          feedbacks.map((feedback) => (
            <div key={feedback._id} className="border rounded p-4 shadow-md bg-white relative">
              {editingId === feedback._id ? (
                <>
                  <input
                    className="mb-2 w-full p-1 border rounded"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                  <input
                    className="mb-2 w-full p-1 border rounded"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                  <textarea
                    className="w-full p-1 border rounded"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                  <div className="flex gap-2 mt-2">
                    <button className="bg-green-500 text-white px-2 py-1 rounded" onClick={handleUpdate}>
                      Save
                    </button>
                    <button
                      className="bg-gray-500 text-white px-2 py-1 rounded"
                      onClick={() => setEditingId(null)}
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <h3 className="font-bold text-lg">{feedback.name}</h3>
                  <p className="text-sm text-gray-600">{feedback.email}</p>
                  <p className="mt-2 text-gray-800">{feedback.message}</p>
                  <div className="absolute top-2 right-2 flex gap-2">
                    <button onClick={() => handleEdit(feedback)} className="text-blue-600 text-sm">
                      Edit
                    </button>
                    <button onClick={() => handleDelete(feedback._id)} className="text-red-600 text-sm">
                      Delete
                    </button>
                  </div>
                </>
              )}
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center mt-6 gap-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border rounded ${
                page === i + 1 ? "bg-blue-500 text-white" : "bg-white text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default FeedbackGrid;
