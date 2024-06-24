import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = CryptoJS.enc.Utf8.parse(
  "abcdefghijklmnop" // Ganti dengan kunci enkripsi yang sama dengan backend
);
const IV = CryptoJS.enc.Utf8.parse("abcdefghijklmnop"); // Gunakan IV yang sama dengan backend

export const encryptId = (id) => {
  try {
    const encryptedId = CryptoJS.AES.encrypt(id.toString(), ENCRYPTION_KEY, {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    });
    const encryptedString = encryptedId.toString();
    console.log("Encrypted ID:", encryptedString); // Log untuk memeriksa hasil enkripsi
    return encryptedString;
  } catch (error) {
    console.error("Encryption error:", error);
    return id.toString(); // Kembalikan ID asli sebagai string jika terjadi kesalahan
  }
};
