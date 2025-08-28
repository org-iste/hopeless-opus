import { useEffect, useRef, useState } from "react";

export default function Carousel() {
  const images = [
    "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1491553895911-0055eca6402d?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?q=80&w=1600&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  const autoplayMs = 3000;
  const transitionMs = 600;

  useEffect(() => {
    startAutoplay();

    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      stopAutoplay();
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [currentIndex]);

  function startAutoplay() {
    stopAutoplay();
    intervalRef.current = setInterval(() => {
      goNext();
    }, autoplayMs);
  }

  function stopAutoplay() {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  }

  function goToSlide(index) {
    setCurrentIndex((index + images.length) % images.length);
  }

  function goPrev() {
    goToSlide(currentIndex - 1);
  }

  function goNext() {
    goToSlide(currentIndex + 1);
  }

  const containerStyle = {
    width: "100%",
    maxWidth: "400px",
    aspectRatio: "16 / 9",
    margin: "40px auto",
    position: "relative",
    perspective: "1000px", // 3D perspective
    overflow: "visible"
  };

  const trackStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d"
  };

  const slideStyle = (i) => {
    const offset = i - currentIndex;

    let transform = "";
    let zIndex = 0;
    let opacity = 1;
    let scale = 1;

    if (offset === 0) {
      // Cmiddle
      transform = "translateX(0) translateZ(200px) rotateY(0)";
      zIndex = 2;
      scale = 1;
    } else if (offset === -1 || offset === images.length - 1) {
      // prev
      transform = "translateX(-40%) rotateY(40deg)";
      zIndex = 1;
      opacity = 0.8;
      scale = 0.9;
    } else if (offset === 1 || offset === -(images.length - 1)) {
    //next
      transform = "translateX(40%) rotateY(-40deg)";
      zIndex = 1;
      opacity = 0.8;
      scale = 0.9;
    } else {
      transform = "translateZ(-500px)";
      zIndex = 0;
      opacity = 0;
      scale = 0.7;
    }

    return {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "12px",
      overflow: "hidden",
      boxShadow: "0 10px 25px rgba(0,0,0,0.3)",
      transform: `${transform} scale(${scale})`,
      opacity,
      transition: `transform ${transitionMs}ms ease-in-out, opacity ${transitionMs}ms ease-in-out`,
      zIndex
    };
  };

  const imgStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover"
  };

const dotsWrapperStyle = {
  display: "flex",
  justifyContent: "center",
  gap: "10px",
  marginTop: "5px"
};

const dotStyle = (active) => ({
  width: "5px",
  height: "5px",
  borderRadius: "50%",
  background: active ? "rgba(0, 255, 255, 1)":"rgba(128, 0, 32, 1)",
  cursor: "pointer",
  transition: "transform 0.2s ease",
  transform: active ? "scale(1.2)" : "scale(1)"
});

return (
  <div style={{ padding: "20px" }}>
    <div
      style={containerStyle}
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div style={trackStyle}>
        {images.map((src, i) => (
          <div key={i} style={slideStyle(i)}>
            <img src={src} alt={`Slide ${i}`} style={imgStyle} />
          </div>
        ))}
      </div>
    </div>
    <div style={dotsWrapperStyle}>
      {images.map((_, i) => (
        <span
          key={i}
          onClick={() => goToSlide(i)}
          style={dotStyle(i === currentIndex)}
        />
      ))}
    </div>
  </div>
);

}

