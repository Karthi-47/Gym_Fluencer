import React from "react";

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "The Importance of Fitness",
      description:
        "Discover why staying active is essential for a healthy lifestyle. Read about tips and tricks to keep you motivated.",
      image: "/images/Blog1.webp",
    },
    {
      id: 2,
      title: "Healthy Eating Habits",
      description:
        "Learn how to create a balanced diet and Maintain Health also stick to it. Tips for meal prep and healthy recipes inside!",
      image: "/images/Blog.webp",
    },
    {
      id: 3,
      title: "Mental Health and Exercise",
      description:
        "Understand the connection between mental health and physical activity, and how exercise can boost your mood.",
      image: "/images/Blog3.webp",
    },
  ];

  return (
    <section className="text-center py-10 font-title" id="blogs">
      <div>
        <h1 className="text-red-600 font-bold text-3xl mb-2">
          OUR LATEST BLOGS
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-3">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mb-4">{blog.description}</p>
                <button className="text-white bg-red-500 px-4 py-2 rounded hover:bg-red-600">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blogs;
