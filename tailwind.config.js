/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"], // Ensures Tailwind scans all React components
  // tailwind.config.js (add a custom color palette)
// tailwind.config.js (add a custom color palette)
theme: {
  extend: {
    colors: {
      forest: {
        light: '#355E3B',
        DEFAULT: '#254336',
        dark: '#1A2F2B',
      },
      mint: '#85E89D',
      cream: '#FAFAF5',
    },
  },
}
}
