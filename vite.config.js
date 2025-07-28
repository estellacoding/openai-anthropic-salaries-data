import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/openai-anthropic-salaries-data/' // 對應 GitHub Pages repo 名稱
});