import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST() {
  try {
    // Cookie'yi sil
    const cookieStore = await cookies();
    cookieStore.delete("admin-token");

    return NextResponse.json(
      { success: true, message: "Çıkış başarılı" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Admin logout hatası:", error);
    return NextResponse.json(
      { success: false, error: "Bir hata oluştu" },
      { status: 500 }
    );
  }
}
