import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily:{
        'pop': ['var(--poppins)', 'sans-serif'],
        'abril': ['var(--abril)', 'sans-serif'],
      },
      display: ["group-hover"],
    },
  },
  plugins: [],
}
export default config
