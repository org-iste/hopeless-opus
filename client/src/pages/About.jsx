import logo from "../assets/gangster.jpeg";

export default function AboutUs() {
  const team = [
    { name: "ABC", fun: "50% Binge", role: "CORE COMMITTEE", image: logo},
    { name: "DEF", fun: "66% Netflix", role: "CORE COMMITTEE", image: logo},
    { name: "GHI", fun: "52% PotatoLaptop", role: "CORE COMMITTEE", image: logo},
    { name: "JKL", fun: "69% Manga", role: "CORE COMMITTEE", image: logo},
    { name: "MNO", fun: "99% Pugi", role: "CORE COMMITTEE", image: logo},
    { name: "PQR", fun: "99% Home", role: "CORE COMMITTEE", image: logo},
    { name: "STU", fun: "100% Artist", role: "CORE COMMITTEE", image: logo},
    { name: "VWX", fun: "96% Design", role: "CORE COMMITTEE", image: logo}
  ];

  return (
    <section
      className="w-full min-h-screen flex flex-col items-center justify-center px-0 py-0"
      style={{
      background: `linear-gradient(135deg,#0D1A2F)`,
      backgroundSize: "400% 400%",
      animation: "gradientAnimation 15s ease infinite"
      }}
    >
      {/* Gradient Animation */}
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>

      {/* Title */}
        <div className="text-center mb-12 text-white px-4 pt-20">
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#09D8C7" }}>ABOUT ACUMEN</h2>
        <p className="text-lg text-gray-200 mb-10 px-8">
          TechTatva 2025 Acumen where Strategy, Puzzles, and Possibilities Unite! Step into Techtatva 2025's most exhilarating challenge : ACUMEN. A clash of intelellect and strategy, featuring two thrilling journeys - TESSERACT and HOPELESS OPUS. From mind-bending puzzles to choices that shape your destiny, Acumen is not just a game - it's an adventure you won't forget. Try your hand at the prize pool of a whopping _______
        </p>

        <h2 className="text-4xl font-bold mb-4" style={{ color: "#09D8C7" }}>HOPELESS OPUS</h2>
        <p className="text-lg text-gray-200 mb-10 px-8">
          Hopeless Opus is back and more thrilling than ever! Step into an immersive online experience where every decision shapes your story! In this interactive storytelling event, your choices hold the power to unlock new paths and outcomes as you tackle mini games at step. The fate of the narrative is in your hands—choose wisely, and watch as your unique journey unfolds in real-time. Be ready for twists, turns, and unexpected revelations, where every choice you make matters!
        </p>
        <h2 className="text-4xl font-bold mb-4" style={{ color: "#09D8C7" }}>Meet Our Team</h2>
        
      </div>

      {/* Profile Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 w-full mx-auto pr-8 pl-8 pb-20">
        {team.map((member, index) => (
          <div
            key={index}
            className="rounded-2xl text-center p-6 shadow-lg hover:shadow-xl transition duration-300"
            style={{
              backgroundColor: "#OD1A2F",
              border: "2px solid #09D8C7"
            }}
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-24 h-24 object-cover rounded-full mx-auto mb-4 border-4"
              style={{ borderColor: "#09D8C7" }}
            />
            <h3 className="text-xl font-bold mb-2" style={{ color: "#09D8C7" }}>
              {member.name}
            </h3>
            <p className="mb-3" style={{ color: "#BD0927" }}>
              {member.fun}
            </p>
            <p className="uppercase text-xs font-semibold tracking-wide" style={{ color: "#CCCCCC" }}>
              {member.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
