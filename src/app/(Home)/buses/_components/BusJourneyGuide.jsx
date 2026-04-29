import React from "react";

const features = [
  {
    icon: "🚍",
    title: "ناوگان مدرن و ایمن",
    desc: "اتوبوس‌های VIP و ویژه با استانداردهای روز دنیا",
  },
  {
    icon: "📶",
    title: "اینترنت و شارژر",
    desc: "Wi-Fi رایگان و پورت شارژ در تمام صندلی‌ها",
  },
  {
    icon: "🍱",
    title: "خدمات پذیرایی",
    desc: "میان وعده و نوشیدنی رایگان در سفرهای طولانی",
  },
];

function BusJourneyGuide() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-12">
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-red-100 px-4 py-1 rounded-full">
            <span className="text-red-700">🚍</span>
            <span className="text-red-700 font-bold">
              تریپ‌بوس | همراه مطمئن سفرهای جاده‌ای
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            بلیط اتوبوس <span className="text-red-600">اینترنتی</span>
          </h1>
          <h2 className="text-xl text-gray-600">
            بهترین قیمت اتوبوس با تضمین پایین‌ترین نرخ
          </h2>
        </div>

        <div className="space-y-10">
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-8 hover:shadow-lg transition">
            <p className="text-gray-700 leading-loose text-justify text-lg">
              خرید اینترنتی بلیط اتوبوس با{" "}
              <strong className="text-red-700">تریپ‌بوس</strong>، دیگر نیازی به
              مراجعه حضوری به ترمینال نیست. ما صندلی‌های اتوبوس‌های (ویژه،
              معمولی، لوکس، سوپرلوکس) را با بهترین قیمت لحظه آخری و ماه‌های
              آینده به شما ارائه می‌دهیم. با سیستم هوشمند تریپ‌بوس، صندلی مورد
              علاقه خود (کنار پنجره، راهرو، جلو موتور) را انتخاب کنید.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-10 bg-red-600 rounded-full"></span>
              رزرو آنلاین اتوبوس در ۲ دقیقه
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-red-50 rounded-xl p-6 text-center border border-red-200"
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

          <div className="space-y-6 mt-10">
            <h2 className="text-3xl font-bold flex items-center gap-3">
              <span className="w-2 h-10 bg-red-600 rounded-full"></span>
              راهنمای خرید بلیط اتوبوس (مراحل ساده)
            </h2>
            {[
              {
                step: 1,
                title: "انتخاب مسیر و تاریخ",
                desc: "مبدأ (مثلا تهران) و مقصد (مثلا مشهد) خود را انتخاب کنید. تاریخ رفت و برگشت یا یک طرفه را مشخص کنید.",
              },
              {
                step: 2,
                title: "انتخاب شرکت و صندلی دلخواه",
                desc: "لیست اتوبوس‌ها شامل (ویژه، معمولی، لوکس) را مشاهده و صندلی خود را روی نقشه اتوبوس انتخاب کنید.",
              },
              {
                step: 3,
                title: "ورود اطلاعات و پرداخت امن",
                desc: "اطلاعات مسافران شامل کد ملی و مشخصات را وارد کرده و از درگاه بانکی امن خرید خود را نهایی کنید.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-red-100 p-6 hover:shadow-md transition"
              >
                <div className="flex gap-5 flex-wrap md:flex-nowrap items-start">
                  <span className="shrink-0 w-12 h-12 bg-red-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-md">
                    {item.step}
                  </span>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-2 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default BusJourneyGuide;
