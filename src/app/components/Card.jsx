"use client";
import { useState } from "react";

export default function Card({ name, role, email }) {
  const [showEmail, setShowEmail] = useState(false);

  return (
    <div className="bg-gray-200 p-4 m-2 border w-64">
      <h2 className="text-lg font-semibold">{name} - {role}</h2>
      <p>{showEmail ? email : "-"}</p>
      <button
        onClick={() => setShowEmail(!showEmail)}
        className="mt-2 px-4 py-2 bg-green-700 text-white rounded"
      >
        {showEmail ? "Hide Email" : "Show Email"}
      </button>
    </div>
  );
}
