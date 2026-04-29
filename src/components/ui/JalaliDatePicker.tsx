"use client";

import { useState } from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";

type Props = {
  name: string;
  disabled?: boolean;
  classname?: string;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
};

export default function JalaliDatePicker({
  name,
  disabled,
  classname,
  onFocus,
  onBlur,
  placeholder = "تاریخ",
}: Props) {
  const [date, setDate] = useState<any>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleFocus = () => {
    setIsOpen(true);
    onFocus?.();
  };

  const handleBlur = () => {
    setIsOpen(false);
    onBlur?.();
  };

  return (
    <div className={`relative w-full ${classname || ""}`}>
      <DatePicker
        calendar={persian}
        locale={persian_fa}
        format="YYYY/MM/DD"
        value={date}
        onChange={setDate}
        calendarPosition="bottom-right"
        placeholder={placeholder}
        portal
        disabled={disabled}
        onOpen={handleFocus}
        onClose={handleBlur}
        inputClass="w-full h-12 border-2 border-gray-200 rounded-xl px-3 text-sm bg-gray-50 focus:bg-white focus:border-blue-500 focus:outline-none transition-all cursor-pointer text-slate-700 font-medium placeholder:text-slate-400 bg-slate-300"
      />

      {/* hidden input for form data */}
      <input
        type="hidden"
        name={name}
        value={date ? (date.format?.("YYYY/MM/DD") ?? "") : ""}
      />
    </div>
  );
}
