import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import dbConnect from "@/lib/mongodb";
import Teklif from "@/models/Teklif";

// Admin kontrolü
function checkAdminAuth() {
  const cookieStore = cookies();
  const token = cookieStore.get("admin-token");
  return !!token;
}

// Teklifleri getir
export async function GET(request) {
  try {
    if (!checkAdminAuth()) {
      return NextResponse.json(
        { success: false, error: "Yetkisiz erişim" },
        { status: 401 }
      );
    }

    await dbConnect();

    const teklifler = await Teklif.find({}).sort({ tarih: -1 }).limit(100);

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

// Teklif durumu güncelle
export async function PATCH(request) {
  try {
    if (!checkAdminAuth()) {
      return NextResponse.json(
        { success: false, error: "Yetkisiz erişim" },
        { status: 401 }
      );
    }

    await dbConnect();

    const { id, durum } = await request.json();

    if (!id || !durum) {
      return NextResponse.json(
        { success: false, error: "ID ve durum gerekli" },
        { status: 400 }
      );
    }

    const teklif = await Teklif.findByIdAndUpdate(id, { durum }, { new: true });

    if (!teklif) {
      return NextResponse.json(
        { success: false, error: "Teklif bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json({ success: true, data: teklif }, { status: 200 });
  } catch (error) {
    console.error("Teklif güncelleme hatası:", error);
    return NextResponse.json(
      { success: false, error: "Teklif güncellenemedi" },
      { status: 500 }
    );
  }
}

// Teklif sil
export async function DELETE(request) {
  try {
    if (!checkAdminAuth()) {
      return NextResponse.json(
        { success: false, error: "Yetkisiz erişim" },
        { status: 401 }
      );
    }

    await dbConnect();

    const { searchParams } = new URL(request.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { success: false, error: "ID gerekli" },
        { status: 400 }
      );
    }

    const teklif = await Teklif.findByIdAndDelete(id);

    if (!teklif) {
      return NextResponse.json(
        { success: false, error: "Teklif bulunamadı" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Teklif silindi" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Teklif silme hatası:", error);
    return NextResponse.json(
      { success: false, error: "Teklif silinemedi" },
      { status: 500 }
    );
  }
}
