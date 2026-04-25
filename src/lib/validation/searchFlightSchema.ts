import { z } from "zod";

export const searchFlightSchema = z
  .object({
    tripType: z.enum(["one-way", "round-trip"]).default("one-way"),

    origin: z.string().min(1, "origin is required"),

    destination: z.string().min(1, "destination is required"),

    departureDate: z
      .string()
      .min(1, "departureDate is required")
      .refine(
        (v) => !Number.isNaN(Date.parse(v)),
        "departureDate is not valid",
      ),

    returnDate: z.string().optional().nullable(),

    passengers: z.preprocess(
      (v) => (typeof v === "string" ? Number(v) : v),
      z.number().int().min(1, "min 1 passenger").max(9, "max 9 passengers"),
    ),
  })
  .superRefine((data, ctx) => {
    if (data.tripType === "round-trip") {
      if (!data.returnDate) {
        ctx.addIssue({
          code: "custom",
          message: "returnDate is required for round-trip",
          path: ["returnDate"],
        });
      } else if (Number.isNaN(Date.parse(data.returnDate))) {
        ctx.addIssue({
          code: "custom",
          message: "returnDate is not valid",
          path: ["returnDate"],
        });
      }
    }

    if (data.tripType === "round-trip" && data.returnDate) {
      const dep = new Date(data.departureDate);
      const ret = new Date(data.returnDate);
      if (ret < dep) {
        ctx.addIssue({
          code: "custom",
          message: "returnDate cannot be before departureDate",
          path: ["returnDate"],
        });
      }
    }
  });

export type SearchFlightInput = z.infer<typeof searchFlightSchema>;
