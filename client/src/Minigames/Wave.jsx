import React, { useState, useRef, useEffect } from "react";

const Dial = ({ value, onChange }) => {
  const dialRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return;
      const rect = dialRef.current.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      const angle = Math.atan2(dy, dx);
      const deg = (angle * 180) / Math.PI;
      onChange(deg);
    };

    const handleMouseUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, onChange]);

  return (
    <div
      ref={dialRef}
      onMouseDown={() => setIsDragging(true)}
      className="w-20 h-20 rounded-full border-2 border-gray-600 flex items-center justify-center relative cursor-grab select-none"
      style={{
        transform: `rotate(${value}deg)`,
        transition: isDragging ? "none" : "transform 0.1s linear",
        background: "radial-gradient(circle, #111 60%, #000 100%)",
        boxShadow: "0 0 10px rgba(0,255,255,0.3), inset 0 0 10px rgba(0,255,255,0.2)",
      }}
    >
      <div className="w-1 h-6 bg-cyan-400 absolute top-2 rounded"></div>
    </div>
  );
};

export default function Wave() {
  const canvasRef = useRef(null);

  const [freqAngle, setFreqAngle] = useState(0);
  const [ampAngle, setAmpAngle] = useState(0);
  const [phaseAngle, setPhaseAngle] = useState(0);
  const [matched, setMatched] = useState(false);

  // Harder target wave
  const targetWave = {
    freq: 2.7,
    amp: 65,
    phase: 1.2,
  };

  // Map angles → actual values
  const frequency = 1 + (freqAngle % 360) / 60;
  const amplitude = 30 + (ampAngle % 360) / 4;
  const phase = (phaseAngle % 360) * (Math.PI / 180);

  // Check if matched
  useEffect(() => {
    const tol = 0.25;
    if (
      Math.abs(frequency - targetWave.freq) < tol &&
      Math.abs(amplitude - targetWave.amp) < tol * 20 &&
      Math.abs(phase - targetWave.phase) < tol
    ) {
      setMatched(true);
    } else {
      setMatched(false);
    }
  }, [frequency, amplitude, phase]);

  useEffect(() => {
    const ctx = canvasRef.current.getContext("2d");
    let t = 0;
    let animId;

    const draw = () => {
      const width = canvasRef.current.width;
      const height = canvasRef.current.height;
      ctx.clearRect(0, 0, width, height);

      // Ghost target wave
      ctx.beginPath();
      ctx.strokeStyle = "rgba(255,255,255,0.15)";
      ctx.lineWidth = 2;
      for (let x = 0; x < width; x++) {
        const y =
          height / 2 +
          targetWave.amp *
            Math.sin((x / 40) * targetWave.freq + targetWave.phase + t * 0.02);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();

      // Player wave
      ctx.beginPath();
      ctx.strokeStyle = matched ? "red" : "#0ff"; // change to red when matched
      ctx.lineWidth = 3;
      ctx.shadowBlur = 12;
      ctx.shadowColor = matched ? "red" : "#0ff";
      for (let x = 0; x < width; x++) {
        const y = height / 2 + amplitude * Math.sin((x / 40) * frequency + phase + t * 0.02);
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.stroke();
      ctx.shadowBlur = 0;

      t += 0.02;
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => cancelAnimationFrame(animId);
  }, [frequency, amplitude, phase, matched]);

  return (
    <div className="flex items-center justify-center h-screen bg-black text-white">
      <canvas
        ref={canvasRef}
        width={600}
        height={300}
        className="rounded-lg shadow-lg border border-gray-700"
      />

      {/* Dials */}
      <div className="absolute right-10 flex flex-col space-y-6">
        <Dial value={freqAngle} onChange={setFreqAngle} />
        <Dial value={ampAngle} onChange={setAmpAngle} />
        <Dial value={phaseAngle} onChange={setPhaseAngle} />
      </div>
    </div>
  );
}
