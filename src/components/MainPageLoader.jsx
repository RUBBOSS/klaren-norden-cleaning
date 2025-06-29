import React, { useEffect, useState } from "react";
import "./BubbleAnimations.css";

// Bubble component for individual bubbles
const Bubble = ({ delay, size, color, duration }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPopping, setIsPopping] = useState(false);

  useEffect(() => {
    // Start bubble animation after delay
    const timer = setTimeout(() => {
      setIsAnimating(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay, duration]);

  const bubbleStyle = {
    left: `${Math.random() * 95 + 2.5}%`, // Better distribution across width (2.5% to 97.5%)
    bottom: "0px", // Start from bottom of screen
    background: `radial-gradient(circle at 30% 30%, rgba(255,255,255,0.8), ${color}40, ${color}20)`,
    border: `1px solid ${color}60`,
    boxShadow: `
      0 0 ${size / 3}px ${color}40,
      inset 0 0 ${size / 6}px rgba(255,255,255,0.5),
      inset ${size / 8}px ${size / 8}px ${size / 4}px rgba(255,255,255,0.3)
    `,
    animation: isAnimating
      ? `bubbleRise ${duration}ms linear forwards, 
       bubbleGrow ${duration}ms ease-out forwards`
      : "none",
    opacity: isAnimating ? 1 : 0,
    backdropFilter: "blur(1px)",
    "--final-size": `${size}px`, // Pass the final size to CSS
  };

  if (!isAnimating) return null;

  return (
    <div className="absolute rounded-full bubble-shimmer" style={bubbleStyle}>
      {/* Inner highlight for 3D effect */}
      <div
        className="absolute rounded-full"
        style={{
          top: "15%",
          left: "20%",
          width: "30%",
          height: "30%",
          background: "rgba(255,255,255,0.6)",
          filter: "blur(2px)",
          pointerEvents: "none",
        }}
      />
    </div>
  );
};

// ErrorBoundary component to catch rendering errors
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-white flex items-center justify-center z-50">
          <div className="text-center text-red-600">
            Ein Fehler ist aufgetreten. Bitte laden Sie die Seite neu.
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const MainPageLoader = ({ onLoadingComplete }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [shouldCallComplete, setShouldCallComplete] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    // Start text animation immediately
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 200);

    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShouldCallComplete(true);
      }, 500);
    }, 4000);

    return () => {
      if (timer) clearTimeout(timer);
      if (textTimer) clearTimeout(textTimer);
    };
  }, []);

  useEffect(() => {
    if (shouldCallComplete && typeof onLoadingComplete === "function") {
      console.log("MainPageLoader: Actually calling onLoadingComplete");
      onLoadingComplete();
    }
  }, [shouldCallComplete, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <ErrorBoundary>
      <div
        className={`fixed inset-0 bg-gradient-to-br from-blue-300 to-blue-600 flex items-center justify-center z-50 transition-opacity duration-500 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-center">
          {/* Logo/Brand */}
          <div
            className={`mb-8 transition-all duration-1000 ease-out ${
              showText ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <h1
              className={`text-4xl md:text-6xl font-bold text-white mb-4 transition-all duration-1200 ease-out delay-200 ${
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
            >
              KlarerNorden
            </h1>
            <p
              className={`text-blue-200 text-lg transition-all duration-1000 ease-out delay-500 ${
                showText
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              Professionelle Reinigungsdienstleistungen
            </p>
          </div>

          {/* Bubbles Animation - Optimized for full width coverage */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left side bubbles (0-20%) */}
            <Bubble delay={100} size={35} color="#ff6b9d" duration={2400} />
            <Bubble delay={300} size={28} color="#4ecdc4" duration={2100} />
            <Bubble delay={500} size={42} color="#ffe66d" duration={2700} />
            <Bubble delay={700} size={31} color="#a8e6cf" duration={2200} />
            <Bubble delay={900} size={38} color="#ff8b94" duration={2500} />
            <Bubble delay={1100} size={25} color="#b4c7d9" duration={1900} />
            <Bubble delay={1300} size={44} color="#c7ceea" duration={2800} />
            <Bubble delay={1500} size={33} color="#ffd93d" duration={2300} />

            {/* Left-center bubbles (20-40%) */}
            <Bubble delay={150} size={29} color="#6bcf7f" duration={2000} />
            <Bubble delay={350} size={37} color="#ff9999" duration={2500} />
            <Bubble delay={550} size={22} color="#e0aaff" duration={1800} />
            <Bubble delay={750} size={46} color="#c77dff" duration={2900} />
            <Bubble delay={950} size={34} color="#9bf6ff" duration={2400} />
            <Bubble delay={1150} size={27} color="#caffbf" duration={2000} />
            <Bubble delay={1350} size={41} color="#fdffb6" duration={2600} />
            <Bubble delay={1550} size={30} color="#ffc6ff" duration={2200} />

            {/* Center bubbles (40-60%) */}
            <Bubble delay={200} size={39} color="#bdb2ff" duration={2600} />
            <Bubble delay={400} size={26} color="#a0c4ff" duration={1900} />
            <Bubble delay={600} size={48} color="#ff69b4" duration={3000} />
            <Bubble delay={800} size={35} color="#00ced1" duration={2400} />
            <Bubble delay={1000} size={32} color="#ffa500" duration={2300} />
            <Bubble delay={1200} size={45} color="#9370db" duration={2800} />
            <Bubble delay={1400} size={28} color="#20b2aa" duration={2100} />
            <Bubble delay={1600} size={52} color="#ff1493" duration={3200} />

            {/* Right-center bubbles (60-80%) */}
            <Bubble delay={250} size={31} color="#00ff7f" duration={2200} />
            <Bubble delay={450} size={24} color="#ff6347" duration={1800} />
            <Bubble delay={650} size={43} color="#87ceeb" duration={2700} />
            <Bubble delay={850} size={36} color="#dda0dd" duration={2500} />
            <Bubble delay={1050} size={29} color="#f0e68c" duration={2000} />
            <Bubble delay={1250} size={47} color="#98fb98" duration={2900} />
            <Bubble delay={1450} size={33} color="#ffd700" duration={2300} />
            <Bubble delay={1650} size={40} color="#00bfff" duration={2600} />

            {/* Right side bubbles (80-100%) */}
            <Bubble delay={50} size={38} color="#adff2f" duration={2500} />
            <Bubble delay={450} size={23} color="#ff7f50" duration={1700} />
            <Bubble delay={650} size={41} color="#6495ed" duration={2600} />
            <Bubble delay={850} size={34} color="#dc143c" duration={2400} />
            <Bubble delay={1050} size={27} color="#00fa9a" duration={1900} />
            <Bubble delay={1250} size={49} color="#1e90ff" duration={3000} />
            <Bubble delay={1450} size={32} color="#ff4500" duration={2200} />
            <Bubble delay={1650} size={45} color="#32cd32" duration={2800} />

            {/* Small sparkle layer - distributed across width */}
            <Bubble delay={75} size={12} color="#ffb6c1" duration={1300} />
            <Bubble delay={175} size={15} color="#ffe4e1" duration={1600} />
            <Bubble delay={275} size={9} color="#e0ffff" duration={1000} />
            <Bubble delay={375} size={18} color="#f0fff0" duration={1800} />
            <Bubble delay={475} size={11} color="#fdf5e6" duration={1200} />
            <Bubble delay={575} size={16} color="#fff5ee" duration={1700} />
            <Bubble delay={675} size={13} color="#f8f8ff" duration={1400} />
            <Bubble delay={775} size={20} color="#f0f8ff" duration={1900} />
            <Bubble delay={875} size={14} color="#e6e6fa" duration={1500} />
            <Bubble delay={975} size={17} color="#fff0f5" duration={1800} />

            {/* Medium bubble layer - full width coverage */}
            <Bubble delay={120} size={35} color="#ff1493" duration={2400} />
            <Bubble delay={320} size={31} color="#2e8b57" duration={2200} />
            <Bubble delay={520} size={38} color="#4169e1" duration={2600} />
            <Bubble delay={720} size={26} color="#ff6347" duration={1900} />
            <Bubble delay={920} size={42} color="#32cd32" duration={2700} />
            <Bubble delay={1120} size={29} color="#ffa500" duration={2100} />
            <Bubble delay={1320} size={47} color="#9370db" duration={2900} />
            <Bubble delay={1520} size={33} color="#00ced1" duration={2300} />
            <Bubble delay={1720} size={40} color="#ff69b4" duration={2600} />
            <Bubble delay={1920} size={36} color="#4ecdc4" duration={2500} />

            {/* Large feature bubbles - strategic placement */}
            <Bubble delay={800} size={65} color="#ff69b4" duration={3200} />
            <Bubble delay={1600} size={70} color="#00ced1" duration={3500} />
            <Bubble delay={2400} size={60} color="#ffa500" duration={3000} />
            <Bubble delay={3200} size={68} color="#9370db" duration={3300} />
            <Bubble delay={4000} size={72} color="#32cd32" duration={3600} />

            {/* Late appearing bubbles - full width */}
            <Bubble delay={2000} size={34} color="#ff1493" duration={2300} />
            <Bubble delay={2200} size={28} color="#ffa500" duration={2000} />
            <Bubble delay={2400} size={41} color="#9370db" duration={2600} />
            <Bubble delay={2600} size={37} color="#32cd32" duration={2500} />
            <Bubble delay={2800} size={44} color="#ff6347" duration={2800} />
            <Bubble delay={3000} size={31} color="#00ced1" duration={2200} />
            <Bubble delay={3200} size={39} color="#4ecdc4" duration={2600} />
            <Bubble delay={3400} size={35} color="#ffe66d" duration={2400} />

            {/* Continuous stream - ensuring no gaps */}
            <Bubble delay={40} size={21} color="#ffe4b5" duration={1800} />
            <Bubble delay={140} size={19} color="#ffdab9" duration={1700} />
            <Bubble delay={240} size={24} color="#eee8aa" duration={2000} />
            <Bubble delay={340} size={16} color="#f5deb3" duration={1500} />
            <Bubble delay={440} size={22} color="#fff8dc" duration={1900} />
            <Bubble delay={540} size={18} color="#fffacd" duration={1600} />
            <Bubble delay={640} size={25} color="#ffffe0" duration={2100} />
            <Bubble delay={740} size={20} color="#f0f8ff" duration={1800} />
            <Bubble delay={840} size={23} color="#e6e6fa" duration={2000} />
            <Bubble delay={940} size={17} color="#fff0f5" duration={1500} />

            {/* Final coverage layer */}
            <Bubble delay={1800} size={33} color="#ff8c00" duration={2300} />
            <Bubble delay={2000} size={29} color="#da70d6" duration={2100} />
            <Bubble delay={2200} size={36} color="#40e0d0" duration={2500} />
            <Bubble delay={2400} size={32} color="#7fff00" duration={2200} />
            <Bubble delay={2600} size={38} color="#ff4500" duration={2600} />
            <Bubble delay={2800} size={30} color="#1e90ff" duration={2000} />
            <Bubble delay={3000} size={42} color="#ffd700" duration={2700} />
            <Bubble delay={3200} size={35} color="#32cd32" duration={2400} />
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MainPageLoader;
