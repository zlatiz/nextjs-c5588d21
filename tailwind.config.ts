import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFD200',
        muted: '#777777',
        surface: '#ffffff',
        border: '#e6e6e6',
        text: '#111827'
      },
      fontFamily: {
        sans: ['Manrope', 'Plus Jakarta Sans', 'DM Sans', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        subtle: '0 1px 3px rgba(16,24,40,0.04), 0 1px 2px rgba(16,24,40,0.06)'
      }
    }
  },
  plugins: []
};
export default config;
