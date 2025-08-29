import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const GsapShowcase = () => {
  const containerRef = useRef();
  const scrollSectionRef = useRef();
  const cardsContainerRef = useRef();

  // Sample effects data
  const effects = [
    { id: 1, title: 'Parallax Scroll', category: 'Scroll', difficulty: 'Easy' },
    { id: 2, title: 'Magnetic Buttons', category: 'Interaction', difficulty: 'Medium' },
    { id: 3, title: 'Infinite Scroll', category: 'Scroll', difficulty: 'Advanced' },
    { id: 4, title: 'Text Reveal', category: 'Text', difficulty: 'Easy' },
    { id: 5, title: 'Image Gallery', category: 'Media', difficulty: 'Medium' },
    { id: 6, title: 'Page Transition', category: 'Navigation', difficulty: 'Advanced' },
    { id: 7, title: 'Morphing Shapes', category: 'Animation', difficulty: 'Advanced' },
    { id: 8, title: 'Scroll Timeline', category: 'Scroll', difficulty: 'Medium' },
  ];

  useEffect(() => {
    let scrollTrigger = null;
    let isScrolling = false;

    const handleScroll = () => {
      if (isScrolling) return;

      const scrollSection = scrollSectionRef.current;
      const cardsContainer = cardsContainerRef.current;
      
      if (!scrollSection || !cardsContainer) return;

      const rect = scrollSection.getBoundingClientRect();
      const cardWidth = 320 + 32; // card width + gap
      const totalWidth = cardWidth * effects.length;
      const maxScroll = totalWidth - window.innerWidth + 100; // add some padding

      // Check if we're in the horizontal scroll zone
      if (rect.top <= 0 && rect.bottom >= window.innerHeight) {
        // We're in the pinned section
        const scrollProgress = Math.abs(rect.top) / (scrollSection.offsetHeight - window.innerHeight);
        const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
        
        // Calculate horizontal translate
        const translateX = -clampedProgress * maxScroll;
        
        // Apply transform
        cardsContainer.style.transform = `translateX(${translateX}px)`;
        cardsContainer.style.transition = 'none';
      }
    };

    // Smooth scroll to effects section
    const scrollToEffects = () => {
      isScrolling = true;
      const effectsSection = scrollSectionRef.current;
      if (effectsSection) {
        effectsSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
        setTimeout(() => {
          isScrolling = false;
        }, 1000);
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Expose scroll function to button
    window.scrollToEffects = scrollToEffects;

    return () => {
      window.removeEventListener('scroll', handleScroll);
      delete window.scrollToEffects;
    };
  }, [effects.length]);

  return (
    <div className="bg-gray-950 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/80"></div>
          <div className="absolute inset-0 bg-grid-white/[0.04] bg-[size:40px_40px]"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6">
              <span className="block">Made With</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                GSAP
              </span>
            </h1>
          </motion.div>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            A collection of premium JavaScript effects and animations crafted with GSAP.
            Elevate your web projects with smooth, performant animations.
          </motion.p>
          
          <motion.button
            className="relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-medium shadow-lg"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "backOut" }}
            whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.scrollToEffects && window.scrollToEffects()}
          >
            <span className="relative z-10">Explore Collection</span>
          </motion.button>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="animate-bounce w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Horizontal Scroll Effects Section */}
      <section 
        ref={scrollSectionRef}
        className="relative bg-gray-900"
        style={{ height: '300vh' }} // 3x viewport height for scroll space
      >
        {/* Sticky header */}
        <div className="sticky top-0 h-screen flex flex-col">
          {/* Header */}
          <div className="flex-shrink-0 pt-20 pb-10">
            <div className="container mx-auto px-6 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">
                Premium <span className="text-purple-400">Effects</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Handcrafted animations to enhance your web projects
              </p>
            </div>
          </div>

          {/* Horizontal scrolling cards */}
          <div className="flex-1 flex items-center overflow-hidden">
            <div 
              ref={cardsContainerRef}
              className="flex gap-8 pl-6 pr-6"
              style={{ minWidth: 'max-content' }}
            >
              {effects.map((effect, index) => (
                <motion.div 
                  key={effect.id}
                  className="w-80 flex-shrink-0 bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
                  initial={{ y: 50, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: "easeOut" 
                  }}
                  whileHover={{ 
                    y: -10,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="h-48 bg-gradient-to-r from-purple-600/20 to-pink-600/20 flex items-center justify-center relative overflow-hidden">
                    {/* Animated background */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 animate-pulse"></div>
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center text-2xl font-bold relative z-10">
                      {effect.id}
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-center mb-3">
                      <span className="px-3 py-1 bg-gray-700 rounded-full text-sm text-purple-300">
                        {effect.category}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm ${
                        effect.difficulty === 'Easy' 
                          ? 'bg-green-900/50 text-green-400' 
                          : effect.difficulty === 'Medium' 
                            ? 'bg-yellow-900/50 text-yellow-400' 
                            : 'bg-red-900/50 text-red-400'
                      }`}>
                        {effect.difficulty}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{effect.title}</h3>
                    <p className="text-gray-400 mb-4">
                      Beautiful {effect.title.toLowerCase()} animation using GSAP's powerful animation engine.
                    </p>
                    <motion.button 
                      className="w-full py-2 bg-gray-700 hover:bg-gray-600 rounded-lg transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      View Demo
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-purple-600/20 rounded-full filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-pink-600/20 rounded-full filter blur-3xl animate-pulse"></div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10 text-center w-full">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">elevate</span> your animations?
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Join thousands of developers creating stunning animations with GSAP.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.a
              href="https://greensock.com/gsap/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-lg font-medium shadow-lg inline-block"
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(168, 85, 247, 0.5)' }}
              whileTap={{ scale: 0.98 }}
            >
              Get GSAP
            </motion.a>
            <motion.a
              href="#"
              className="px-8 py-4 border border-gray-700 rounded-full text-lg font-medium hover:bg-gray-800/50 transition-colors inline-block"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              View Documentation
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default GsapShowcase;