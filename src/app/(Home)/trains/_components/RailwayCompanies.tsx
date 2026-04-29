import React from "react";

const railwayList = [
  {
    id: "raja",
    name: "شرکت راه‌آهن رجا",
    description: "بزرگترین ناوگان مسافری ریلی ایران با کوپه‌های مدرن و لوکس.",
    websiteUrl: "https://www.raja.ir/",
    foundedYear: 1996,
    featured: true,
    features: ["VIP", "اقتصادی"],
  },
  {
    id: "fadak",
    name: "قطار فدک",
    description: "پنج ستاره‌های ریلی ایران، خدمات هتلینگ روی ریل.",
    websiteUrl: "https://www.fadakrail.ir/",
    foundedYear: 2008,
    featured: true,
    features: ["رستوران", "اینترنت"],
  },
  {
    id: "bonrail",
    name: "بن ریل",
    description: "قطارهای با کیفیت و خدمات ویژه کوپه اختصاصی.",
    websiteUrl: null,
    foundedYear: 2012,
    featured: false,
    features: ["خوابیده"],
  },
  {
    id: "jooyan",
    name: "جویان",
    description: "قطارهای لوکس پنج ستاره مسیرهای گردشگری.",
    websiteUrl: null,
    foundedYear: 2015,
    featured: false,
    features: ["خانوادگی"],
  },
];

function RailwayCompanies() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex gap-2 bg-emerald-50 px-4 py-1 rounded-full items-center">
          <span className="text-emerald-700">🚆</span>
          <h1 className="text-xl font-bold text-emerald-800">
            اپراتورهای ریلی معتبر
          </h1>
        </div>
        <p className="text-gray-600 mt-4">
          مقایسه و خرید بلیط از بهترین شرکت‌های قطار ایران
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {railwayList.map((company) => (
          <div
            key={company.id}
            className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-emerald-400 hover:shadow-xl transition-all hover:-translate-y-1 relative"
          >
            {company.featured && (
              <div className="absolute -top-3 right-4 bg-emerald-600 text-white px-3 py-1 rounded-full text-xs flex gap-1">
                ⭐ محبوب
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center text-3xl">
                🚆
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
                className="w-full inline-flex justify-center items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-sm py-2 rounded-lg transition"
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

export default RailwayCompanies;
