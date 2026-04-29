import React from "react";

const busList = [
  {
    id: "seiro_safar",
    name: "سیر و سفر",
    description: "بزرگترین ناوگان اتوبوسی ایران با خدمات VIP و سوپرلوکس.",
    websiteUrl: "https://www.seirosafar.com/",
    foundedYear: 1992,
    featured: true,
    features: ["VIP", "سرویس ایزو"],
  },
  {
    id: "iran_peyma",
    name: "ایران پیما",
    description: "پیشرو در صنعت حمل و نقل جاده‌ای با اتوبوس‌های مدرن.",
    websiteUrl: "https://www.iranpeyma.com/",
    foundedYear: 1988,
    featured: true,
    features: ["لوکس", "شارژر"],
  },
  {
    id: "tbt",
    name: "تعاونی مسافربری تهران",
    description: "یکی از معتبرترین شرکت‌های اتوبوسرانی کشور.",
    websiteUrl: null,
    foundedYear: 1985,
    featured: false,
    features: ["اقتصادی"],
  },
  {
    id: "hamyaran",
    name: "همیاران",
    description: "اتوبوس‌های مجهز با خدمات رفاهی کامل.",
    websiteUrl: null,
    foundedYear: 2000,
    featured: false,
    features: ["خانوادگی"],
  },
  {
    id: "mahtab",
    name: "مهتاب",
    description: "خدمات ویژه برای مسیرهای شمال و جنوب کشور.",
    websiteUrl: null,
    foundedYear: 1995,
    featured: false,
    features: ["ویژه"],
  },
  {
    id: "royal_safar",
    name: "رویال سفر",
    description: "اتوبوس‌های لوکس پنج ستاره.",
    websiteUrl: null,
    foundedYear: 2010,
    featured: false,
    features: ["سوپرلوکس"],
  },
];

function BusCompanies() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex gap-2 bg-red-50 px-4 py-1 rounded-full items-center">
          <span className="text-red-600">🚍</span>
          <h1 className="text-xl font-bold text-red-800">
            شرکت‌های اتوبوسرانی معتبر
          </h1>
        </div>
        <p className="text-gray-600 mt-4">
          مقایسه و خرید بلیط از بهترین شرکت‌های اتوبوس ایران
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {busList.map((company) => (
          <div
            key={company.id}
            className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-red-400 hover:shadow-xl transition-all hover:-translate-y-1 relative"
          >
            {company.featured && (
              <div className="absolute -top-3 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs flex gap-1">
                ⭐ محبوب
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-red-100 rounded-xl flex items-center justify-center text-3xl">
                🚍
              </div>
              <div>
                <h2 className="font-bold text-gray-900">{company.name}</h2>
                <div className="flex items-center text-xs text-gray-400 gap-1">
                  📅 تاسیس {company.foundedYear}
                </div>
              </div>
            </div>
            <p className="text-sm text-gray-600 mb-4 h-20">
              {company.description}
            </p>
            <div className="flex gap-2 mb-5">
              {company.features.map((feat, i) => (
                <span
                  key={i}
                  className="text-[10px] bg-gray-100 px-2 py-1 rounded-full"
                >
                  {feat}
                </span>
              ))}
            </div>
            {company.websiteUrl ? (
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 text-white text-sm py-2 rounded-lg transition"
              >
                وبسایت رسمی 🔗
              </a>
            ) : (
              <button
                disabled
                className="w-full text-sm bg-gray-100 text-gray-400 py-2 rounded-lg"
              >
                در دسترس نیست
              </button>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}

export default BusCompanies;
