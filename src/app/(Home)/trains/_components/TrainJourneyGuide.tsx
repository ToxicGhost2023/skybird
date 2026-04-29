import React from "react";

const features = [
  {
    icon: "🚆",
    title: "سرویس صبحانه و پذیرایی",
    desc: "همراه با میان وعده و چای در تمام کوپه‌های VIP",
  },
  {
    icon: "📶",
    title: "اینترنت پرسرعت",
    desc: "وایرلس رایگان در تمام واگن‌های مدرن",
  },
  {
    icon: "👨‍👩‍👧",
    title: "فضای اختصاصی خانواده",
    desc: "کوپه‌های ویژه بانوان و خانواده",
  },
];

function TrainJourneyGuide() {
  return (
    <main className="w-full max-w-6xl mx-auto px-4 py-12">
      <section className="space-y-12">
        <div className="text-center space-y-4">
          <div className="inline-flex items-center gap-2 bg-emerald-100 px-4 py-1 rounded-full">
            <span className="text-emerald-700">🚆</span>
            <span className="text-emerald-700 font-bold">
              ریل‌باز | همراه مطمئن سفرهای ریلی
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-gray-900">
            بلیط قطار <span className="text-emerald-600">اینترنتی</span>
          </h1>
          <h2 className="text-xl text-gray-600">
            بهترین قیمت قطار با تضمین پایین‌ترین نرخ
          </h2>
        </div>

        <div className="space-y-10">
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8 hover:shadow-lg transition">
            <p className="text-gray-700 leading-loose text-justify text-lg">
              خرید اینترنتی بلیط قطار با{" "}
              <strong className="text-emerald-700">ریل‌باز</strong>، دیگر نیازی
              به مراجعه حضوری به ایستگاه راه‌آهن نیست. ما صندلی‌ها و کوپه‌های
              قطارهای (پنج ستاره، فدک، رجا، سوپرال) را با بهترین قیمت لحظه آخری
              و ماه‌های آینده به شما ارائه می‌دهیم. با سیستم هوشمند ریل‌باز،
              صندلی مورد علاقه خود (کنار پنجره، راهرو، کوپه اختصاصی) را انتخاب
              کنید.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
              <span className="w-2 h-10 bg-emerald-600 rounded-full"></span>
              رزرو آنلاین قطار در ۳ دقیقه
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {features.map((feat, i) => (
                <div
                  key={i}
                  className="bg-emerald-50 rounded-xl p-6 text-center border border-emerald-200"
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
              <span className="w-2 h-10 bg-emerald-600 rounded-full"></span>
              راهنمای خرید بلیط قطار (مراحل طلایی)
            </h2>
            {[
              {
                step: 1,
                title: "انتخاب مسیر و تاریخ",
                desc: "مبدأ (مثلا تهران) و مقصد (مشهد) خود را انتخاب کنید. تاریخ رفت و برگشت یا یک طرفه را مشخص کنید.",
              },
              {
                step: 2,
                title: "انتخاب واگن و صندلی دلخواه",
                desc: "لیست قطارها شامل (۶ نفره، ۴ نفره اختصاصی، خوابیده، VIP) را مشاهده و صندلی خود را روی نقشه قطار انتخاب کنید.",
              },
              {
                step: 3,
                title: "ورود اطلاعات و پرداخت امن",
                desc: "اطلاعات مسافران شامل کد ملی و مشخصات را وارد کرده و از درگاه بانکی امن خرید خود را نهایی کنید.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-white rounded-xl border border-emerald-100 p-6 hover:shadow-md transition"
              >
                <div className="flex gap-5 flex-wrap md:flex-nowrap items-start">
                  <span className="shrink-0 w-12 h-12 bg-emerald-600 text-white rounded-2xl flex items-center justify-center text-2xl font-black shadow-md">
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

export default TrainJourneyGuide;
