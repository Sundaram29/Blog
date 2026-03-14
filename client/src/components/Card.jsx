
import React from "react";

const industries = [
  {
    title: "Banking",
    img: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=600",
  },
  {
    title: "Asset Management",
    img: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600",
  },
  {
    title: "Private Markets",
    img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600",
  },
  {
    title: "Corporates",
    img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600",
  },
  {
    title: "Professional Services",
    img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600",
  },
];

const Industries = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-16 lg:px-24">
      <h2 className="text-3xl font-semibold text-center mb-12">
        Industries We Serve
      </h2>

      <div className="grid md:grid-cols-3 gap-8 ">
        {industries.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={item.img}
              className="h-48 w-full object-cover cursor-pointer transform transition duration-500 ease-out hover:scale-110 hover:brightness-90"
            />
            <div className="p-4 font-medium">{item.title}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Industries;
