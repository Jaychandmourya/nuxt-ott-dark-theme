import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    server: {
      host: true,
      port: 3000
    },
    plugins: [
      tailwindcss(),
    ],
  },
})