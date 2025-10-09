import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongodb";
import Teklif from "@/models/Teklif";

export async function POST(request) {
  try {
    await dbConnect();

    const body = await request.json();
    const { telefon, email, mesaj } = body;

    // Basit validasyon
    if (!telefon || !email || !mesaj) {
      return NextResponse.json(
        { success: false, error: "Tüm alanlar zorunludur" },
        { status: 400 }
      );
    }

    // Email formatı kontrolü
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Geçerli bir email adresi girin" },
        { status: 400 }
      );
    }

    // Teklif kaydını oluştur
    const teklif = await Teklif.create({
      telefon,
      email,
      mesaj,
    });

    return NextResponse.json(
      {
        success: true,
        data: teklif,
        message:
          "Teklifiniz başarıyla alındı. En kısa sürede size dönüş yapacağız.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Teklif kaydetme hatası:", error);
    return NextResponse.json(
      { success: false, error: "Bir hata oluştu, lütfen tekrar deneyin" },
      { status: 500 }
    );
  }
}

// GET endpoint - Teklifleri listelemek için (opsiyonel)
export async function GET(request) {
  try {
    await dbConnect();

    const teklifler = await Teklif.find({}).sort({ tarih: -1 }).limit(50);

    return NextResponse.json(
      { success: true, data: teklifler },
      { status: 200 }
    );
  } catch (error) {
    console.error("Teklifler getirme hatası:", error);
    return NextResponse.json(
      { success: false, error: "Teklifler alınamadı" },
      { status: 500 }
    );
  }
}
