import React, { useState } from "react";
import backgroundImage from "./history.jpg"; // Your historical background

export default function CaesarCipherPuzzle() {
  const cipherText = "Zvuv Whgga Xbhzap Vvthup"; // +7 Caesar cipher of "Sono Pazzi Questi Romani"
  const correctAnswer = "theseromansarecrazy";
  const [input, setInput] = useState("");
  const [isCorrect, setIsCorrect] = useState(false);
  const [submitted, setSubmitted] = useState(false); // Track if submitted

  const handleSubmit = () => {
    setSubmitted(true); // Mark as submitted
    if (input.toLowerCase().replace(/\s+/g, "") === correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-center p-6 relative font-serif"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "'IM Fell English', serif",
      }}
    >
      {/* Softer blur overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-xl text-[#f5f0e1]">
        <h1 className="text-4xl font-bold mb-6 tracking-wide drop-shadow-md">
          Decode the scroll of forgotten tongues, then reveal its message as you would speak it.
        </h1>

        <p className="text-2xl mb-8 text-[#e6d5b8] drop-shadow-md">
          {cipherText}
        </p>

        <input
          type="text"
          placeholder="Enter your answer"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="p-3 rounded-lg w-full mb-4 border border-[#a07855] bg-[#f5f0e1] text-[#4b3832] focus:outline-none focus:ring-2 focus:ring-[#a07855] shadow-md"
        />

        <button
          onClick={handleSubmit}
          className="px-6 py-3 rounded-lg bg-[#6f4e37] hover:bg-[#5c4033] text-[#f5f0e1] font-semibold transition shadow-lg"
        >
          Submit
        </button>

        {submitted && isCorrect && (
          <p
            className="mt-6 text-2xl font-bold animate-pulse"
            style={{
              color: "#c4a484", // parchment/old brown
              textShadow: "0 0 10px rgba(196, 164, 132, 0.8)", // soft glow
            }}
          >
            Congratulations, the veil is lifted.
          </p>
        )}
        {submitted && !isCorrect && (
          <p className="mt-6 text-lg text-[#e07a5f]">
            The riddle remains sealed. Return with sharper eyes..
          </p>
        )}
      </div>
    </div>
  );
}
