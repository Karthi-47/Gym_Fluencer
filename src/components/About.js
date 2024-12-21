import React from "react";
import CountUp from "react-countup";

function About() {
  return (
    <section className="text-center py-10 font-title text-white" id="about">
      <div className="container mx-auto">
        <div>
          {/* Scrolling from left to right */}
          <div className="overflow-hidden z-40">
            <p className="scrolling-text-left text-6xl text-red-700">
              TRANSFORMATION / MOTIVATION / PROGRESS / FITNESS / TRANSFORMATION
              / MOTIVATION / PROGRESS / FITNESS
            </p>
          </div>

          {/* Scrolling from right to left */}
          <div className="overflow-hidden mb-4 z-40">
            <p className="scrolling-text-right text-6xl text-red-700">
              TRANSFORMATION / MOTIVATION / PROGRESS / FITNESS / TRANSFORMATION
              / MOTIVATION / PROGRESS / FITNESS
            </p>
          </div>

          <style>
            {`
          @keyframes scrolling-left {
            0% { transform: translateX(100%); }
            100% { transform: translateX(-100%); }
          }

          @keyframes scrolling-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }

          .scrolling-text-left {
            display: inline-block;
            white-space: nowrap;
            animation: scrolling-left 30s linear infinite;
          }

          .scrolling-text-right {
            color : white;
            display: inline-block;
            white-space: nowrap;
            animation: scrolling-right 30s linear infinite;
          }
        `}
          </style>
        </div>
        <h1 className="text-4xl mb-4 text-red-600">
          Your Fitness. Our Mission.
        </h1>
        <p className="text-lg mx-48">
          At GymFluncer, our mission is simple: to provide the tools and support
          you need to reach your fitness goals. We combine innovative technology
          with personalized guidance to make fitness easier, more accessible,
          and more motivating. Join us as we help you transform your fitness
          journey, one workout at a time.
        </p>
        <div className="grid grid-cols-3 text-6xl mt-16 font-semibold">
          <div>
            <CountUp start={300} end={410} delay={1} suffix="k+"></CountUp>
            <p className="text-lg mx-10 mt-8">
              Workouts logged and progress tracked every month
            </p>
          </div>
          <div>
            <CountUp start={100} end={160} delay={1} suffix="k+"></CountUp>
            <p className="text-lg mx-10 mt-8">
              Fitness enthusiasts connected through our platform
            </p>
          </div>
          <div>
            <CountUp start={10} end={25} delay={1} suffix="k+"></CountUp>
            <p className="text-lg mx-10 mt-8">
              Countries where GymFluencer is making an impact
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <div className="flex justify-center">
          <iframe
            src="https://www.youtube.com/embed/eMjyvIQbn9M"
            width="800"
            height="450"
            title="Fitness Tutorial Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default About;
