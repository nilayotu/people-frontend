"use client";

import { useState } from "react";
import { createPerson } from "@/lib/api";

export default function CreatePage() {
  const [formData, setFormData] = useState({ name: "", email: "", rank: "" });
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("text-black");

  const currentUserId = "123";
  const currentUserRank = 3;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const rankNum = Number(formData.rank);
    if (rankNum < 1 || rankNum > 10) {
      setMessage("Rank must be between 1 and 10");
      setMessageColor("text-red-500");
      return;
    }
    if (rankNum <= currentUserRank) {
      setMessage("You can only create users with rank lower than yours");
      setMessageColor("text-red-500");
      return;
    }

    try {
      const res = await createPerson({ ...formData, rank: rankNum }, currentUserId);
      setMessage(res.message);
      setMessageColor("text-green-600");
      setFormData({ name: "", email: "", rank: "" });
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error occurred");
      setMessageColor("text-red-500");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-[200px] md:w-[400px] bg-white p-6 rounded-xl shadow-lg"
      >
        <input
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="email"
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          name="rank"
          type="number"
          placeholder="Rank"
          value={formData.rank}
          onChange={handleChange}
          required
          min={1}
          max={10}
          className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md transition"
        >
          Create
        </button>
        {message && (
          <p className={`text-center font-medium ${messageColor}`}>{message}</p>
        )}
      </form>
    </div>
  );
}