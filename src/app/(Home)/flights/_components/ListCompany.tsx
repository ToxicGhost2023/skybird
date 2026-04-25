import React from "react";
import {
  Plane,
  Building2,
  Globe,
  Calendar,
  ExternalLink,
  Star,
  Shield,
  Award,
} from "lucide-react";

const list = [
  {
    id: "mahan",
    name: "هواپیمایی ماهان",
    description:
      "یکی از بزرگترین و مجهزترین شرکت‌های هواپیمایی در ایران با گسترده‌ترین شبکه پروازی داخلی و خدماتی مشابه پروازهای خارجی.",
    websiteUrl: "https://www.mahan.aero/",
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 1991,
    featured: true,
  },
  {
    id: "iranair",
    name: "هواپیمایی ایران ایر (هما)",
    description:
      "قدیمی‌ترین و بزرگترین شرکت هواپیمایی ایران با ناوگان مدرن و استفاده از استانداردهای بین‌المللی.",
    websiteUrl: "https://www.iranair.com/",
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 1961,
    featured: true,
  },
  {
    id: "caspian",
    name: "هواپیمایی کاسپین",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 1993,
    featured: false,
  },
  {
    id: "ata",
    name: "هواپیمایی آتا",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 2007,
    featured: false,
  },
  {
    id: "kish",
    name: "هواپیمایی کیش",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 1989,
    featured: false,
  },
  {
    id: "qeshm",
    name: "هواپیمایی قشم",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 2003,
    featured: false,
  },
  {
    id: "zagros",
    name: "هواپیمایی زاگرس",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 2005,
    featured: false,
  },
  {
    id: "aseman",
    name: "هواپیمایی آسمان",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 1980,
    featured: false,
  },
  {
    id: "mearaj",
    name: "هواپیمایی معراج",
    description: "یکی از شرکت‌های هواپیمایی فعال در ایران.",
    websiteUrl: null,
    imageUrl: "https://via.placeholder.com/40",
    foundedYear: 2003,
    featured: false,
  },
];

function ListCompany() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header Section */}
      <div className="text-center mb-10 sm:mb-12">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Plane className="w-8 h-8 sm:w-10 sm:h-10 text-blue-600" />
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900">
            شرکت‌های هواپیمایی
          </h1>
        </div>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          لیست کامل شرکت‌های هواپیمایی فعال در ایران با اطلاعات کامل
        </p>
      </div>

      {/* Company Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {list.map((company) => (
          <div
            key={company.id}
            className="group relative bg-white rounded-2xl border border-gray-200 p-5 sm:p-6 
                       hover:border-blue-300 hover:shadow-xl transition-all duration-300 
                       hover:-translate-y-1 flex flex-col"
          >
            {/* Featured Badge */}
            {company.featured && (
              <div
                className="absolute -top-3 right-4 bg-linear-to-r from-blue-600 to-blue-700 
                              text-white px-3 py-1 rounded-full text-xs font-semibold 
                              flex items-center gap-1 shadow-lg"
              >
                <Star className="w-3 h-3 fill-current" />
                <span>پیشنهادی</span>
              </div>
            )}

            {/* Company Header */}
            <div className="flex items-start gap-3 mb-4">
              {/* Logo/Avatar */}
              <div
                className="shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-blue-50 to-blue-100 
                              rounded-xl flex items-center justify-center border border-blue-200"
              >
                <Building2 className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600" />
              </div>

              <div className="flex-1 min-w-0">
                <h2 className="text-base sm:text-lg font-bold text-gray-900 mb-1 line-clamp-2">
                  {company.name}
                </h2>
                <div className="flex items-center gap-1 text-xs text-gray-500">
                  <Calendar className="w-3 h-3" />
                  <span>تأسیس {company.foundedYear}</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3 grow">
              {company.description}
            </p>

            {/* Features Icons */}
            <div className="flex items-center gap-3 mb-4 text-gray-400">
              <div className="flex items-center gap-1" title="پروازهای داخلی">
                <Plane className="w-4 h-4" />
                <span className="text-xs">داخلی</span>
              </div>
              <div className="flex items-center gap-1" title="خدمات استاندارد">
                <Shield className="w-4 h-4" />
                <span className="text-xs">استاندارد</span>
              </div>
              {company.featured && (
                <div
                  className="flex items-center gap-1 text-yellow-500"
                  title="شرکت برتر"
                >
                  <Award className="w-4 h-4" />
                  <span className="text-xs">برتر</span>
                </div>
              )}
            </div>

            {/* Action Button */}
            <div className="mt-auto">
              {company.websiteUrl ? (
                <a
                  href={company.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 
                             bg-blue-600 hover:bg-blue-700 text-white font-medium 
                             text-sm py-2.5 px-4 rounded-lg transition-all duration-200 
                             hover:shadow-lg hover:shadow-blue-500/25 
                             active:scale-95"
                >
                  <Globe className="w-4 h-4" />
                  <span>وبسایت رسمی</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              ) : (
                <button
                  disabled
                  className="w-full inline-flex items-center justify-center gap-2 
                             bg-gray-100 text-gray-400 font-medium 
                             text-sm py-2.5 px-4 rounded-lg cursor-not-allowed"
                >
                  <Globe className="w-4 h-4" />
                  <span>وبسایت در دسترس نیست</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="mt-10 sm:mt-12 text-center">
        <div
          className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 
                        px-4 py-2 rounded-full text-sm"
        >
          <Shield className="w-4 h-4" />
          <span>تمامی شرکت‌های هواپیمایی معتبر ایران</span>
        </div>
      </div>
    </main>
  );
}

export default ListCompany;
