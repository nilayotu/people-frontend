"use client";

import { useState } from "react";
import { createPerson } from "@/lib/api";

export default function CreatePage() {
  const [formData, setFormData] = useState({ name: "", email: "", rank: "" });
  const [message, setMessage] = useState("");
  const [messageColor, setMessageColor] = useState("black");

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
      setMessageColor("red");
      return;
    }
    if (rankNum <= currentUserRank) {
      setMessage("You can only create users with rank lower than yours");
      setMessageColor("red");
      return;
    }

    try {
      const res = await createPerson({ ...formData, rank: rankNum }, currentUserId);
      setMessage(res.message);
      setMessageColor("green");
      setFormData({ name: "", email: "", rank: "" }); // formu temizle
    } catch (err: any) {
      setMessage(err.response?.data?.message || "Error occurred");
      setMessageColor("red");
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "300px" }}>
      <input
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
        required
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
      />
      <button type="submit">Create</button>
      {message && <p style={{ color: messageColor }}>{message}</p>}
    </form>
  );
}