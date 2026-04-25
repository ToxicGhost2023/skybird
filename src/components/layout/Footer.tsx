import React from "react";
import Link from "next/link";
import {
  Plane,
  Hotel,
  Apple,
  Play,
  Mail,
  Info,
  ShieldCheck,
  FileText,
  Users,
} from "lucide-react"; // وارد کردن آیکون‌های مورد نیاز

const FooterLinks = [
  {
    title: "پروازها",
    items: [
      { name: "بلیط هواپیما داخلی", href: "/", icon: Plane },
      { name: "بلیط هواپیما خارجی", href: "/international", icon: Plane },
      { name: "مقاصد پرطرفدار", href: "/destinations", icon: Plane },
      { name: "هواپیمایی‌های ویژه", href: "/airlines", icon: Plane },
    ],
  },
  {
    title: "خدمات سفر",
    items: [
      { name: "رزرو هتل لوکس", href: "/hotel", icon: Hotel },
      { name: "بسته‌های سفر", href: "/packages", icon: Plane }, // می‌تونه آیکون هواپیما باشه یا آیکون سفر
      { name: "اجاره خودرو", href: "/cars", icon: Users }, // آیکون مربوط به افراد/سرویس
      { name: "بیمه مسافرتی", href: "/insurance", icon: ShieldCheck },
    ],
  },
  {
    title: "درباره ما",
    items: [
      { name: "درباره شرکت", href: "/about", icon: Info },
      { name: "فرصت‌های شغلی", href: "/careers", icon: Users },
      { name: "مرکز رسانه", href: "/media", icon: FileText },
      { name: "تماس با پشتیبانی", href: "/contact", icon: Mail },
    ],
  },
];

function Footer() {
  return (
    <footer className="bg-linear-to-br from-blue-900 to-blue-700 text-white m-0 pt-16 pb-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <h2 className="text-3xl font-bold mb-3 text-yellow-400 flex items-center">
            <Plane className="w-8 h-8 mr-3" /> ExpressFlay
          </h2>
          <p className="text-sm opacity-80 leading-relaxed">
            تجربه سفری بی‌نظیر با ExpressFlay. ما پروازهای امن، راحت و لوکس را
            برای شما فراهم می‌کنیم. مقصد رویایی شما، آغاز تعهد ماست.
          </p>
        </div>

        {/* بخش لینک‌های اصلی */}
        {FooterLinks.map((section) => (
          <div key={section.title}>
            <h3 className="text-lg font-semibold mb-4 border-b-2 border-yellow-400 pb-2 inline-block">
              {section.title}
            </h3>
            <ul className="space-y-3">
              {section.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-300 hover:text-yellow-300 transition duration-300 text-sm opacity-90 flex items-center"
                  >
                    <item.icon className="w-4 h-4 mr-2" />{" "}
                    {/* نمایش آیکون کنار لینک */}
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* بخش دانلود اپلیکیشن */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b-2 border-yellow-400 pb-2 inline-block">
            اپلیکیشن موبایل
          </h3>
          <div className="flex flex-col space-y-3">
            <Link
              href="#"
              className="flex items-center bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition"
            >
              <Apple className="w-7 h-7 mr-3" />
              <div>
                <p className="text-xs opacity-70">Download on the</p>
                <p className="font-bold text-sm">App Store</p>
              </div>
            </Link>
            <Link
              href="#"
              className="flex items-center bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-lg transition"
            >
              <Play className="w-7 h-7 mr-3" />
              <div>
                <p className="text-xs opacity-70">Get it on</p>
                <p className="font-bold text-sm">Google Play</p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* بخش کپی‌رایت */}
      <div className="container mx-auto px-4 border-t border-blue-700 pt-8 mt-12">
        <div className="text-center text-sm opacity-70">
          © 2026 Skyward Airways. All rights reserved. | Crafted with passion
          for travel.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
