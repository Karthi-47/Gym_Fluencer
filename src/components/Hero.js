import React from "react";

function Hero() {
  return (
    <section
      className="text-red-600 text-center py-20 bg-cover bg-center -mt-16 min-h-screen"
      id="hero"
      style={{
        backgroundImage: "url('/images/bg3.webp') ",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      >
      <div className="container mx-auto">
        <h1 className="text-8xl font-title font-bold mx-14 mt-6">
          Track Your Fitness Journey
        </h1>
        <p className="mb-6 mx-48 mt-20 text-lg font-title text-white">
          Discover the ultimate fitness companion with GymFluencer. Effortlessly
          log your workouts, count reps, and track calories burned. Stay
          motivated and achieve your goals with ease.
        </p>
      </div>
    </section>
  );
}

export default Hero;
