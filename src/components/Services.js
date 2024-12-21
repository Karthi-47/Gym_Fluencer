import React from "react";

function Services() {
  return (
    <section className="text-center py-10 font-title text-white" id="services">
      <div>
        <h1 className="text-4xl font-bold text-red-600">OUR SERVICES</h1>
        <p className="text-lg mt-8 mx-96">
          GymFluencer offers 5 essential services to help you achieve your
          fitness goals with ease and flexibility.
        </p>
      </div>
      <div className="grid grid-cols-5 mt-10">
        <img
          src="/images/1.webp"
          alt="Nothing"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="/images/2.webp"
          alt="Nothing"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="/images/3.webp"
          alt="Nothing"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="/images/4.webp"
          alt="Nothing"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        <img
          src="/images/5.webp"
          alt="Nothing"
          className="transition-transform duration-300 ease-in-out transform hover:scale-110"
        />
        {/* <img src="/images/6.webp" alt="Nothing" className="transition-transform duration-300 ease-in-out transform hover:scale-110"/> */}
      </div>
    </section>
  );
}

export default Services;
