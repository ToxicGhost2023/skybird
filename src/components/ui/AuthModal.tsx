"use client";
import React, { useState } from "react";
import { X } from "lucide-react";
type Props = {
  setModal: (value: boolean) => void;
  modal: boolean;
};

function AuthModal({ setModal }: Props) {
  const [mode, setMode] = useState("login");

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="">
        <button
          onClick={() => setModal(false)}
          className="cursor-pointer hover:bg-blue-600 hover:text-white rounde-50% transion duration-500 "
        >
          <X />
        </button>
      </div>
      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        {mode === "login" ? "ورود به حساب کاربری" : "ثبت نام"}
      </h2>

      <form className="space-y-4">
        {/* phone number */}
        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">شماره موبایل</label>
          <input
            type="tel"
            placeholder="مثلاً 09123456789"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            dir="ltr"
          />
        </div>

        {/* password - only for signup */}
        {mode === "signup" && (
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">رمز عبور</label>
            <input
              type="password"
              placeholder="رمز عبور"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
              dir="ltr"
            />
          </div>
        )}

        {/* button */}
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl text-sm font-medium"
        >
          {mode === "login" ? "ورود" : "ثبت‌نام"}
        </button>

        {/* switch link */}
        <p className="text-center text-sm text-gray-500 mt-3">
          {mode === "login" ? (
            <>
              حساب ندارید؟{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-blue-600 font-medium hover:underline"
              >
                ثبت‌نام
              </button>
            </>
          ) : (
            <>
              حساب دارید؟{" "}
              <button
                type="button"
                onClick={() => setMode("login")}
                className="text-blue-600 font-medium hover:underline"
              >
                ورود
              </button>
            </>
          )}
        </p>
      </form>
    </div>
  );
}

export default AuthModal;
