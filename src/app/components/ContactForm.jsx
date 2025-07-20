"use client";

import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import Popup from "../components/Popup"; // ✅ import popup

const schema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Name is too short"),
  email: yup.string().required("Email is required").email("Must be a valid email"),
  subject: yup.string().required("Subject is required"),
  message: yup.string().required("Message is required").min(10, "At least 10 characters"),
});

export default function ContactForm() {
  const [showPopup, setShowPopup] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

const onSubmit = async (data) => {
  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    const result = await res.json(); // parse JSON always, even on error

    if (!res.ok) {
      console.error("Backend Response Error:", result.error || result);
      throw new Error(result.error || "Failed to submit");
    }

    console.log("Success:", result);
    setShowPopup(true);
    reset();

    setTimeout(() => setShowPopup(false), 3000);
  } catch (error) {
    console.error("❌ Submit Error:", error.message);
    alert("Submit failed: " + error.message);
  }
};


  return (
    <div className="relative max-w-xl mx-auto mt-10 p-6 bg-white shadow-md rounded-md">
      {/* ✅ Use the reusable Popup */}
      <Popup message="✅ Message sent successfully!" visible={showPopup} />

      <h2 className="text-2xl font-semibold mb-6 text-center">Contact Us</h2>

      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Name</label>
          <input
            {...register("name")}
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Your Name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            {...register("email")}
            className="w-full p-2 border border-gray-300 rounded"
            type="email"
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Subject */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Subject</label>
          <input
            {...register("subject")}
            className="w-full p-2 border border-gray-300 rounded"
            type="text"
            placeholder="Subject"
          />
          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">{errors.subject.message}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea
            {...register("message")}
            rows={5}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Your message..."
          />
          {errors.message && (
            <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </div>
  );
}
