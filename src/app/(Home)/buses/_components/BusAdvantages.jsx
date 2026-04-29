import Image from "next/image";
import React from "react";

const advantages = [
  {
    id: 1,
    desc: "نقشه هوشمند صندلی اتوبوس (انتخاب صندلی دلخواه)",
    src: "/images/bus/seatmap.webp",
    icon: "🪑",
    gradient: "from-red-500 to-rose-500",
    bgGradient: "from-red-50 to-rose-50",
  },
  {
    id: 2,
    desc: "استرداد آسان بلیط تا ۴ ساعت قبل از حرکت",
    src: "/images/bus/refund.webp",
    icon: "🔄",
    gradient: "from-gray-500 to-red-500",
    bgGradient: "from-gray-50 to-red-50",
  },
  {
    id: 3,
    desc: "پشتیبانی ۲۴ ساعته تریپ‌بوس (در ترمینال و مسیر)",
    src: "/images/bus/support.webp",
    icon: "🎧",
    gradient: "from-red-500 to-gray-500",
    bgGradient: "from-red-50 to-gray-50",
  },
];

function BusAdvantages() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-16 bg-linear-to-b from-white to-gray-50">
      <div className="text-center mb-12">
        <div className="inline-flex gap-2 bg-red-100 px-4 py-1 rounded-full mb-3">
          <span className="text-red-600">⚡</span>
          <span className="text-red-700 font-bold">مزایای منحصربفرد</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          چرا تریپ‌بوس بهترین انتخاب است؟
        </h2>
        <p className="text-gray-500 mt-2">سفری راحت، اقتصادی و ایمن</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((item, idx) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all border-t-4 border-red-500 hover:-translate-y-2"
          >
            <div
              className={`w-20 h-20 mx-auto rounded-full bg-linear-to-br ${item.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition text-4xl`}
            >
              {item.icon}
            </div>
            <p className="font-bold text-gray-800 text-lg">{item.desc}</p>
            <div className="mt-4 flex justify-center gap-2 text-red-600 text-xs">
              ✓ تضمین بهترین قیمت ✓ صندلی دلخواه
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-red-50 p-5 rounded-xl text-center border border-red-200 flex flex-wrap justify-center gap-4">
        <span className="text-red-700">🛡️ امنیت بالای پرداخت</span>
        <span className="text-red-700">🍱 پذیرایی رایگان</span>
        <span className="text-red-700">📶 وای فای و شارژر</span>
      </div>
    </main>
  );
}

export default BusAdvantages;
