// KnobPuzzle.jsx
import React, { useState, useEffect } from "react";
import valImg from "./val.jpg"; // replace or import another image

export default function KnobPuzzle({
  gridSize = 6,      // number of tiles per row/col (NxN)
  tileSize = 100,    // pixel size of each tile (standard size)
  imageSrc = valImg, // image to slice
}) {
  const [tiles, setTiles] = useState([]);
  const [won, setWon] = useState(false);

  const sizePx = tileSize * gridSize;

  // Initialize board in solved order and scramble it
  useEffect(() => {
    const initial = Array.from({ length: gridSize * gridSize }, (_, i) => i);

    // scramble by applying random knob rotations (rotate 2x2 blocks)
    let scrambled = [...initial];
    const scrambleMoves = Math.max(30, gridSize * gridSize * 6);
    for (let m = 0; m < scrambleMoves; m++) {
      const r = Math.floor(Math.random() * (gridSize - 1));
      const c = Math.floor(Math.random() * (gridSize - 1));
      scrambled = rotate2x2(scrambled, r, c, gridSize);
    }

    setTiles(scrambled);
    setWon(false);
  }, [gridSize, tileSize, imageSrc]);

  // rotate a 2x2 block clockwise at top-left (row, col)
  function rotate2x2(board, row, col, N) {
    const newBoard = board.slice();
    const idx = (r, c) => r * N + c;

    const a = idx(row, col);
    const b = idx(row, col + 1);
    const cIdx = idx(row + 1, col);
    const d = idx(row + 1, col + 1);

    // clockwise permutation: a <- c, c <- d, d <- b, b <- a
    const tmp = newBoard[a];
    newBoard[a] = newBoard[cIdx];
    newBoard[cIdx] = newBoard[d];
    newBoard[d] = newBoard[b];
    newBoard[b] = tmp;

    return newBoard;
  }

  // When a knob is clicked, rotate its 2x2 block
  function handleKnobClick(row, col) {
    if (won) return;
    const newTiles = rotate2x2(tiles, row, col, gridSize);
    setTiles(newTiles);
    const solved = newTiles.every((v, i) => v === i);
    if (solved) setWon(true);
  }

  // Render
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
        padding: 20,
      }}
    >
      <h1 style={{ marginBottom: 18 }}>Knob Rotation Puzzle</h1>

      {won && (
        <div
          style={{
            marginBottom: 12,
            padding: "8px 16px",
            borderRadius: 8,
            background: "rgba(196,164,132,0.12)",
            color: "#c4a484",
            boxShadow: "0 0 18px rgba(196,164,132,0.25)",
            fontWeight: "700",
          }}
        >
          🎉 Congratulations — the image is restored! 🎉
        </div>
      )}

      <div
        style={{
          position: "relative",
          width: `${sizePx}px`,
          height: `${sizePx}px`,
          display: "grid",
          gridTemplateColumns: `repeat(${gridSize}, ${tileSize}px)`,
          gridTemplateRows: `repeat(${gridSize}, ${tileSize}px)`,
          boxSizing: "content-box",
          background: "#111",
          overflow: "hidden",
        }}
      >
        {/* Tiles */}
        {tiles.map((tileIndex, i) => {
          const imgRow = Math.floor(tileIndex / gridSize);
          const imgCol = tileIndex % gridSize;
          return (
            <div
              key={i}
              style={{
                width: `${tileSize}px`,
                height: `${tileSize}px`,
                backgroundImage: `url(${imageSrc})`,
                backgroundSize: `${sizePx}px ${sizePx}px`,
                backgroundPosition: `-${imgCol * tileSize}px -${imgRow * tileSize}px`,
                boxSizing: "border-box",
                border: "1px solid rgba(255,255,255,0.03)",
              }}
            />
          );
        })}

        {/* Knobs: there are (gridSize - 1) x (gridSize - 1) */}
        {Array.from({ length: gridSize - 1 }).map((_, r) =>
          Array.from({ length: gridSize - 1 }).map((_, c) => {
            // knob position as percentage intersection between tiles:
            const leftPct = ((c + 1) / gridSize) * 100;
            const topPct = ((r + 1) / gridSize) * 100;
            return (
              <button
                key={`knob-${r}-${c}`}
                onClick={() => handleKnobClick(r, c)}
                aria-label={`Rotate block at ${r},${c}`}
                style={{
                  position: "absolute",
                  left: `${leftPct}%`,
                  top: `${topPct}%`,
                  transform: "translate(-50%, -50%)",
                  width: 26,
                  height: 26,
                  borderRadius: "50%",
                  border: "2px solid rgba(60,40,20,0.85)",
                  background:
                    "radial-gradient(circle at 35% 30%, rgba(255,255,255,0.12), rgba(0,0,0,0.6))",
                  boxShadow:
                    "0 2px 6px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
                  cursor: "pointer",
                  zIndex: 5,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 0,
                }}
              >
                {/* small inner dot for visual */}
                <span
                  style={{
                    display: "block",
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#cfa97a",
                    boxShadow: "0 0 8px rgba(207,169,122,0.6)",
                  }}
                />
              </button>
            );
          })
        )}
      </div>

      {/* Controls */}
      <div style={{ marginTop: 16, color: "#bbb", fontSize: 13 }}>
        Click any knob to rotate the 2×2 block clockwise.
      </div>
    </div>
  );
}
