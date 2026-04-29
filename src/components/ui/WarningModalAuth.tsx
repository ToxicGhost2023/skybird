"use client";

import { useState } from "react";
import AuthModal from "./AuthModal";

type Props = {
  title: string;
  description: string;
  onClose: () => void;
  actionText: string;
};

export function WarningModalAuth({
  title,
  description,
  onClose,
  actionText,
}: Props) {
  const [authModal, setAuthModal] = useState(false);

  return (
    <>
      {authModal && (
        <div className="fixed inset-0 z-60 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <AuthModal setModal={setAuthModal} modal={false} />
        </div>
      )}

      {!authModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
            onClick={onClose}
          />

          <div className="relative bg-yellow-400 rounded-2xl p-6 w-full max-w-md shadow-2xl border border-gray-100">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mb-4">
                <svg
                  className="w-8 h-8 text-amber-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 17c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-2">{title}</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {description}
              </p>

              <div className="flex flex-col w-full gap-3">
                <button
                  onClick={() => setAuthModal(true)}
                  className="w-full py-3 bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-xl transition-colors cursor-pointer"
                >
                  {actionText}
                </button>
                <button
                  onClick={onClose}
                  className="w-full py-3 bg-gray-50 hover:bg-gray-100 text-gray-600 font-medium rounded-xl transition-colors"
                >
                  انصراف
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
