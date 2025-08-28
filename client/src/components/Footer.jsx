// Footer.jsx
import React from "react";

function Footer() {
  return (
    <footer className="bg-[#0D1A2F] text-gray-300 py-12 mt-10 w-full">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Brand / Game Info */}
        <div>
          <h2 className="text-2xl font-bold text-white">Hopeless Opus</h2>
          <p className="mt-4 text-sm leading-relaxed text-gray-400">
            A cyberpunk choice-based experience crafted by{" "}
            <span className="text-[#BD0927] font-semibold">Acumen</span>.  
            Step into a world of endless possibilities, are you good enough to win?
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Explore</h3>
          <ul className="space-y-3">
            <li><a href="#about" className="hover:text-[#BD0927] transition">About</a></li>
            <li><a href="#features" className="hover:text-[#BD0927] transition">Features</a></li>
            <li><a href="#team" className="hover:text-[#BD0927] transition">Team</a></li>
            <li><a href="#contact" className="hover:text-[#BD0927] transition">Contact</a></li>
          </ul>
        </div>

        {/* Newsletter / Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Stay Connected</h3>
          <p className="text-sm text-gray-400 mb-3">Subscribe for updates:</p>
          <form className="flex">
            <input
              type="email"
              placeholder="Your email"
              className="w-full px-3 py-2 text-sm bg-[#17364F] text-white rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-[#BD0927] text-white font-semibold rounded-r-md hover:bg-[#500A1F] transition"
            >
              Join
            </button>
          </form>

          <div className="flex space-x-4 mt-6">
            <a href="#" className="hover:text-white transition">Twitter</a>
            <a href="#" className="hover:text-white transition">Discord</a>
            <a href="#" className="hover:text-white transition">GitHub</a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#17364F] mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Hopeless Opus — Built by{" "}
        <span className="text-white">Acumen</span>.
      </div>
    </footer>
  );
}

export default Footer;











