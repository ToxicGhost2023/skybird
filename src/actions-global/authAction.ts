"use server";

import clientPromise from "@/lib/mongodb";
import { authSchema } from "@/lib/validation/authSchema";
import bcrypt from "bcryptjs";
import { getAuthToken, removeAuthToken, setAuthToken } from "./setAuthToken";


export type AuthState = {
  success: boolean;
  error?: string;
  userId?: string;
  errors?: {
    phone?: string[];
    password?: string[];
    mode?: string[];
    _global?: string[];
  };
};

export async function authAction(
  prevState: AuthState | null,
  formData: FormData,
): Promise<AuthState> {
  try {
    const rawData = {
      mode: formData.get("mode") as "login" | "signup",
      phone: formData.get("phone") as string,
      password: formData.get("password") as string,
    };

    const parsed = authSchema.safeParse(rawData);

    if (!parsed.success) {
      return {
        success: false,
        errors: parsed.error.flatten().fieldErrors,
      };
    }

    const validatedData = parsed.data;

    const client = await clientPromise;
    const db = client.db("skybird");
    const usersCollection = db.collection("users");

    const existingUser = await usersCollection.findOne({
      phone: validatedData.phone,
    });

    if (validatedData.mode === "login") {
      // حالت ورود
      if (!existingUser) {
        return {
          success: false,
          error: "کاربری با این شماره موبایل یافت نشد",
        };
      }

      const isValidPassword = await bcrypt.compare(
        validatedData.password,
        existingUser.password,
      );

      if (!isValidPassword) {
        return {
          success: false,
          error: "رمز عبور اشتباه است",
        };
      }
      await setAuthToken(existingUser._id.toString());


      return {
        success: true,
        userId: existingUser._id.toString(),
      };
    } else {

      if (existingUser) {
        return {
          success: false,
          error: "این شماره موبایل قبلاً ثبت‌نام کرده است",
        };
      }

      const hashedPassword = await bcrypt.hash(validatedData.password, 10);

      const newUser = {
        phone: validatedData.phone,
        password: hashedPassword,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result = await usersCollection.insertOne(newUser);


      await setAuthToken(result.insertedId.toString());



      return {
        success: true,
        userId: result.insertedId.toString(),
      };
    }
  } catch (error) {
    console.error("Auth action error:", error);
    return {
      success: false,
      error: "خطای داخلی سرور. لطفاً دوباره تلاش کنید.",
    };
  }
}

// اکشن خروج از حساب کاربری
export async function logoutAction() {
  "use server";
  await removeAuthToken();
  return { success: true };
}


export async function getCurrentSession() {
  "use server";
  const token = await getAuthToken();

  if (!token) {
    return null;
  }

  return { userId: token };

}
