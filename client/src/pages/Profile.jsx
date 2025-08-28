"use client"
import React from "react"
import pfp from "../assets/pfp.jpg" // Import profile picture asset

export default function Profile() {
  // Stats data to be displayed as progress bars
  const stats = {
    accuracy: 95.2,
    performance: 87.5,
    efficiency: 92.8,
  }

  return (
    // Full-screen container with dark background
    <div
      className="min-h-screen p-4 sm:p-6 lg:p-8 relative overflow-hidden"
      style={{ backgroundColor: "#0D1A2F" }}
    >
      {/* Decorative background circles (subtle blur effect for aesthetics) */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 left-10 w-32 h-32 rounded-full blur-xl"
          style={{ backgroundColor: "#09D8C7" }}
        ></div>
        <div
          className="absolute bottom-20 right-10 w-40 h-40 rounded-full blur-xl"
          style={{ backgroundColor: "#BD0927" }}
        ></div>
      </div>

      {/* Centered profile card */}
      <div className="max-w-2xl mx-auto relative z-10">
        {/* Profile Card wrapper */}
        <div
          className="rounded-2xl p-6 sm:p-8 bg-[#17364F]/40 shadow-lg border transition-all duration-300 hover:shadow-lg"
          style={{
            borderColor: "#09D8C7",
            // Removed excessive glow for a cleaner look
          }}
        >
          {/* Profile Image Section */}
          <div className="flex justify-center mb-6">
            <div className="relative group">
              {/* Circular frame for profile picture */}
              <div
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-105"
                style={{
                  backgroundColor: "#411E3A",
                  borderColor: "#09D8C7",
                }}
              >
                {/* Profile picture inside circle */}
                <img
                  src={pfp}
                  alt="Profile"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* User Info Section */}
          <div className="text-center mb-8">
            {/* User Name */}
            <h1
              className="text-2xl sm:text-3xl font-bold mb-2 transition-all duration-300"
              style={{ color: "#09D8C7" }}
            >
              Pranav Kumar
            </h1>

            {/* ID + Email */}
            <div className="space-y-2">
              {/* Techtatva ID with styled badge */}
              <p className="text-lg font-medium" style={{ color: "#09D8C7" }}>
                Techtatva ID:{" "}
                <span
                  className="font-mono bg-black/30 px-2 py-1 rounded border"
                  style={{ borderColor: "#09D8C7" }}
                >
                  Gj4701i
                </span>
              </p>
              {/* Email */}
              <p className="text-base" style={{ color: "#09D8C7" }}>
                sumit.doe@gmail.com
              </p>
            </div>
          </div>

          {/* Stats Section */}
          <div className="space-y-6">
            {/* Loop over stats object to render progress bars */}
            {Object.entries(stats).map(([key, value]) => (
              <div key={key} className="group">
                {/* Stat label and percentage */}
                <div className="flex justify-between items-center mb-2">
                  <span
                    className="text-lg font-semibold capitalize"
                    style={{ color: "#09D8C7" }}
                  >
                    {key}
                  </span>
                  <span
                    className="text-xl font-bold"
                    style={{ color: "#09D8C7" }}
                  >
                    {value}%
                  </span>
                </div>

                {/* Progress bar container */}
                <div
                  className="relative h-3 rounded-full overflow-hidden"
                  style={{ backgroundColor: "#ffffff" }}
                >
                  {/* Filled progress bar */}
                  <div
                    className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: `${value}%`,
                      background: `#BD0927`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer with logout button */}
          <div
            className="mt-8 pt-6 border-t"
            style={{ borderColor: "#09D8C7" }}
          >
            <div className="text-center">
              <button
                className="px-6 py-2 rounded-lg border transition-all duration-300 hover:bg-red-600/20 font-medium cursor-pointer"
                style={{
                  borderColor: "#BD0927",
                  color: "#BD0927",
                  backgroundColor: "transparent",
                }}
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
