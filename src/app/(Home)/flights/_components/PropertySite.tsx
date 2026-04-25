import Image from "next/image";
import React from "react";
import {
  Ticket,
  RefreshCw,
  Headphones,
  Shield,
  Zap,
  Heart,
} from "lucide-react";

const details = [
  {
    id: 1,
    desc: "ارائه بلیط هواپیما از تمامی ایرلاین های معتبر",
    src: "/images/airPlan/support3.webp",
    icon: Ticket,
    gradient: "from-blue-500 to-cyan-500",
    bgGradient: "from-blue-50 to-cyan-50",
    borderColor: "border-blue-200",
    iconBg: "bg-blue-500",
  },
  {
    id: 2,
    desc: "استرداد بلیط به صورت آنلاین",
    src: "/images/airPlan/support2.webp",
    icon: RefreshCw,
    gradient: "from-green-500 to-emerald-500",
    bgGradient: "from-green-50 to-emerald-50",
    borderColor: "border-green-200",
    iconBg: "bg-green-500",
  },
  {
    id: 3,
    desc: "پشتیبانی حرفه ای",
    src: "/images/airPlan/support.webp",
    icon: Headphones,
    gradient: "from-purple-500 to-pink-500",
    bgGradient: "from-purple-50 to-pink-50",
    borderColor: "border-purple-200",
    iconBg: "bg-purple-500",
  },
];

function PropertySite() {
  return (
    <main className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
      {/* Header Section */}
      <div className="text-center mb-12 sm:mb-16">
        <div
          className="inline-flex items-center justify-center gap-2 bg-blue-50 
                        text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-4"
        >
          <Zap className="w-4 h-4" />
          <span>چرا اکسپرس فلای؟</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-4">
          مزایای خرید از اکسپرس فلای
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          تجربه‌ای متفاوت در خرید بلیط هواپیما با خدمات ویژه و منحصر به فرد
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {details.map((item, index) => {
          const IconComponent = item.icon;

          return (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl border border-gray-200 
                         overflow-hidden transition-all duration-500 hover:shadow-2xl 
                         hover:-translate-y-2"
            >
              {/* Top Gradient Bar */}
              <div className={`h-1.5 bg-linear-to-r ${item.gradient}`} />

              {/* Decorative Background */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 bg-linear-to-br 
                              ${item.bgGradient} rounded-bl-full opacity-50 
                              group-hover:opacity-100 transition-opacity duration-300`}
              />

              <div className="relative p-6 sm:p-8 flex flex-col items-center text-center">
                {/* Counter Badge */}
                <div
                  className="absolute top-3 left-3 w-8 h-8 bg-gray-100 rounded-full 
                                flex items-center justify-center text-sm font-bold text-gray-400"
                >
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Image/Icon Container */}
                <div className="relative mb-6">
                  <div
                    className={`w-28 h-28 rounded-full bg-linear-to-br ${item.bgGradient} 
                                  flex items-center justify-center p-1 group-hover:scale-110 
                                  transition-transform duration-300`}
                  >
                    <div
                      className="w-full h-full rounded-full bg-white flex items-center 
                                    justify-center border-2 border-gray-100"
                    >
                      {item.src ? (
                        <Image
                          width={80}
                          height={80}
                          src={item.src}
                          alt={item.desc}
                          priority
                 
                          className="w-20 h-20 object-cover rounded-full"
                        />
                      ) : null}
                      <IconComponent
                        className={`w-12 h-12 text-white p-2 rounded-full ${item.iconBg}
                                   ${item.src ? "hidden" : "block"}`}
                        style={{ display: item.src ? "none" : "block" }}
                      />
                    </div>
                  </div>

                  {/* Animated Ring */}
                  <div
                    className={`absolute inset-0 rounded-full border-2 ${item.borderColor} 
                                  opacity-0 group-hover:opacity-100 scale-110 
                                  group-hover:scale-125 transition-all duration-500`}
                  />
                </div>

                {/* Description */}
                <p
                  className="text-gray-800 font-semibold text-base sm:text-lg 
                              leading-relaxed mb-4 grow"
                >
                  {item.desc}
                </p>

                {/* Feature Indicators */}
                <div className="flex items-center gap-2 text-gray-400">
                  <div className="flex items-center gap-1">
                    <Shield className="w-4 h-4 text-green-500" />
                    <span className="text-xs">تضمین کیفیت</span>
                  </div>
                  <div className="w-1 h-1 bg-gray-300 rounded-full" />
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-xs">رضایت مشتری</span>
                  </div>
                </div>
              </div>

              {/* Hover Overlay */}
              <div
                className={`absolute inset-0 bg-linear-to-t ${item.bgGradient} 
                              opacity-0 group-hover:opacity-10 transition-opacity 
                              duration-300 pointer-events-none`}
              />
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 sm:mt-16 text-center">
        <div
          className="inline-flex flex-col sm:flex-row items-center gap-4 bg-linear-to-r 
                        from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100"
        >
          <div className="flex items-center gap-2">
            <Shield className="w-6 h-6 text-blue-600" />
            <span className="text-gray-800 font-medium">
              بیش از ۱۰۰,۰۰۰ مسافر راضی در سال
            </span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-blue-200" />
          <div className="flex items-center gap-2">
            <Zap className="w-6 h-6 text-yellow-500" />
            <span className="text-gray-800 font-medium">
              پشتیبانی ۲۴ ساعته در ۷ روز هفته
            </span>
          </div>
        </div>
      </div>
    </main>
  );
}

export default PropertySite;
