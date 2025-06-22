import React, { useEffect, useState } from "react";

const MainPageLoader = ({ onLoadingComplete }) => {
  const [currentStep, setCurrentStep] = useState(0); // Start with 0 for click-to-start
  const [isVisible, setIsVisible] = useState(true);
  const [stepVisible, setStepVisible] = useState(true);

  const handleStartClick = () => {
    setCurrentStep(1); // This user interaction enables audio
  };

  useEffect(() => {
    let timer;

    if (currentStep === 1) {
      // Try to play sprayPuff sound twice, then move to step 2
      try {
        const sprayAudio = new Audio("/audio/sprayPuff.mp3");
        sprayAudio.volume = 0.5; // Set volume to 50%

        let playCount = 0;

        const playSpray = () => {
          if (playCount < 2) {
            const playPromise = sprayAudio.play();
            if (playPromise !== undefined) {
              playPromise
                .then(() => {
                  playCount++;
                })
                .catch((error) => {
                  console.log(
                    `Spray sound ${playCount + 1} autoplay prevented`
                  );
                  playCount++;
                });
            }
          }
        };

        // Play first spray sound
        playSpray();

        // Play second spray sound after first one ends
        sprayAudio.addEventListener("ended", () => {
          if (playCount === 1) {
            setTimeout(() => {
              playSpray();
            }, 500);
          }
        });
      } catch (error) {
        // Audio file not found or other errors
        console.log("Audio not available:", error);
      }

      // Smoothly transition to step 2 after 2.5 seconds
      timer = setTimeout(() => {
        setStepVisible(false); // Fade out current step
        setTimeout(() => {
          setCurrentStep(2);
          setStepVisible(true); // Fade in next step
        }, 300); // Wait for fade out
      }, 2500);
    } else if (currentStep === 2) {
      // Try to play window rubber sound
      try {
        const windowAudio = new Audio("/audio/windowRubbSound.mp3");
        windowAudio.volume = 0.5; // Set volume to 50%

        const playPromise = windowAudio.play();
        if (playPromise !== undefined) {
          playPromise
            .then(() => {
              // Window rubber sound started successfully
            })
            .catch((error) => {
              console.log("Window rubber autoplay prevented");
            });
        }

        // Fallback: try again after 500ms
        setTimeout(() => {
          const fallbackPlay = windowAudio.play();
          if (fallbackPlay !== undefined) {
            fallbackPlay.catch(() => {
              // Silently handle if still blocked
            });
          }
        }, 500);
      } catch (error) {
        // Audio file not found or other errors
        console.log("Window rubb sound not available:", error);
      }

      // Complete loading after 2.5 seconds
      timer = setTimeout(() => {
        setStepVisible(false); // Fade out current step
        setTimeout(() => {
          setIsVisible(false);
          setTimeout(() => {
            onLoadingComplete();
          }, 500); // Wait for fade out animation
        }, 300);
      }, 2500);
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentStep, onLoadingComplete]);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 bg-white flex items-center justify-center z-50 transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="text-center">
        {currentStep === 0 && (
          <div>
            <button
              onClick={handleStartClick}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-lg"
            >
              🧽 Reinigung
            </button>
          </div>
        )}

        {currentStep === 1 && (
          <div
            className={`transition-opacity duration-300 ${
              stepVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/icons/cleaningSpray.gif"
              alt="Cleaning Spray"
              className="w-16 h-16 mx-auto"
            />
          </div>
        )}

        {currentStep === 2 && (
          <div
            className={`transition-opacity duration-300 ${
              stepVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src="/icons/cleaning.gif"
              alt="Cleaning"
              className="w-16 h-16 mx-auto"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default MainPageLoader;
