/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
            colors: {
        'ffuf-rose': '#f6c8d2',
        'ffuf-purple': '#732b63',
        'ffuf-blue': '#2a8dbd',
        'ffuf-black': '#000000',
        'ffuf-white': '#ffffff',
      },
    },
  },
  plugins: [],
}

