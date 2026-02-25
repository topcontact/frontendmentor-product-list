/// <reference types="vitest" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,           // Allows us to use test functions without importing them explicitly
    environment: 'jsdom',    // Mocks a browser environment within the terminal
    setupFiles: './setupTests.js', // Specifies a file to run before running tests
    exclude: ['**/node_modules/**', '**/dist/**', '**/cypress/**', '**/.{idea,git,cache,output,temp}/**', '**/tests/**'], // Exclude Playwright tests
  },
})


