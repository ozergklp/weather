/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    fontSize: {
      small: '5rem',
      large: '17rem',
      search: '1.5rem',
    }
  },
  plugins: [],
}