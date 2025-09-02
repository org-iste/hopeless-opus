import React, { useState, useEffect } from "react";
import morseAudio from "../assets/morse.wav"; 

const Morsecode = () => {
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(90);
  const [gameOver, setGameOver] = useState(false);

  // Timer countdown
  useEffect(() => {
    if (timeLeft > 0 && !gameOver) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);

      return () => clearInterval(timer);
    }

    // If timer hits 0 without success
    if (timeLeft === 0 && !gameOver) {
      setMessage("Game Over. Access denied");
      setGameOver(true);
    }
  }, [timeLeft, gameOver]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim().toLowerCase() === "unlock" && !gameOver) {
      setMessage("Access granted");
      setGameOver(true); // stop the game
    } else if (!gameOver) {
      setMessage("Access denied");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white font-mono relative">
      {/* Timer in top-right corner */}
      <div className="absolute top-4 right-6 text-xl font-bold text-red-400">
        {timeLeft}s
      </div>

      {/* Audio player */}
      <audio controls className="mb-6 w-64">
        <source src={morseAudio} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>

      {/* Input Form */}
      <form 
        onSubmit={handleSubmit} 
        className="flex flex-col sm:flex-row items-center gap-4"
      >
        <input
          type="text"
          placeholder="Enter the hidden code..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          disabled={gameOver}
          className="px-4 py-2 rounded-md bg-neutral-900 border border-gray-600 text-white 
                     placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <button 
          type="submit" 
          disabled={gameOver}
          className="px-6 py-2 rounded-md bg-gray-800 hover:bg-gray-700 text-white transition disabled:opacity-50"
        >
          Submit
        </button>
      </form>

      {/* Message */}
      <p
        className={`mt-6 text-lg ${
          message.includes("granted") ? "text-green-400" : "text-red-500"
        }`}
      >
        {message}
      </p>
    </div>
  );
};

export default Morsecode;
