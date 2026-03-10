import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
<<<<<<< HEAD
        // Brand palette — indigo/blue primary
        brand: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#3730A3",
          subtle: "#EEF2FF",
          muted: "#C7D2FE",
        },
        surface: {
          bg: "#F9FAFB",
          card: "#FFFFFF",
          muted: "#F3F4F6",
        },
        ink: {
          DEFAULT: "#111827",
          muted: "#6B7280",
          subtle: "#9CA3AF",
        },
        border: {
          DEFAULT: "#E5E7EB",
          strong: "#D1D5DB",
=======
        // Brand palette
        brand: {
          orange: "#FF6B35",
          "orange-light": "#FF8C5A",
          "orange-dark": "#E55A25",
        },
        surface: {
          bg: "#FFFBF5",
          card: "#FFFFFF",
          muted: "#F7F3EC",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#6B6B6B",
          subtle: "#9A9A9A",
        },
        border: {
          DEFAULT: "#EDE9E0",
          strong: "#D4CEC4",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
        },
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
      },
      boxShadow: {
<<<<<<< HEAD
        card: "0 1px 3px rgba(0,0,0,0.07), 0 0 0 1px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 24px rgba(79,70,229,0.12), 0 0 0 1px rgba(79,70,229,0.08)",
        tool: "0 4px 16px rgba(0,0,0,0.07)",
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease both",
        "slide-in": "slideIn 0.3s ease both",
=======
        card: "0 2px 8px rgba(0,0,0,0.06), 0 0 0 1px rgba(0,0,0,0.04)",
        "card-hover": "0 8px 24px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.04)",
        tool: "0 4px 16px rgba(0,0,0,0.08)",
      },
      animation: {
        "fade-up": "fadeUp 0.4s ease both",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
<<<<<<< HEAD
        slideIn: {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
      },
    },
  },
  plugins: [],
};

export default config;
