"use client";

import { useState, useCallback } from "react";
import {
  PlaneTakeoff,
  PlaneLanding,
  Users,
  ArrowLeftRight,
  Search,
} from "lucide-react";
import CityModal from "./CityModal";
import { searchFlightAction } from "../_actions/searchFlightAction";
import JalaliDatePicker from "./JalaliDatePicker";
import { useFormState } from "react-dom";

const initialState = {
  success: false,
  errors: {},
  flights: [],
};

export default function SearchFlight() {
  const [state, formAction] = useFormState(searchFlightAction, initialState);
  const [origin, setOrigin] = useState("");
  const [destination, setDestination] = useState("");
  const [modalType, setModalType] = useState<"origin" | "destination" | null>(
    null,
  );

  const handleSwap = useCallback(() => {
    setOrigin((prev) => {
      const newOrigin = destination;
      setDestination(prev);
      return newOrigin;
    });
  }, [destination]);

  const handleCitySelect = useCallback(
    (city: string) => {
      if (modalType === "origin") {
        setOrigin(city);
        setTimeout(() => setModalType("destination"), 150);
      } else if (modalType === "destination") {
        setDestination(city);
      }
      setModalType(null);
    },
    [modalType],
  );

  return (
    <>
      <div className="min-h-[70vh] flex items-start justify-center pt-8 sm:pt-16 lg:pt-24 px-4">
        <div className="w-full max-w-3xl">
          <div className="text-center mb-8 sm:mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-3">
              بلیط هواپیما
            </h1>
            <p className="text-gray-500 text-lg">
              جستجو و خرید آنلاین بلیط هواپیما
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 p-4 sm:p-6 shadow-sm">
            <form action={formAction}>
              {/* ===== این دو input مخفی، کلید حل مشکل ===== */}
              <input type="hidden" name="origin" value={origin} />
              <input type="hidden" name="destination" value={destination} />
              <input type="hidden" name="tripType" value="one-way" />
              {/* ============================================ */}

              <div className="flex items-center gap-2 sm:gap-4 mb-4">
                {/* Origin */}
                <div className="flex-1 relative">
                  <div
                    onClick={() => setModalType("origin")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setModalType("origin");
                      }
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-5 rounded-xl border-2 text-right
                      transition-all duration-200 cursor-pointer
                      ${
                        origin
                          ? "border-blue-200 bg-blue-50/50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }
                    `}
                  >
                    <PlaneTakeoff
                      className={`w-5 h-5 shrink-0 ${origin ? "text-blue-500" : "text-gray-400"}`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-400 mb-0.5">مبدا</div>
                      <div
                        className={`text-base font-medium truncate ${origin ? "text-gray-900" : "text-gray-400"}`}
                      >
                        {origin || "شهر مبدا"}
                      </div>
                    </div>
                    {origin && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setOrigin("");
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            setOrigin("");
                          }
                        }}
                        className="p-1 rounded-full hover:bg-red-100 text-gray-400 hover:text-red-500 
                                 cursor-pointer transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>

                {/* Swap Button */}
                <button
                  type="button"
                  onClick={handleSwap}
                  className="shrink-0 w-10 h-10 rounded-full border border-gray-200 
                           hover:border-blue-300 hover:bg-blue-50 transition-all duration-200
                           flex items-center justify-center text-gray-400 hover:text-blue-600"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                </button>

                {/* Destination */}
                <div className="flex-1 relative">
                  <div
                    onClick={() => setModalType("destination")}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        setModalType("destination");
                      }
                    }}
                    className={`
                      w-full flex items-center gap-3 px-4 py-5 rounded-xl border-2 text-right
                      transition-all duration-200 cursor-pointer
                      ${
                        destination
                          ? "border-blue-200 bg-blue-50/50"
                          : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
                      }
                    `}
                  >
                    <PlaneLanding
                      className={`w-5 h-5 shrink-0 ${destination ? "text-blue-500" : "text-gray-400"}`}
                    />
                    <div className="flex-1 min-w-0">
                      <div className="text-xs text-gray-400 mb-0.5">مقصد</div>
                      <div
                        className={`text-base font-medium truncate ${destination ? "text-gray-900" : "text-gray-400"}`}
                      >
                        {destination || "شهر مقصد"}
                      </div>
                    </div>
                    {destination && (
                      <span
                        onClick={(e) => {
                          e.stopPropagation();
                          setDestination("");
                        }}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                          if (e.key === "Enter" || e.key === " ") {
                            e.preventDefault();
                            e.stopPropagation();
                            setDestination("");
                          }
                        }}
                        className="p-1 rounded-full hover:bg-red-100 text-gray-400 hover:text-red-500 
                                 cursor-pointer transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Date & Passengers Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
                <div className="relative">
                  <JalaliDatePicker
                    name="departureDate"
                    placeholder="تاریخ رفت"
                  />
                </div>

                <div className="relative">
                  <JalaliDatePicker
                    name="returnDate"
                    placeholder="تاریخ برگشت"
                  />
                </div>

                <div className="relative">
                  <div
                    className="flex items-center gap-3 px-4 h-13 rounded-xl border-2 border-gray-200 
                                bg-white hover:border-gray-300 transition-colors"
                  >
                    <Users className="w-5 h-5 text-gray-400" />
                    <input
                      name="passengers"
                      type="number"
                      min="1"
                      max="9"
                      defaultValue="1"
                      className="w-full bg-transparent focus:outline-none text-base font-medium text-gray-900
                               [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none 
                               [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="مسافران"
                    />
                  </div>
                </div>
              </div>

              {/* Search Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold 
                         py-4 rounded-xl transition-all duration-200 
                         flex items-center justify-center gap-2 text-base
                         hover:shadow-lg hover:shadow-blue-500/20"
              >
                <Search className="w-5 h-5" />
                <span>جستجوی بلیط هواپیما</span>
              </button>
            </form>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-6 mt-6 text-sm text-gray-400">
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>تضمین بهترین قیمت</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>پشتیبانی ۲۴ ساعته</span>
            </div>
            <div className="w-1 h-1 bg-gray-300 rounded-full" />
            <div className="flex items-center gap-1.5">
              <svg
                className="w-4 h-4 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>پرداخت امن</span>
            </div>
          </div>
        </div>
      </div>

      <CityModal
        open={modalType !== null}
        onClose={() => setModalType(null)}
        onSelect={handleCitySelect}
        title={modalType === "origin" ? "انتخاب مبدا" : "انتخاب مقصد"}
      />
    </>
  );
}
