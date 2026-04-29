"use server";

import clientPromise from "@/lib/mongodb";
import { searchTrainSchema } from "@/lib/validation/searchTrainSchema";

export async function SearchTrainAction(prevState: any, formData: FormData) {
  const rawData = {
    tripType: formData.get("tripType") || "one-way",
    origin: formData.get("origin") as String,
    destination: formData.get("destination") as String,
    departureDate: formData.get("departureDate") as string,
    returnDate: formData.get("returnDate") as string,
    passengers: String(formData.get("passengers")),
  };
  const parsed = searchTrainSchema.safeParse(rawData);
  if (!parsed.success) {
    return {
      success: false,
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  const data = parsed.data;
  const client = await clientPromise;
  const db = client.db("skybird");
  await db.collection("trainSearches").insertOne({
    ...data,
    createdAt: new Date(),
  });
}
