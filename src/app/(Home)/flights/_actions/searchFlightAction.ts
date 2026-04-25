"use server";

import clientPromise from "@/lib/mongodb";
import { searchFlightSchema } from "@/lib/validation/searchFlightSchema";


// اگر داری، جایگزینش کن

export async function searchFlightAction(
  prevState: any,
  formData: FormData
) {
  try {
    // تبدیل داده‌های ورودی فرم
    const rawData = {
      tripType: formData.get("tripType") || "one-way",
      origin: formData.get("origin"),
      destination: formData.get("destination"),
      departureDate: formData.get("departureDate"),
      returnDate: formData.get("returnDate"),
      passengers: formData.get("passengers"),
    };

    // اعتبارسنجی Zod
    const parsed = searchFlightSchema.safeParse(rawData);

    if (!parsed.success) {
      return {
        success: false,
        flights: [],
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const data = parsed.data;

    // --- عملیات دیتابیس (مثال) ---
    const flights = await clientPromise.flight.findMany({
      where: {
        origin: data.origin,
        destination: data.destination,
        date: data.departureDate,
      },
    });

    return {
      success: true,
      flights,
      errors: {},
    };
  } catch (error) {
    console.error("searchFlightAction error:", error);

    return {
      success: false,
      flights: [],
      errors: {
        _global: ["خطای داخلی سرور. لطفاً دوباره تلاش کنید."],
      },
    };
  }
}
