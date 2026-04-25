import Image from "next/image";
import React from "react";

const data = [
  { id: 1, name: "بلیط تهران کیش", src: "/images/airPlan/Kish.webp" },
  {
    id: 2,
    name: "بلیط تهران مشهد",
    src: "/images/airPlan/mashhad.webp",
  },
  {
    id: 3,
    name: "بلیط تهران استانبول",
    src: "/images/airPlan/Istanbul.webp",
  },
  { id: 4, name: "بلیط تهران نجف", src: "/images/airPlan/Najaf.webp" },
  {
    id: 5,
    name: "بلیط تهران اهواز",
    src: "/images/airPlan/Ahwaz.webp",
  },
  { id: 6, name: "بلیط تهران دبی", src: "/images/airPlan/Dubai.webp" },
];

function Popular() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-gray-800 mb-10">
          پرطرفدار ترین ها
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group relative"
            >
              <div className="relative w-full h-64 sm:h-72 md:h-80">
                <Image
                  width={800}
                  height={800}
                  src={item.src}
                  alt={item.name}
                  priority
               
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-br from-black/40 to-black/60 group-hover:from-black/50 group-hover:to-black/70 transition duration-500 flex items-end p-4">
                  <span className="text-white text-lg sm:text-xl font-bold text-center w-full">
                    {item.name}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Popular;
