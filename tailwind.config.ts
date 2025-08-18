import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#FFFFFF",
        surface: "#FFFFFF",
        text: "#0A1B2E",      /* azul muy oscuro para texto */
        muted: "#466289",     /* azul medio para secundario */
        accent: "#0A84FF",    /* azul principal */
        accent2: "#FF6B00",   /* naranja */
        ring: "rgba(10,132,255,0.45)",
        divider: "rgba(10,27,46,0.10)"
      },
      boxShadow: {
        brand: "0 12px 40px rgba(10,132,255,0.22)",
        soft: "0 8px 32px rgba(10,27,46,0.08)"
      },
      borderRadius: {
        brand: "14px"
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(12px)" }
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      },
      animation: {
        float: "float 10s ease-in-out infinite",
        ticker: "ticker 30s linear infinite"
      }
    }
  },
  plugins: []
};

export default config;