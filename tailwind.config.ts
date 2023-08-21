import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'desaturated-dark-cyan': '#5ba4a4',
        'cyan-bg': '#effafa',
        'light-cyan': '#eef6f6',
        'dark-cyan':  '#7b8e8e',
        'very-dark-cyan': '#2c3a3a',
      }

    },
  },
  plugins: [],
}
export default config
