/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    daisyui: {
    themes: [
      "retro",
      {
        honeyglow: {
          

    "primary": "#D4A373",
              

    "secondary": "#CCD5AE",
              

    "accent": "#D9ED92",
              

    "neutral": "#DAD7CD",
              

    "base-100": "#FEFAE0",
              

    "info": "#93c5fd",
              

    "success": "#a5f3fc",
              

    "warning": "#fde68a",
              

    "error": "#fca5a5",
              },
            },
          ],
        },
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}

