import mongoose from "mongoose";

const TeklifSchema = new mongoose.Schema({
  telefon: {
    type: String,
    required: [true, "Telefon numarası gereklidir"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Email gereklidir"],
    trim: true,
    lowercase: true,
  },
  mesaj: {
    type: String,
    required: [true, "Mesaj gereklidir"],
    trim: true,
  },
  tarih: {
    type: Date,
    default: Date.now,
  },
  durum: {
    type: String,
    enum: ["bekliyor", "yanıtlandı"],
    default: "bekliyor",
  },
});

export default mongoose.models.Teklif || mongoose.model("Teklif", TeklifSchema);
