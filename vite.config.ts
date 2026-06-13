import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

// Configuration volontairement minimale et portable :
// aucune dépendance à Google AI Studio ni à un hébergeur particulier.
export default defineConfig({
  plugins: [react(), tailwindcss()],
});
