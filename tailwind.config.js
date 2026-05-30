/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        archive: {
          ink: "#060807",
          panel: "#0b100e",
          panelSoft: "#101711",
          moss: "#8d9d5f",
          dim: "#69714a",
          line: "#4d452e",
          paper: "#b7a27f",
          warning: "#b77444",
          success: "#a3c879",
          error: "#c17d63"
        }
      },
      fontFamily: {
        mono: ['"Courier Prime"', '"Courier New"', "monospace"],
        display: ['"Special Elite"', '"Courier New"', "monospace"]
      },
      boxShadow: {
        archive: "0 0 26px rgba(122, 151, 83, 0.08), inset 0 0 38px rgba(0, 0, 0, 0.55)",
        paper: "0 15px 32px rgba(0, 0, 0, 0.38)"
      },
      animation: {
        scan: "scan 7s linear infinite",
        flicker: "flicker 5s infinite",
        unlock: "unlock 0.55s ease-out"
      },
      keyframes: {
        scan: {
          "0%": { transform: "translateY(-120%)" },
          "100%": { transform: "translateY(120%)" }
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "44%": { opacity: "0.82" },
          "45%": { opacity: "0.55" },
          "46%": { opacity: "0.94" },
          "62%": { opacity: "0.78" },
          "64%": { opacity: "1" }
        },
        unlock: {
          "0%": { transform: "scale(0.9)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" }
        }
      }
    }
  },
  plugins: []
};
