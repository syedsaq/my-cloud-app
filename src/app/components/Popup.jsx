// components/Popup.jsx
"use client";

export default function Popup({ message, visible }) {
  if (!visible) return null;

  return (
    <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 bg-green-500 text-white px-6 py-3 rounded shadow-lg transition-all duration-300">
      {message}
    </div>
  );
}
