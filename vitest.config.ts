import react from '@vitejs/plugin-react'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  test: {
    projects: [
      // JSDOM Modeでの設定
      {
        extends: true,
        test: {
          name: 'jsdom',
          globals: true,
          environment: 'jsdom',
          setupFiles: ['./vitest-setup.ts'],
          include: ['**/*.test.{ts,tsx}'],
          // jsdomテストから除外する設定
          exclude: ['**/*.browser.test.{ts,tsx}', 'node_modules', 'dist'],
        },
      },
      // Browser Modeでの設定
      {
        extends: true,
        test: {
          name: 'browser',
          include: ['**/*.browser.test.{ts,tsx}'],
          browser: {
            provider: 'playwright',
            enabled: true,
            headless: true,
            screenshotFailures: false,
            instances: [{ browser: 'chromium' }],
          },
        },
      },
    ],
  },
})
