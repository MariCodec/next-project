/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "custom-main": "#13b0c8",
        "text-b": "#95fb7f",
        "custom-bg": "rgb(39, 43, 51)",
        "gray": "gray",
      },
      boxShadow: {
        custom: "0 4px 8px rgba(149, 251, 127, 0.5)",
      },
    },
  },
  plugins: [],
};
