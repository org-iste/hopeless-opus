import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const AnimatedCardSlider = ({ onIntersection = () => {} }) => {
  const sectionRef = useRef();
  const cardsContainerRef = useRef();

  const events = [
    {
      id: 1,
      title: '🎃 Halloween Tournament',
      description: 'Enter the cursed battlegrounds where shadows dance and victory awaits the brave. Face your darkest fears in this spine-chilling competition.',
      date: 'Oct 31, 2024',
      time: '11:59 PM - 3:33 AM',
      highlight: true,
      icon: '👻',
    },
    {
      id: 2,
      title: '💀 Death Match Prizes',
      description: 'Claim blood money and cursed treasures. The spirits have blessed our prize pool with otherworldly rewards for the worthy.',
      prizePool: '₹66,666+',
      highlight: true,
      icon: '🏆',
    },
    {
      id: 3,
      title: '🕷️ Nightmare Modes',
      description: 'Survive the haunted realms in Zombie Survival, Ghost Hunt, and the dreaded Midnight Massacre mode where darkness reigns supreme.',
      highlight: false,
      icon: '🎮',
    },
    {
      id: 4,
      title: '👥 Form Your Coven',
      description: 'Gather your allies and form an unholy alliance. Together, you shall conquer the darkness or be consumed by it entirely.',
      teamSize: '2-5 Players',
      highlight: false,
      icon: '🔮',
    },
    {
      id: 5,
      title: '⚡ Cursed Abilities',
      description: 'Unlock supernatural powers and forbidden skills. Each level mastered brings you closer to digital immortality and eternal glory.',
      highlight: true,
      icon: '🌙',
    },
    {
      id: 6,
      title: '🦇 Midnight Rituals',
      description: 'Join exclusive weekend séances where the veil between worlds is thinnest. Special rewards await those who dare to participate.',
      highlight: false,
      icon: '🕯️',
    },
  ];

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;

      const section = sectionRef.current;
      const cardsContainer = cardsContainerRef.current;
      
      if (!section || !cardsContainer) return;

      const rect = section.getBoundingClientRect();
      const cardWidth = 400 + 48; // card width + gap
      const totalWidth = cardWidth * events.length;
      const viewportWidth = window.innerWidth;
      const maxScroll = Math.max(0, totalWidth - viewportWidth + 200); // Add more padding

      // Check if we're in the horizontal scroll zone
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        const sectionHeight = section.offsetHeight - window.innerHeight;
        const scrollProgress = Math.abs(rect.top) / sectionHeight;
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        const translateX = -clampedProgress * maxScroll;
        
        cardsContainer.style.transform = `translateX(${translateX}px)`;
        cardsContainer.style.transition = 'none';

        onIntersection();
      }
    };

    const scrollToSection = () => {
      isScrolling = true;
      const section = sectionRef.current;
      if (section) {
        section.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.scrollToGamingSection = scrollToSection;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      delete window.scrollToGamingSection;
    };
  }, [events.length, onIntersection]);

  return (
    <section 
      ref={sectionRef}
      className="relative bg-gradient-to-b from-gray-950 via-purple-950 to-gray-900"
      style={{ minHeight: '300vh' }}
    >
      {/* Spooky background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-96 h-96 bg-orange-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-40 left-20 w-80 h-80 bg-purple-600/30 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-red-600/20 rounded-full filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/60 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Sticky container */}
      <div className="sticky top-0 min-h-screen flex flex-col overflow-visible">
        {/* Header */}
        <div className="flex-shrink-0 pt-16 pb-8 relative z-10">
          <div className="container mx-auto px-6">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif tracking-wide">
                  <span className="text-orange-400">Haunted</span>{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                    Gaming
                  </span>
                </h2>
                
                {/* Glowing effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-orange-600/20 via-purple-600/20 to-red-600/20 blur-xl rounded-lg"></div>
              </div>
              
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Enter the <span className="text-orange-400 font-semibold">cursed realm</span> where digital nightmares come alive. 
                Only the <span className="text-red-400 font-semibold">bravest souls</span> will claim victory in our haunted tournaments.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Horizontal scrolling cards */}
        <div className="flex-1 flex items-center overflow-visible px-6 py-12">
          <div 
            ref={cardsContainerRef}
            className="flex gap-12 py-8"
            style={{ minWidth: 'max-content' }}
          >
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                className={`flex-shrink-0 w-96 mx-4 my-8 rounded-2xl backdrop-blur-sm border-2 transition-all duration-500 relative overflow-visible ${
                  event.highlight 
                    ? 'bg-gradient-to-br from-orange-900/80 via-red-900/60 to-purple-900/80 border-orange-500/80 shadow-orange-500/50' 
                    : 'bg-gradient-to-br from-gray-900/90 via-purple-900/60 to-gray-900/90 border-purple-500/60 shadow-purple-500/30'
                } shadow-2xl hover:shadow-3xl`}
                style={{
                  transform: 'translateZ(0)', // Force GPU acceleration
                  willChange: 'transform, opacity',
                  transformStyle: 'preserve-3d',
                  perspective: '1000px'
                }}
                initial={{ opacity: 0, y: 100, rotateY: -15 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.15,
                  ease: "easeOut" 
                }}
                whileHover={{ 
                  y: -20,
                  scale: 1.03,
                  rotateY: 5,
                  boxShadow: event.highlight 
                    ? '0 30px 60px -12px rgba(249, 115, 22, 0.6)' 
                    : '0 30px 60px -12px rgba(168, 85, 247, 0.4)',
                  transition: { duration: 0.4 }
                }}
              >
                {/* Spooky border glow */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 rounded-2xl opacity-0 hover:opacity-30 transition-opacity duration-500 blur-sm"></div>
                
                {/* Card content */}
                <div className="relative z-10 p-8 h-full flex flex-col">
                  {/* Icon and title */}
                  <div className="mb-6 relative">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="text-4xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                        {event.icon}
                      </div>
                      {event.highlight && (
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-orange-500 rounded-full animate-ping"></div>
                          <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-purple-500 rounded-full animate-ping" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      )}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 leading-tight font-serif">
                      {event.title}
                    </h3>
                    <p className="text-gray-100 text-base leading-relaxed font-light">
                      {event.description}
                    </p>
                  </div>
                  
                  {/* Event details with spooky styling */}
                  <div className="mt-auto space-y-4">
                    {event.date && (
                      <div className="flex items-center text-orange-200 bg-black/40 p-3 rounded-lg border border-orange-500/50 backdrop-blur-sm">
                        <svg className="w-5 h-5 mr-3 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="font-medium">{event.date}</span>
                      </div>
                    )}
                    {event.time && (
                      <div className="flex items-center text-red-200 bg-black/40 p-3 rounded-lg border border-red-500/50 backdrop-blur-sm">
                        <svg className="w-5 h-5 mr-3 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-medium">{event.time}</span>
                      </div>
                    )}
                    {event.prizePool && (
                      <div className="flex items-center text-yellow-200 bg-black/40 p-3 rounded-lg border border-yellow-500/50 backdrop-blur-sm">
                        <svg className="w-5 h-5 mr-3 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="font-bold">Blood Money: {event.prizePool}</span>
                      </div>
                    )}
                    {event.teamSize && (
                      <div className="flex items-center text-purple-200 bg-black/40 p-3 rounded-lg border border-purple-500/50 backdrop-blur-sm">
                        <svg className="w-5 h-5 mr-3 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                        </svg>
                        <span className="font-medium">Coven: {event.teamSize}</span>
                      </div>
                    )}
                  </div>
                  
                  {/* Spooky CTA Button */}
                  <motion.button
                    className={`mt-8 w-full py-4 px-6 rounded-xl font-bold text-lg transition-all duration-500 relative overflow-hidden border-2 ${
                      event.highlight 
                        ? 'bg-gradient-to-r from-orange-600 via-red-600 to-orange-600 text-white border-orange-400 shadow-orange-500/50' 
                        : 'bg-gradient-to-r from-purple-800 to-purple-600 text-white border-purple-400 shadow-purple-500/30'
                    } shadow-lg hover:shadow-xl transform-gpu group`}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: event.highlight 
                        ? '0 15px 30px rgba(249, 115, 22, 0.8)' 
                        : '0 15px 30px rgba(168, 85, 247, 0.6)',
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* Button glow effect */}
                    <span className="absolute inset-0 bg-gradient-to-r from-orange-400/20 to-red-400/20 blur-md rounded-xl"></span>
                    
                    <span className="relative z-10 flex items-center justify-center gap-2 group-hover:gap-3 transition-all duration-300">
                      <span className="group-hover:scale-110 transition-transform">
                        {event.highlight ? '🔥' : '👁️'}
                      </span>
                      <span className="group-hover:tracking-wider transition-all">
                        {event.highlight ? 'Enter the Darkness' : 'Peer into the Void'}
                      </span>
                      <span className="opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                        →
                      </span>
                    </span>
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Spooky CTA Section */}
        <div className="flex-shrink-0 pb-16 pt-8 relative z-10">
          <div className="flex justify-center">
            <motion.button
              className="group relative px-16 py-6 overflow-hidden font-black text-white bg-gradient-to-r from-orange-600 via-red-600 to-purple-600 rounded-2xl text-2xl border-4 border-orange-400/50 shadow-2xl"
              initial={{ opacity: 0, y: 50, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              whileHover={{ 
                scale: 1.1,
                boxShadow: '0 25px 50px rgba(249, 115, 22, 0.8)',
                transition: { duration: 0.4 }
              }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Animated background */}
              <span className="absolute inset-0 bg-gradient-to-r from-orange-700 via-red-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></span>
              
              {/* Pulsing border */}
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-400 via-red-400 to-purple-400 opacity-30 group-hover:opacity-60 transition-opacity duration-500 animate-pulse blur-sm"></span>
              
              {/* Button content */}
              <span className="relative z-10 flex items-center gap-4">
                <span className="text-3xl animate-bounce">⚡</span>
                <span>JOIN THE NIGHTMARE</span>
                <span className="text-3xl animate-bounce" style={{ animationDelay: '0.5s' }}>⚡</span>
              </span>
            </motion.button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AnimatedCardSlider;