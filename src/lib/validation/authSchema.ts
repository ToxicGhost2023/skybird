import { z } from "zod";

export const loginSchema = z.object({
  phone: z
    .string()
    .min(11, "شماره موبایل باید 11 رقم باشد")
    .max(11, "شماره موبایل باید 11 رقم باشد"),
  password: z.string().optional(),
});

export const signupSchema = z.object({
  phone: z
    .string()
    .min(11, "شماره موبایل باید 11 رقم باشد")
    .max(11, "شماره موبایل باید 11 رقم باشد"),
  password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
});

export const authSchema = z.discriminatedUnion("mode", [
  z.object({
    mode: z.literal("login"),
    phone: z.string().min(11, "شماره موبایل باید 11 رقم باشد").max(11),
    password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
  }),
  z.object({
    mode: z.literal("signup"),
    phone: z.string().min(11, "شماره موبایل باید 11 رقم باشد").max(11),
    password: z.string().min(6, "رمز عبور باید حداقل 6 کاراکتر باشد"),
  }),
]);
