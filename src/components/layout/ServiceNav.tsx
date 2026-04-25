"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Plane, Train, Hotel, Bus } from "lucide-react";

const services = [
  { name: "پرواز", href: "/flights", icon: Plane },
  { name: "قطار", href: "/trains", icon: Train },
  { name: "هتل", href: "/hotels", icon: Hotel },
  { name: "اتوبوس", href: "/buses", icon: Bus },
];

export default function ServiceNav() {
  const pathname = usePathname();

  return (
    <nav className="w-full">
      <div className="max-w-3xl mx-auto px-4">
        <div className="flex justify-center gap-3 sm:gap-4 py-4 sm:py-6">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive =
              pathname === service.href ||
              (service.href !== "/" && pathname.startsWith(service.href));

            return (
              <Link
                key={service.href}
                href={service.href}
                prefetch={true}
                className={`
                  group relative flex flex-col items-center justify-center gap-2 
                  w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28
                  rounded-2xl border-2 transition-all duration-300 ease-out
                  hover:-translate-y-1 hover:scale-105
                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500
                  ${
                    isActive
                      ? "bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/25"
                      : "bg-white text-gray-700 border-gray-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 hover:shadow-lg hover:shadow-blue-500/25"
                  }
                `}
              >
                {isActive && (
                  <div
                    className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-1 
                                bg-white rounded-b-full"
                  />
                )}
                <div
                  className={`
                  transition-transform duration-300 
                  ${!isActive && "group-hover:scale-110 group-hover:-translate-y-0.5"}
                  ${isActive && "scale-110"}
                `}
                >
                  <Icon
                    size={22}
                    className="sm:w-6 sm:h-6 md:w-7 md:h-7 transition-colors duration-300"
                  />
                </div>
                <span
                  className={`
                  text-xs sm:text-sm md:text-base transition-all duration-300
                  ${isActive ? "font-bold" : "font-medium group-hover:font-bold"}
                `}
                >
                  {service.name}
                </span>
                <div
                  className={`
                  absolute bottom-2 left-1/2 -translate-x-1/2 w-6 h-0.5 
                  rounded-full bg-white transition-all duration-300
                  ${isActive ? "opacity-100 w-8" : "opacity-0 group-hover:opacity-100"}
                `}
                />
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
