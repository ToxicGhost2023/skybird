// در searchFlightSchema.ts
import { z } from "zod";

const toEnglishDigits = (str: string) => {
  const persianNumbers = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  const englishNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

  persianNumbers.forEach((pn, i) => {
    str = str.replace(new RegExp(pn, "g"), englishNumbers[i]);
  });
  return str;
};

export const searchTrainSchema = z.object({
  tripType: z.enum(["one-way", "round-trip"]),
  origin: z.string().min(1, "مبدا را انتخاب کنید"),
  destination: z.string().min(1, "مقصد را انتخاب کنید"),
  departureDate: z
    .string()
    .min(1, "تاریخ رفت را انتخاب کنید")
    .transform((val) => toEnglishDigits(val)) // تبدیل اعداد فارسی به انگلیسی
    .transform((val) => val.replace(/\//g, "-")) // تبدیل / به -
    .refine(
      (val) => /^\d{4}-\d{2}-\d{2}$/.test(val),
      "فرمت تاریخ باید YYYY-MM-DD باشد",
    ),
  returnDate: z
    .string()
    .optional()
    .transform((val) => (val ? toEnglishDigits(val).replace(/\//g, "-") : "")),
  passengers: z.string().transform(Number).pipe(z.number().min(1).max(9)),
});
