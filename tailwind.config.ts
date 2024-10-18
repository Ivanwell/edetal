import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        'regal-blue': 'rgba(255, 236, 68, 1)',
        'main-color': 'rgba(0, 60, 214, 1)',
        'secondary-color': 'rgba(236, 243, 254, 1)',
        'border-light': 'rgba(149, 179, 255, 1)',
        'orange-btn': 'rgba(237, 100, 48, 1)',
      },
      screens: {
        sm: '200px',
      },
    },
  },
  plugins: [],
}
export default config
