/// <reference types="@vitest/browser/providers/playwright" />
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    browser: {
      enabled: true,
      headless: true,
      provider: 'playwright',
      // https://vitest.dev/guide/browser/playwright
      instances: [{ browser: 'chromium' }],
    },
  },
})
