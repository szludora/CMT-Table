import { defineConfig } from "vite";
import replace from '@rollup/plugin-replace';

export default defineConfig({
  base: '',
  optimizeDeps: {
    include: ["react-bootstrap"],
  },
  plugins: [
    replace({
      preventAssignment: true,
      'use client': '',
    })
  ]
});