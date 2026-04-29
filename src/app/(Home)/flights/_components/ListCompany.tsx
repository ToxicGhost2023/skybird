import React from "react";

const list = [
  {
    id: "mahan",
    name: "هواپیمایی ماهان",
    description:
      "یکی از بزرگترین و مجهزترین شرکت‌های هواپیمایی در ایران با گسترده‌ترین شبکه پروازی داخلی.",
    websiteUrl: "https://www.mahan.aero/",
    foundedYear: 1991,
    featured: true,
  },
  {
    id: "iranair",
    name: "هواپیمایی ایران ایر (هما)",
    description: "قدیمی‌ترین و بزرگترین شرکت هواپیمایی ایران با ناوگان مدرن.",
    websiteUrl: "https://www.iranair.com/",
    foundedYear: 1961,
    featured: true,
  },
  {
    id: "caspian",
    name: "هواپیمایی کاسپین",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    foundedYear: 1993,
    featured: false,
  },
  {
    id: "ata",
    name: "هواپیمایی آتا",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    foundedYear: 2007,
    featured: false,
  },
  {
    id: "kish",
    name: "هواپیمایی کیش",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    foundedYear: 1989,
    featured: false,
  },
  {
    id: "qeshm",
    name: "هواپیمایی قشم",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    foundedYear: 2003,
    featured: false,
  },
];

function ListCompany() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="inline-flex gap-2 bg-blue-50 px-4 py-1 rounded-full items-center">
          <span className="text-blue-600">✈️</span>
          <h1 className="text-xl font-bold text-blue-800">
            شرکت‌های هواپیمایی معتبر
          </h1>
        </div>
        <p className="text-gray-600 mt-4">
          لیست کامل شرکت‌های هواپیمایی فعال در ایران
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {list.map((company) => (
          <div
            key={company.id}
            className="group bg-white rounded-2xl border border-gray-200 p-6 hover:border-blue-400 hover:shadow-xl transition-all hover:-translate-y-1 relative"
          >
            {company.featured && (
              <div className="absolute -top-3 right-4 bg-linear-to-r from-blue-600 to-orange-500 text-white px-3 py-1 rounded-full text-xs flex gap-1">
                ⭐ پیشنهادی
              </div>
            )}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center text-3xl">
                ✈️
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
            {company.websiteUrl ? (
              <a
                href={company.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex justify-center items-center gap-2 bg-linear-to-r from-blue-600 to-orange-500 hover:from-blue-700 hover:to-orange-600 text-white text-sm py-2 rounded-lg transition"
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

export default ListCompany;
