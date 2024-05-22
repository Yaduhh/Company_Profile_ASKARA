import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Membuat server bisa diakses dari luar
    port: 5173, // Pilih port yang ingin digunakan
  },
});
