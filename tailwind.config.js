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
      backgroundImage: {
        mirandamedia: "url('../app/images/companies/mirandamedia.png')",
        sii: "url('../app/images/companies/sii.png')",
        omio: "url('/companies/omio.svg')",
      },
      backgroundSize: {
        sizeMiranda: "20%",
        sizeSii: "20%",
        sizeOmio: "18%",
      },
      backgroundPosition: {
        center: "center",
        positionOmio: "100px 100px",
      },
    },
  },
  plugins: [],
};
