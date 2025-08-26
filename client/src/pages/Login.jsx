import React, { useState } from 'react';

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1A2F]">
  <div className="max-w-md w-full p-6 rounded-2xl border border-[#09D8C7] bg-[#132A48] shadow-[0_0_10px_#09D8C7]">


        {/* Glitchy neon title */}
        <h1
    className="text-4xl text-center mb-6 uppercase"
    style={{
      fontFamily: "'Rubik Glitch', sans-serif",
      color: '#09D8C7',
      textShadow: '0 0 2px #09D8C7, 0 0 4px #BD0927',
      letterSpacing: '0.15em',
    }}
      >
      <span style={{ fontFamily: "'Press Start 2P', sans-serif" }}>Login</span>
      </h1>


        {/* Neon form fields */}
        <form className="flex flex-col space-y-4 font-mono text-[#09D8C7]">
          <input
            type="email"
            placeholder="Email ID"
            className="p-3 bg-[#0D1A2F] border border-[#09D8C7] text-[#09D8C7] rounded-md 
                       focus:outline-none focus:ring-2 focus:ring-[#BD0927] 
                       placeholder:text-[#7B3F3F] shadow-[0_0_10px_#09D8C7]"
          />

          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              className="p-3 pr-12 bg-[#0D1A2F] border border-[#09D8C7] text-[#09D8C7] rounded-md 
                         focus:outline-none focus:ring-2 focus:ring-[#BD0927] 
                         placeholder:text-[#7B3F3F] shadow-[0_0_10px_#09D8C7] w-full"
            />
            <button
              type="button"
              aria-label={showPassword ? 'Hide password' : 'Show password'}
              onClick={() => setShowPassword((v) => !v)}
              className="absolute inset-y-0 right-0 px-3 flex items-center text-[#09D8C7] hover:text-[#BD0927]"
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>

          <button
            type="submit"
            className="mt-4 p-3 text-lg font-bold uppercase tracking-wide bg-[#BD0927] text-white rounded-md
                       hover:bg-[#5D0A1F] transition shadow-[0_0_15px_#BD0927]"
            style={{ fontFamily: "'Rubik Glitch', sans-serif" }}
          >
            Enter World
          </button>
        </form>

        {/* Signup link */}
        <p className="mt-6 text-center" style={{ color: '#09D8C7', fontFamily: 'monospace' }}>
          Not registered yet?{' '}
          <a href="/signup" className="underline hover:text-[#BD0927]">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}
