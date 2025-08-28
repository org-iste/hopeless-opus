import { useState } from "react";

const faqs = [
  { question: "What is Hopeless Opus?", answer: "Hopeless Opus is a cyberpunk choice-based game. Hopeless Opus is a cyberpunk choice-based game. Hopeless Opus is a cyberpunk choice-based game. Hopeless Opus is a cyberpunk choice-based game. Hopeless Opus is a cyberpunk choice-based game." },
  { question: "Who is developing this game?", answer: "The game is being developed by Acumen for TechTatva, MIT's tech week." },
  { question: "What genre is the game?", answer: "It’s a narrative-driven cyberpunk adventure where your choices matter." },
  { question: "Will there be multiple endings?", answer: "Yes! Your decisions shape the world and determine the outcome." },
  { question: "When will it be released?", answer: "Stay tuned for updates on our official channels." },
];

export default function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#0D1A2F] text-gray-200 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold mb-10 text-white text-center tracking-wider drop-shadow-[2px_2px_6px_rgba(0,255,255,0.6)]">
        FAQ's
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const serial = String(index + 1).padStart(2, "0");
            return (
              <div
                key={index}
                onClick={() => toggleFAQ(index)}
                className="cursor-pointer rounded-md p-5 
                  bg-[#17364F]/40 transition-colors transition-shadow duration-300 
                  shadow-[0_0_10px_#09D8C7]/40 
                  hover:bg-[#17364F]/60 
                  hover:shadow-[0_0_16px_#09D8C7]/50"
              >
                {/* Question Row */}
                <div className="flex justify-between items-center">
                  <span className="text-[#09D8C7] font-mono text-lg tracking-widest drop-shadow-[0_0_4px_#09D8C7]">
                    {serial}
                  </span>
                  <h3 className="text-lg font-semibold flex-1 text-center tracking-wide">
                    {faq.question}
                  </h3>
                  {/* Neon Glow Chevron */}
                  <svg
                    className={`w-6 h-6 transform transition-transform duration-200 ${
                      openIndex === index ? "rotate-180" : "rotate-0"
                    } text-[#09D8C7] drop-shadow-[0_0_4px_#09D8C7]/40`}
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>

                {/* Divider Line */}
                <div
                  className={`transition-all duration-300 ease-in-out ${
                    openIndex === index ? "opacity-100 mt-3 mb-3" : "opacity-0 h-0"
                  }`}
                >
                  <div className="border-t border-[#09D8C7]/40 shadow-[0_0_6px_#09D8C7]/40"></div>
                </div>

                {/* Smooth Dropdown */}
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-40 mt-3" : "max-h-0"
                  }`}
                >
                  <p className="text-gray-300 text-center text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
