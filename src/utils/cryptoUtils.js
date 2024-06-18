import CryptoJS from "crypto-js";

const ENCRYPTION_KEY = CryptoJS.enc.Utf8.parse("1234567890123456");
const IV = CryptoJS.enc.Utf8.parse("1234567890123456"); // IV tetap 16 karakter

export const encryptId = (id) => {
  const encrypted = CryptoJS.AES.encrypt(
    CryptoJS.enc.Utf8.parse(id.toString()),
    ENCRYPTION_KEY,
    {
      iv: IV,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7,
    }
  );
  return encrypted.toString();
};
