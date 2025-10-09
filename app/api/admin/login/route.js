import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "caplin2024"; // .env'de değiştirin

export async function POST(request) {
  try {
    const { password } = await request.json();

    if (password === ADMIN_PASSWORD) {
      // Basit bir token oluştur
      const token = Buffer.from(`caplin-admin-${Date.now()}`).toString(
        "base64"
      );

      // Cookie'ye kaydet (7 gün geçerli)
      cookies().set("admin-token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7, // 7 gün
        path: "/",
      });

      return NextResponse.json(
        { success: true, message: "Giriş başarılı" },
        { status: 200 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "Hatalı şifre" },
        { status: 401 }
      );
    }
  } catch (error) {
    console.error("Admin login hatası:", error);
    return NextResponse.json(
      { success: false, error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}
