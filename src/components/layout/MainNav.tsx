"use client";
import Link from "next/link";
import { useState, useCallback } from "react";
import AuthModal from "../ui/AuthModal";
import { Plane, Train, Hotel, Bus, ShoppingBag, User } from "lucide-react";

export default function MainNav() {
  const [modal, setModal] = useState(false);

  const openModal = useCallback(() => setModal(true), []);
  const closeModal = useCallback(() => setModal(false), []);

  const rightLinks = [
    { title: "پرواز", href: "/flights", icon: Plane },
    { title: "قطار", href: "/trains", icon: Train },
    { title: "هتل", href: "/hotels", icon: Hotel },
    { title: "اتوبوس", href: "/buses", icon: Bus },
  ];

  const leftLinks = [{ title: "پیگیری خرید", href: "/buy", icon: ShoppingBag }];

  return (
    <>
      <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-between items-center px-4 py-3 md:py-4">
            <div className="flex gap-1 md:gap-2">
              {rightLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    className="group relative text-gray-700 px-3 py-2 md:px-4 md:py-2.5 
                             text-sm md:text-base font-medium rounded-lg
                             hover:bg-blue-50 hover:text-blue-600 
                             transition-all duration-200
                             flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                    <span>{item.title}</span>

                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                                   bg-blue-600 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                );
              })}
            </div>

            <div className="flex items-center gap-2 md:gap-4 mt-2 md:mt-0">
              {leftLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    prefetch
                    className="group relative text-gray-700 px-3 py-2 md:px-4 md:py-2.5 
                             text-sm md:text-base font-medium rounded-lg
                             hover:bg-blue-50 hover:text-blue-600 
                             transition-all duration-200
                             flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
                    <span className="hidden sm:inline">{item.title}</span>
                    <span
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 
                                   bg-blue-600 group-hover:w-full transition-all duration-300"
                    />
                  </Link>
                );
              })}
              <button
                onClick={openModal}
                className="relative overflow-hidden group
                         bg-linear-to-r from-blue-600 to-blue-700
                         text-white px-4 py-2 md:px-6 md:py-2.5 
                         text-sm md:text-base font-medium rounded-lg
                         hover:shadow-lg hover:shadow-blue-500/25
                         hover:-translate-y-0.5
                         transition-all duration-200 cursor-pointer
                         flex items-center gap-2"
              >
                <User className="w-4 h-4 md:w-5 md:h-5" />
                <span>ثبت نام | ورود</span>

                <span
                  className="absolute inset-0 w-full h-full bg-linear-to-r 
                               from-transparent via-white/20 to-transparent
                               -translate-x-full group-hover:translate-x-full 
                               transition-transform duration-700"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {modal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center
                     bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div className="animate-scaleIn" onClick={(e) => e.stopPropagation()}>
            <AuthModal setModal={setModal} modal={modal} />
          </div>
        </div>
      )}
    </>
  );
}
