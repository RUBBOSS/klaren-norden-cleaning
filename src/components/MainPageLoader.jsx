import React, { useEffect, useState } from "react";

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
    // Start text animation quickly
    const textTimer = setTimeout(() => {
      setShowText(true);
    }, 100); // shorter intro for text

    // Shorten overall loader duration to ~1.2s and callback delay to 200ms
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => {
        setShouldCallComplete(true);
      }, 200);
    }, 1800);

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

          {/* Bubbles removed — loader simplified to keep brand text only */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
            {/* Optional subtle accent: keep this empty or add a faint SVG/gradient if desired */}
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default MainPageLoader;
