import { cookies } from "next/headers";

export async function setAuthToken(userId: string) {
  const cookiesStore = await cookies();
  cookiesStore.set("auth_token_sky", userId, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}
export async function getAuthToken(): Promise<string | undefined> {
  const cookieStore = await cookies();
  return cookieStore.get("auth_token_sky")?.value;
}
export async function removeAuthToken() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token_sky");
}
