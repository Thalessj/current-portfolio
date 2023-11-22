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
        bglight: "#0b79f7",
        bgDark: "#0bb2f7",
        textLight: "#2c2e35",
        textDark: "#0a0a0b",
      },
      backgroundImage: {
        foreground: "url('/images/foreground.jpg')",
      },
    },
  },
  plugins: [],
}
export default config
