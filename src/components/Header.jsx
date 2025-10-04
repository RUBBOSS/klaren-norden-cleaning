import React, { useState, useEffect, useRef } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const audioRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isAudioPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsAudioPlaying(!isAudioPlaying);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      const handleEnded = () => {
        setIsAudioPlaying(false);
      };

      const handlePause = () => {
        setIsAudioPlaying(false);
      };

      const handlePlay = () => {
        setIsAudioPlaying(true);
      };

      audio.addEventListener("ended", handleEnded);
      audio.addEventListener("pause", handlePause);
      audio.addEventListener("play", handlePlay);

      return () => {
        audio.removeEventListener("ended", handleEnded);
        audio.removeEventListener("pause", handlePause);
        audio.removeEventListener("play", handlePlay);
      };
    }
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src="/audio/A Second Worth.mp3"
        preload="auto"
        loop
      />

      <header
        className={`sticky top-0 z-50 transition-all duration-300 ease-in-out ${
          isScrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-white/20"
            : "bg-white shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {" "}
            {/* Logo and Company Info */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <img
                  src="/logo/logo.png"
                  alt="KlarerNorden Logo"
                  className="h-24 w-24 object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    console.log("Logo failed to load");
                  }}
                />
                <div>
                  <h1
                    className="text-2xl font-bold leading-tight"
                    style={{ color: "#004a77" }}
                  >
                    KlarerNorden
                  </h1>
                  <p
                    className="text-xl font-medium leading-tight"
                    style={{ color: "#c2e7ff" }}
                  >
                    Sauberkeit mit Qualität
                  </p>
                </div>
              </div>
            </div>
            {/* Navigation Menu (right side) */}
            <div className="flex items-center space-x-4">
              {/* Navigation Links */}
              <nav className="hidden md:flex items-center space-x-8">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
                >
                  Leistungen
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
                >
                  Über uns
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none"
                >
                  Kontakt
                </a>
              </nav>

              {/* Audio Toggle Button */}
              <button
                onClick={toggleAudio}
                className="p-2 rounded-full transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 hidden md:block"
                aria-label={isAudioPlaying ? "Pause music" : "Play music"}
              >
                <div className="relative">
                  {isAudioPlaying ? (
                    <svg
                      className="w-6 h-6 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-6 h-6 text-gray-600 hover:text-blue-600 transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,3V21L8,17H4V7H8L12,3Z" />
                      <path d="M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.03C15.5,15.29 16.5,13.77 16.5,12Z" />
                      <path d="M19,12C19,15.53 16.39,18.35 13,18.93V16.87C15.33,16.32 17,14.38 17,12C17,9.62 15.33,7.68 13,7.07V5.01C16.39,5.65 19,8.47 19,12Z" />
                    </svg>
                  )}
                  {isAudioPlaying && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </button>
            </div>{" "}
            {/* Mobile menu button */}
            <div className="md:hidden flex items-center space-x-2">
              {/* Audio Toggle Button for Mobile */}
              <button
                onClick={toggleAudio}
                className="p-2 rounded-full transition-all duration-300 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                aria-label={isAudioPlaying ? "Pause music" : "Play music"}
              >
                <div className="relative">
                  {isAudioPlaying ? (
                    <svg
                      className="w-5 h-5 text-blue-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14,19H18V5H14M6,19H10V5H6V19Z" />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-gray-600"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12,3V21L8,17H4V7H8L12,3Z" />
                      <path d="M16.5,12C16.5,10.23 15.5,8.71 14,7.97V16.03C15.5,15.29 16.5,13.77 16.5,12Z" />
                    </svg>
                  )}
                  {isAudioPlaying && (
                    <div className="absolute -top-1 -right-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    </div>
                  )}
                </div>
              </button>

              {/* Hamburger Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700 p-2"
                aria-label="Toggle mobile menu"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {isMobileMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              <nav className="flex flex-col space-y-4 text-center">
                <a
                  href="#services"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Leistungen
                </a>
                <a
                  href="#about"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Über uns
                </a>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors px-2 py-1 focus:outline-none"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Kontakt
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;
