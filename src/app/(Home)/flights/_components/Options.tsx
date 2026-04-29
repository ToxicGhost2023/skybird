import React from "react";

const features = [
  {
    icon: "✈️",
    title: "ایرلاین‌های معتبر",
    desc: "همکاری با تمامی ایرلاین‌های داخلی و خارجی",
  },
  {
    icon: "💳",
    title: "پرداخت امن",
    desc: "درگاه بانکی امن با گارانتی بازگشت وجه",
  },
  {
    icon: "🎫",
    title: "نرخ‌های استثنایی",
    desc: "بهترین قیمت‌های چارتری و سیستمی",
  },
];

function Options() {
  return (
    <main className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <section className="space-y-12">
        <div className="text-center sm:text-right space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            بلیط هواپیما
          </h1>
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-orange-500">
            اکسپرس فلای، بهترین سایت خرید بلیط هواپیما
          </h2>
        </div>

        <div className="space-y-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-loose text-justify">
              خرید اینترنتی بلیط‌ هواپیما با قیمت مناسب از دغدغه‌های اصلی
              مسافران در سفر هوایی است. اگر قصد خرید بلیط دارید و به دنبال
              بهترین نرخ می‌گردید، می‌توانید از طریق اکسپرس فلای، سایت معتبر
              فروش بلیط هواپیما، اقدام کنید. اکسپرس فلای با چارتر کردن بسیاری از
              مسیرها و ایرلاین‌های پرواز داخلی و خارجی، گزینه‌های متنوع خرید
              بلیط ارزان هواپیما را در اختیار شما می‌گذارد.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-10 bg-orange-500 rounded-full"></span>
              رزرو بلیط راحت و سریع
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-orange-50 rounded-xl p-6 text-center border border-orange-200"
                >
                  <div className="text-5xl mb-4">{feat.icon}</div>
                  <h3 className="text-xl font-bold mb-2 text-gray-800">
                    {feat.title}
                  </h3>
                  <p className="text-gray-600">{feat.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
              تنوع در انتخاب انواع بلیط هواپیما
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 sm:p-8 hover:shadow-md transition-shadow duration-300">
              <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-loose text-justify">
                در وب‌سایت اکسپرس فلای، به انواع بلیط هواپیما از جمله چارتر و
                سیستمی و لحظه آخری دسترسی دارید. این تنوع باعث می‌شود برای پرواز
                داخلی یا پرواز خارجی، با توجه به زمان سفر، بودجه و شرایط کنسلی،
                انتخابی دقیق‌تر داشته باشید.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-8 bg-orange-500 rounded-full"></span>
              راهنمای خرید بلیط پرواز داخلی از اکسپرس فلای
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
              برای اینکه روند خرید بلیط هواپیما شفاف و ساده باشد، مراحل رزرو
              آنلاین پرواز در اکسپرس فلای معمولا به این صورت انجام می‌شود:
            </p>

            <div className="space-y-6">
              {[
                {
                  step: 1,
                  title: "انتخاب مسیر و تاریخ سفر",
                  desc: "برای خرید بلیط هواپیما به صورت آنلاین، پیش از پرواز ابتدا باید مبدا، مقصد و ساعت و روز پرواز خود را وارد کنید.",
                },
                {
                  step: 2,
                  title: "مقایسه قیمت‌ها و شرایط",
                  desc: "بلیط‌های به‌نمایش درآمده، بسته به میزان تردد خطوط هواپیمایی متفاوت‌اند. از ارزانترین بلیط هواپیما و تخفیف‌های موجود گرفته تا بررسی قوانین و مقررات.",
                },
                {
                  step: 3,
                  title: "انتخاب و تکمیل اطلاعات پرواز",
                  desc: "در این مرحله از رزرو بلیط هواپیما، روی دکمه آبی رنگ «انتخاب پرواز» کلیک کرده و اطلاعات دقیق مسافر یا مسافران را وارد و تایید کنید.",
                },
              ].map((item) => (
                <div
                  key={item.step}
                  className="bg-linear-to-r from-blue-50 to-white rounded-xl border border-blue-100 p-6 sm:p-8"
                >
                  <div className="flex items-start gap-4">
                    <span className="shrink-0 w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-lg">
                      {item.step}
                    </span>
                    <div className="flex-1 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed sm:leading-loose text-justify">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Options;
