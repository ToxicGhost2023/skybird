"use client";

import React, { useEffect, useState } from "react";
import { useActionState } from "react";
import { X } from "lucide-react";
import { authAction, AuthState } from "@/actions-global/authAction";
import { Loader } from "./Loader";
import { useRouter } from "next/navigation";

type Props = {
  setModal: (value: boolean) => void;
  modal: boolean;
};

const initialState: AuthState = {
  success: false,
};

function AuthModal({ setModal }: Props) {
  const router = useRouter();
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [state, formAction, isPending] = useActionState(
    authAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      router.refresh();
    }
  }, [state.success, router]);

  return (
    <div className="w-full max-w-sm bg-white rounded-2xl shadow-lg p-6 md:p-8">
      <div className="flex justify-end">
        <button
          onClick={() => setModal(false)}
          className="cursor-pointer hover:bg-gray-100 rounded-full p-1 transition duration-500"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-6 text-center">
        {mode === "login" ? "ورود به حساب کاربری" : "ثبت نام"}
      </h2>

      <form action={formAction} className="space-y-4">
        <input type="hidden" name="mode" value={mode} />

        <div className="flex flex-col">
          <label className="text-sm text-gray-600 mb-1">شماره موبایل</label>
          <input
            name="phone"
            type="tel"
            placeholder="مثلاً 09123456789"
            className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm 
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
            disabled:bg-gray-100"
            dir="ltr"
            required
            disabled={isPending}
          />
          {state?.errors?.phone && (
            <p className="text-red-500 text-xs mt-1">{state.errors.phone[0]}</p>
          )}
        </div>

        {mode === "signup" && (
          <div className="flex flex-col">
            <label className="text-sm text-gray-600 mb-1">رمز عبور</label>
            <input
              name="password"
              type="password"
              placeholder="حداقل ۶ کاراکتر"
              className="w-full px-4 py-3 rounded-xl border border-gray-300 text-sm 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none
              disabled:bg-gray-100"
              dir="ltr"
              required
              disabled={isPending}
            />
            {state?.errors?.password && (
              <p className="text-red-500 text-xs mt-1">
                {state.errors.password[0]}
              </p>
            )}
          </div>
        )}

        {state?.error && (
          <div className="text-red-500 text-sm text-center bg-red-50 p-2 rounded-lg">
            {state.error}
          </div>
        )}

        {state.success && (
          <div className="text-green-500 text-sm text-center bg-green-50 p-2 rounded-lg">
            {mode === "login"
              ? "ورود موفقیت‌آمیز بود!"
              : "ثبت‌نام با موفقیت انجام شد!"}
          </div>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl text-sm font-medium
          disabled:bg-blue-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {isPending ? <Loader /> : mode === "login" ? "ورود" : "ثبت‌نام"}
        </button>

        <p className="text-center text-sm text-gray-500 mt-3">
          {mode === "login" ? (
            <>
              حساب ندارید؟{" "}
              <button
                type="button"
                onClick={() => setMode("signup")}
                className="text-blue-600 font-medium hover:underline"
                disabled={isPending}
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
                disabled={isPending}
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
