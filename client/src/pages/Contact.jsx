import React from "react";
import Cyber from "../assets/cyber.png";

function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D1A2F] text-white px-6">
      <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12">
        {/* Left Section */}
        <div>
          <button className="px-4 py-1 rounded-full bg-[#17364F] text-[#09D8C7] text-sm mb-6 border border-[#09D8C7] shadow-lg shadow-[#09D8C7]/40 hover:bg-[#09D8C7] hover:text-[#0D1A2F] transition">
            CONTACT
          </button>
          <h1 className="text-5xl font-extrabold leading-tight mb-6 tracking-tight">
            Let’s Get <span className="text-[#BD0927]">Connected</span>.
          </h1>
          <p className="text-gray-300">
            Or just send us an email directly at{" "}
            <a
              href="mailto:hello@slothui.com"
              className="text-[#09D8C7] underline hover:text-[#BD0927] transition"
            >
              sumeet@gmail.com
            </a>
            <img src={Cyber} alt="envelope" className="w-full h-[31em] rounded-lg mt-2" />
          </p>
        </div>

        {/* Right Section (Form) */}
        <form className="space-y-6 bg-[#17364F]/40 p-6 rounded-2xl shadow-xl border border-[#411E3A]">
          {/* Full Name */}
          <div>
            <label className="block text-sm mb-2 text-[#09D8C7] uppercase tracking-wider">
              Full Name
            </label>
            <input
              type="text"
              placeholder="Enter your full name..."
              className="w-full px-4 py-3 rounded-lg bg-[#0D1A2F] border border-[#09D8C7]/40 focus:outline-none focus:ring-2 focus:ring-[#BD0927] text-white placeholder-gray-400"
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm mb-2 text-[#09D8C7] uppercase tracking-wider">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Enter your email address..."
              className="w-full px-4 py-3 rounded-lg bg-[#0D1A2F] border border-[#09D8C7]/40 focus:outline-none focus:ring-2 focus:ring-[#BD0927] text-white placeholder-gray-400"
            />
          </div>
        
            {/* Title */}
          <div>
            <label className="block text-sm mb-2 text-[#09D8C7] uppercase tracking-wider">
              Title
            </label>
            <input
              type="text"
              placeholder="Write a short title for your problem..."
              maxLength={60}
              className="w-full px-4 py-3 rounded-lg bg-[#0D1A2F] border border-[#09D8C7]/40 focus:outline-none focus:ring-2 focus:ring-[#BD0927] text-white placeholder-gray-400"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm mb-2 text-[#09D8C7] uppercase tracking-wider">
              Message
            </label>
            <textarea
              placeholder="Enter your message..."
              maxLength={300}
              className="w-full px-4 py-3 rounded-lg bg-[#0D1A2F] border border-[#09D8C7]/40 focus:outline-none focus:ring-2 focus:ring-[#BD0927] text-white placeholder-gray-400 h-28 resize-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#BD0927] hover:bg-[#500A1F] transition font-semibold tracking-wide flex items-center justify-center space-x-2 shadow-lg shadow-[#BD0927]/50"
          >
            <span>Submit Form</span>
            <span className="text-[#09D8C7]">→</span>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;