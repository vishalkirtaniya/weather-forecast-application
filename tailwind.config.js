/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customGrey: "#D6D7DA",
        customWhite: "#FFFFFF",
        customOffWhite: "#F6F6F8",
        customBlue: "#4050D2",
      },
    },
  },
  plugins: [],
};
