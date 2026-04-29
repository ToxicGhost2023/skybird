import Image from "next/image";
import React from "react";

const advantages = [
  {
    id: 1,
    desc: "نقشه هوشمند صندلی قطار (انتخاب کوپه و صندلی دلخواه)",
    src: "/images/train/seatmap.webp",
    icon: "🎫",
    gradient: "from-emerald-500 to-teal-500",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    id: 2,
    desc: "استرداد آنی بلیط تا ۲ ساعت قبل از حرکت",
    src: "/images/train/refund.webp",
    icon: "🔄",
    gradient: "from-cyan-500 to-emerald-500",
    bgGradient: "from-cyan-50 to-emerald-50",
  },
  {
    id: 3,
    desc: "پشتیبانی ۲۴ ساعته ریل‌باز (در ایستگاه و مسیر)",
    src: "/images/train/support.webp",
    icon: "🎧",
    gradient: "from-teal-500 to-cyan-500",
    bgGradient: "from-teal-50 to-cyan-50",
  },
];

function RailAdvantages() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-16 bg-linear-to-b from-white to-gray-50">
      <div className="text-center mb-12">
        <div className="inline-flex gap-2 bg-emerald-100 px-4 py-1 rounded-full mb-3">
          <span className="text-emerald-600">⚡</span>
          <span className="text-emerald-700 font-bold">مزایای منحصربفرد</span>
        </div>
        <h2 className="text-3xl font-bold text-gray-800">
          چرا ریل‌باز بهترین انتخاب است؟
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {advantages.map((item, idx) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all border-t-4 border-emerald-400 hover:-translate-y-2"
          >
            <div
              className={`w-20 h-20 mx-auto rounded-full bg-linear-to-br ${item.bgGradient} flex items-center justify-center mb-5 group-hover:scale-110 transition text-4xl`}
            >
              {item.icon}
            </div>
            <p className="font-bold text-gray-800 text-lg">{item.desc}</p>
            <div className="mt-4 flex justify-center gap-2 text-emerald-600 text-xs">
              ✓ تضمین بهترین قیمت ✓ کوپه اختصاصی
            </div>
          </div>
        ))}
      </div>
      <div className="mt-12 bg-emerald-50 p-5 rounded-xl text-center border border-emerald-200 flex flex-wrap justify-center gap-4">
        <span className="text-emerald-700">🛡️ امنیت بالای پرداخت</span>
        <span className="text-emerald-700">☕ پذیرایی رایگان در VIP</span>
        <span className="text-emerald-700">💨 تهویه مدرن</span>
      </div>
    </main>
  );
}

export default RailAdvantages;
