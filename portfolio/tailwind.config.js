/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#F2F2F0",
        ink: {
          DEFAULT: "#141414",
          soft: "#54545A",
          faint: "#8C8C90",
        },
        line: "#DCDCD9",
      },
      fontFamily: {
        display: ["Plus Jakarta Sans", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
      backdropBlur: {
        glass: "18px",
      },
      boxShadow: {
        glass: "0 8px 32px rgba(20, 20, 20, 0.07)",
      },
      borderRadius: {
        panel: "20px",
      },
    },
  },
  plugins: [],
}
