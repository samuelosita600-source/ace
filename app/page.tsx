"use client";

import { useState } from "react";

export default function Home() {
  const [message, setMessage] = useState("");
  const [response, setResponse] = useState("");

  async function sendMessage() {
    if (!message.trim()) return;

    const res = await fetch("/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
      }),
    });

    const data = await res.json();

    setResponse(data.message);
  }

  return (
    <main className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-2xl space-y-4">
        <h1 className="text-3xl font-bold">ACE</h1>

        <textarea
          className="w-full rounded-lg border p-4"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Talk to ACE..."
        />

        <button
          onClick={sendMessage}
          className="rounded-lg bg-black px-6 py-3 text-white"
        >
          Send
        </button>

        <div className="rounded-lg border p-4 min-h-32">
          {response || "ACE is waiting..."}
        </div>
      </div>
    </main>
  );
}
