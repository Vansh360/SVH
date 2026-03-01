// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";

// export default defineConfig({
//   plugins: [react()],
//   base: "/SVH/",
// });


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SVH/',   // 👈 important: match your deployment subfolder
  plugins: [react()],
})
