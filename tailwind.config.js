/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neutral: {
          850: '#1f1f1f',
          900: '#171717',
          950: '#0a0a0a',
        },
        brand: {
          blue: '#2563eb',
          accent: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['"Inter"', '"Noto Sans SC"', 'sans-serif'],
      },
    }
  },
  plugins: [],
}
