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
        bgLight: "#0b79f7",
        bgDark: "#252525",
        textLight: "#2c2e35",
        textDark: "#0a0a0b",
        blue: "#1d4ed8",
        light: "#CACACA",
      },
      backgroundImage: {
        texture1: 'url("https://br.freepik.com/fotos-gratis/glitter_4167598.htm#query=textura%204k&position=15&from_view=keyword&track=ais&uuid=2cdfc528-f149-4066-8a49-de1a9a3660c1")'
      },
    },
  },
  plugins: [],
}
export default config
