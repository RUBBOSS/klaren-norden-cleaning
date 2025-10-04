import React, { useRef, useEffect, useState } from "react";

const BeforeAfterSlider = ({ beforeImage, afterImage, className = "" }) => {
  const sliderRef = useRef(null);
  const beforeRef = useRef(null);
  const containerRef = useRef(null);
  const [initialized, setInitialized] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(50); // Track slider position as percentage
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const handleImageLoad = () => {
    setImagesLoaded(true);
  };

  // Add console logs to debug
  console.log("BeforeAfterSlider props:", { beforeImage, afterImage });

  const initializeSlider = () => {
    if (containerRef.current && !initialized) {
      const containerWidth = containerRef.current.offsetWidth;
      const width = containerWidth / 2;
      if (beforeRef.current) {
        beforeRef.current.style.width = `${width}px`;
      }
      if (sliderRef.current) {
        sliderRef.current.style.left = `${width}px`;
      }
      setInitialized(true);
    }
  };

  useEffect(() => {
    initializeSlider();
    window.addEventListener("resize", initializeSlider);
    return () => {
      window.removeEventListener("resize", initializeSlider);
    };
  }, [initialized, imagesLoaded]);

  const dragTheImg = (e) => {
    if (!containerRef.current) return;

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const containerRect = containerRef.current.getBoundingClientRect();
    const sliderPosition = clientX - containerRect.left;
    const width = Math.max(0, Math.min(sliderPosition, containerRect.width));
    const percentage = (width / containerRect.width) * 100;

    if (beforeRef.current) {
      beforeRef.current.style.width = `${width}px`;
    }
    if (sliderRef.current) {
      sliderRef.current.style.left = `${width}px`;
    }

    setSliderPosition(percentage);
  };

  return (
    <div
      className={`relative w-full aspect-[4/3] overflow-hidden ${className}`}
    >
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-200">
          <div className="text-gray-500">Loading images...</div>
        </div>
      )}
      <div
        className="relative w-full h-full cursor-ew-resize"
        ref={containerRef}
        onMouseMove={dragTheImg}
        onTouchMove={dragTheImg}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={afterImage}
            alt="After"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center",
            }}
            onLoad={handleImageLoad}
            onError={(e) => console.error("Error loading after image:", e)}
          />
          {sliderPosition < 90 && (
            <div className="absolute top-2 right-2 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium z-20">
              Nach
            </div>
          )}
        </div>

        {/* Before Image (Overlay) */}
        <div
          className="absolute top-0 left-0 h-full overflow-hidden"
          ref={beforeRef}
          style={{ width: "50%" }}
        >
          <div
            className="absolute inset-0"
            style={{
              width: containerRef.current?.offsetWidth || "100%",
              height: "100%",
            }}
          >
            <img
              src={beforeImage}
              alt="Before"
              className="w-full h-full"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              onLoad={handleImageLoad}
              onError={(e) => console.error("Error loading before image:", e)}
            />
          </div>
          {sliderPosition > 10 && (
            <div className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium z-20">
              Vor
            </div>
          )}
        </div>

        {/* Slider Indicator */}
        <div
          className="absolute top-0 w-1 h-full bg-white shadow-lg z-30 pointer-events-none"
          ref={sliderRef}
          style={{ left: "50%", transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center">
            <div className="flex space-x-0.5">
              <div className="w-0.5 h-4 bg-gray-400"></div>
              <div className="w-0.5 h-4 bg-gray-400"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
