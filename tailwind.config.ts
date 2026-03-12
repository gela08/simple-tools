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
=======
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
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
<<<<<<< HEAD
          DEFAULT: "#E5E7EB",
          strong: "#D1D5DB",
=======
          DEFAULT: "#EDE9E0",
          strong: "#D4CEC4",
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
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
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
        slideIn: {
          from: { opacity: "0", transform: "translateX(-8px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
<<<<<<< HEAD
=======
=======
>>>>>>> cd1576042c124b1971e7287fc9ef69b7cce2b85f
>>>>>>> cfe3c260f4ca9edf5d67869bdfb381c9cf117ae9
      },
    },
  },
  plugins: [],
};

export default config;
