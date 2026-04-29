import Image from "next/image";
import React from "react";

const data = [
  { id: 1, name: "بلیط تهران کیش", src: "/images/airPlan/Kish.webp" },
  { id: 2, name: "بلیط تهران مشهد", src: "/images/airPlan/mashhad.webp" },
  { id: 3, name: "بلیط تهران استانبول", src: "/images/airPlan/Istanbul.webp" },
  { id: 4, name: "بلیط تهران نجف", src: "/images/airPlan/Najaf.webp" },
  { id: 5, name: "بلیط تهران اهواز", src: "/images/airPlan/Ahwaz.webp" },
  { id: 6, name: "بلیط تهران دبی", src: "/images/airPlan/Dubai.webp" },
];

function PopularRoutesBus() {
  return (
    <section className="py-12 bg-linear-to-b from-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-red-600 font-bold text-sm bg-red-100 px-4 py-1 rounded-full">
            پربازدیدترین مسیرها
          </span>
          <h2 className="text-4xl font-extrabold text-gray-800 mt-4">
            پرطرفدارترین خطوط اتوبوسی
          </h2>
          <p className="text-gray-500 mt-2">سفری امن و اقتصادی با تریپ‌بوس</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {data.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer group border border-red-100"
            >
              <div className="relative w-full h-64 sm:h-72">
                <Image
                  width={500}
                  height={500}
                  src={item.src}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-red-900/80 via-red-800/40 to-transparent group-hover:from-red-900/90 transition-all duration-500 flex flex-col justify-end p-4">
                  <span className="text-white text-lg font-bold text-right w-full drop-shadow-md">
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

export default PopularRoutesBus;
