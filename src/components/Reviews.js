import React, { useState, useEffect } from "react";

function Reviews() {
  const reviews = [
    {
      image: "/images/Person1.webp",
      review:
        "The staff is friendly and always ready to assist. I feel so motivated every time I come here. Thank you for creating such a positive space!",
      stars: 5,
      name: "John Doe",
    },
    {
      image: "/images/Person2.webp",
      review:
        "The trainers are knowledgeable, and the environment is motivating. I’ve seen great progress in my fitness journey.",
      stars: 4,
      name: "Jane Smith",
    },
    {
      image: "/images/Person3.webp",
      review:
        "Great gym with a wide variety of machines and classes. Definitely the best investment for my health.",
      stars: 5,
      name: "Michael Lee",
    },
    {
      image: "/images/Person4.webp",
      review:
        "The facilities are clean, modern, and well-maintained. Highly recommend it for anyone serious about fitness.",
      stars: 4,
      name: "Sarah Johnson",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [reviews.length]);

  const renderStars = (count) => {
    return Array.from({ length: count }, (_, index) => (
      <span key={index} className="text-yellow-400">
        &#9733;
      </span>
    ));
  };

  return (
    <section className="text-center py-10 font-title" id="reviews">
      <div>
        <h1 className="text-red-600 font-bold text-3xl mb-10">
          WHAT PEOPLE SAY
        </h1>
      </div>

      <div className="relative w-full max-w-4xl mx-auto p-6 overflow-hidden bg-white shadow-md rounded-md">
        <div
          className="flex transition-transform duration-700"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center text-center p-6 min-w-full"
            >
              <img
                src={review.image}
                alt={review.name}
                className="w-24 h-24 rounded-full object-cover mb-4"
              />
              <p className="text-lg italic text-gray-700">{`"${review.review}"`}</p>
              <div className="mt-2">{renderStars(review.stars)}</div>
              <p className="mt-4 font-semibold text-gray-800">{review.name}</p>
            </div>
          ))}
        </div>
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-blue-500" : "bg-gray-300"
              }`}
              onClick={() => setCurrentIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
