import React, { useState, useEffect } from "react";
import valImg from "./val.jpg";

const GRID_SIZE = 4; // 4x4 grid
const IMAGE_URL = valImg;

export default function Tiles() {
  const [tiles, setTiles] = useState([]);
  const [won, setWon] = useState(false);

  useEffect(() => {
    // Initialize tiles with random rotation
    const initialTiles = [];
    for (let i = 0; i < GRID_SIZE * GRID_SIZE; i++) {
      const rotation = [0, 90, 180, 270][Math.floor(Math.random() * 4)];
      initialTiles.push(rotation);
    }
    setTiles(initialTiles);
  }, []);

  const handleClick = (index) => {
    if (won) return; // stop if game is already won

    setTiles((prev) => {
      const newTiles = [...prev];
      newTiles[index] = (newTiles[index] + 90) % 360;

      // Check win condition
      const allCorrect = newTiles.every((rot) => rot === 0);
      if (allCorrect) {
        setWon(true);
      }

      return newTiles;
    });
  };

  const tileSize = 400 / GRID_SIZE; // assuming image 400x400

  return (
    <div
      style={{
        background: "#0D1A2F",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
      }}
    >
      <h1 style={{ marginBottom: "20px" }}>Rotation Puzzle</h1>

      {won && (
        <h2 style={{ color: "lime", marginBottom: "20px" }}>
          🎉 You Won! 🎉
        </h2>
      )}

      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${GRID_SIZE}, ${tileSize}px)`,
          gridTemplateRows: `repeat(${GRID_SIZE}, ${tileSize}px)`,
          border: "2px solid white",
          width: "fit-content",
          pointerEvents: won ? "none" : "auto", // disable clicks if won
        }}
      >
        {tiles.map((rotation, i) => {
          const row = Math.floor(i / GRID_SIZE);
          const col = i % GRID_SIZE;
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              style={{
                width: `${tileSize}px`,
                height: `${tileSize}px`,
                backgroundImage: `url(${IMAGE_URL})`,
                backgroundSize: `${400}px ${400}px`,
                backgroundPosition: `-${col * tileSize}px -${row * tileSize}px`,
                transform: `rotate(${rotation}deg)`,
                transition: "transform 0.2s ease",
                cursor: "pointer",
                boxSizing: "border-box",
                border: "1px solid #333",
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
