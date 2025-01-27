"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [message, setMessage] = useState<string>("Loading...");

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const response = await fetch("http://localhost:7071/api/testfunc");
        if (!response.ok) {
          throw new Error("Failed to fetch the message");
        }
        const text = await response.text();
        setMessage(text);
      } catch (error) {
        console.error(error);
        setMessage("Error fetching message");
      }
    };

    fetchMessage();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <ul className="list-inside justify-items-center text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <li>Function: {message} <br /> <br /></li>
          <li className="mb-2">*spinning wheel animation here idk*</li>
          <li>This site is currently under construction!</li>
          <li>Check back at ... some point</li>
          
        </ul>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="mailto:taleisha.dev@outlook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mail
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://www.linkedin.com/in/taleisha-gooden/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://github.com/timewilltale"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </footer>
    </div>
  );
}
