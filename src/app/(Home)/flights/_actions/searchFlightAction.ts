"use server";

import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";
import { searchFlightSchema } from "@/lib/validation/searchFlightSchema";

export async function searchFlightAction(prevState: any, formData: FormData) {
  const rawData = {
    tripType: formData.get("tripType") || "one-way",
    origin: formData.get("origin") as string,
    destination: formData.get("destination") as string,
    departureDate: formData.get("departureDate") as string,
    returnDate: formData.get("returnDate") as string,
    passengers: String(formData.get("passengers")),
  };

  const parsed = searchFlightSchema.safeParse(rawData);

  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  const data = parsed.data;

  try {
    const client = await clientPromise;
    const db = client.db("skybird");

    await db.collection("flightSearches").insertOne({
      ...data,
      createdAt: new Date(),
    });
  } catch (error) {
    console.error("DB ERROR:", error);

    return {
      success: false,
      errors: { _global: ["خطا در ذخیره اطلاعات"] },
    };
  }

  const query = new URLSearchParams({
    origin: data.origin,
    destination: data.destination,
    date: data.departureDate,
    passengers: String(data.passengers),
  });

  redirect(`/flight/issuingTickets?${query}`);
}
