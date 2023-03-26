/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        typescript: "#007acc",
        javascript: "#F0DB4F",
        react: "#61DBFB",
        html: "#E34C26",
        css: "#2565AE",
        tailwind: "#3490dc",
        python: "#fbcb24",
        django: "#092e20",
        pandas: "#E70488",
        postgre: "#008bb9",
        nextjs: "#a8b9c0",
      },
    },
  },
  plugins: [],
};
