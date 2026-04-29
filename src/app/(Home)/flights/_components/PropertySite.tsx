import Image from "next/image";
import React from "react";

const details = [
  {
    id: 1,
    desc: "ارائه بلیط هواپیما از تمامی ایرلاین های معتبر",
    src: "/images/airPlan/support3.webp",
    icon: "🎫",
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    desc: "استرداد بلیط به صورت آنلاین",
    src: "/images/airPlan/support2.webp",
    icon: "🔄",
    gradient: "from-orange-500 to-amber-500",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    id: 3,
    desc: "پشتیبانی حرفه ای",
    src: "/images/airPlan/support.webp",
    icon: "🎧",
    gradient: "from-blue-500 to-orange-500",
    bgGradient: "from-blue-50 to-orange-50",
  },
];

function PropertySite() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-16 bg-linear-to-b from-white to-gray-50">
      <div className="text-center mb-12">
        <div className="inline-flex gap-2 bg-blue-100 px-4 py-1 rounded-full mb-3">
          <span className="text-blue-600">⚡</span>
          <span className="text-blue-700 font-bold">چرا اکسپرس فلای؟</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          مزایای خرید از اکسپرس فلای
        </h2>
        <p className="text-gray-500 mt-2">
          تجربه‌ای متفاوت در خرید بلیط هواپیما
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {details.map((item, idx) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all border-t-4 border-blue-500 hover:-translate-y-2"
          >
            <div
              className={`w-20 h-20 mx-auto rounded-full bg-linear-to-br ${item.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition text-4xl`}
            >
              {item.icon}
            </div>
            <p className="font-bold text-gray-800 text-lg">{item.desc}</p>
            <div className="mt-4 flex justify-center gap-2 text-blue-600 text-xs">
              ✓ تضمین بهترین قیمت ✓ پروازهای چارتری
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-blue-50 p-5 rounded-xl text-center border border-blue-200 flex flex-wrap justify-center gap-4">
        <span className="text-blue-700">🛡️ امنیت بالای پرداخت</span>
        <span className="text-blue-700">✨ ۲۴ ساعته، ۷ روز هفته</span>
        <span className="text-blue-700">💰 بهترین نرخ‌ها</span>
      </div>
    </main>
  );
}

export default PropertySite;
