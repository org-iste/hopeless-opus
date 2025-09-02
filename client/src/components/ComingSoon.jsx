import React, { useEffect, useState } from "react";

function ComingSoon() {
  // kal shaam 5 baje
  const deadline = new Date("2025-08-29T17:00:00");

  const calculateTimeLeft = () => {
    const difference = deadline - new Date();

    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, "0"),
        hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, "0"),
        minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, "0"),
        seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
      };
    } else {
      timeLeft = { days: "00", hours: "00", minutes: "00", seconds: "00" };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  });

  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center text-white text-center px-6"
      style={{
        background: `
          radial-gradient(circle at 20% 20%, #500A1F 0%, transparent 50%),
          radial-gradient(circle at 80% 20%, #411e3a 0%, transparent 40%),
          radial-gradient(circle at 40% 70%, #411E3A 0%, transparent 50%),
          radial-gradient(circle at 90% 80%, #09d8c7 0%, transparent 40%),
          linear-gradient(135deg, #0D1A2F 0%, #17364F 25%, #411E3A 50%, #17364F 75%, #0D1A2F 100%)
        `
      }}
    >
      <h1 className="text-5xl text-[#ffffff] font-bold mb-6">
        WE ARE <span className="text-[#09d8c7]">COMING SOON</span>
      </h1>
      <p className="max-w-2xl text-[#ffffff] mb-10 text-lg pb-3">
        Our website is under construction. We'll be here soon with our new awesome site.
      </p>

      {/* Countdown */}
      <div className="flex gap-8 mb-10">
        {["days", "hours", "minutes", "seconds"].map((unit) => (
          <div
            key={unit}
            className="bg-[#17364F] text-[#ffffff] rounded-2xl shadow-lg w-36 h-40 flex flex-col items-center justify-center border border-[#09D8C7]"
            style={{
              boxShadow: "0 0 20px #09D8C7",
            }}
          >
            <span className="text-6xl font-bold">{timeLeft[unit]}</span>
            <span className="uppercase text-base font-semibold">{unit}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ComingSoon;