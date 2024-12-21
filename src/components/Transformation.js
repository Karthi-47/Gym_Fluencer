import React, { useState, useEffect } from "react";

function Transformation() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    "/images/Slide1.webp",
    "/images/Slide2.webp",
    "/images/Slide2.webp",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds
    return () => clearInterval(interval); // Cleanup the interval
  }, [images.length]);

  return (
    <section className="text-center py-10 font-title" id="transformations">
      <div className="relative w-full h-screen overflow-hidden">
        {/* Images */}
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-screen object-cover"
            />
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                currentIndex === index ? "bg-white" : "bg-gray-400"
              }`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Transformation;
