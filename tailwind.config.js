/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],

  // ✅ Kích hoạt dark mode bằng thuộc tính [data-theme="dark"]
  darkMode: ["class", "[data-theme='dark']"],

  theme: {
    extend: {
      colors: {
        // Tone màu trung tính, dễ đọc
        bg: "var(--color-bg)",
        "bg-secondary": "var(--color-bg-secondary)",
        border: "var(--color-border)",
        text: "var(--color-text)",
        accent: "var(--color-accent)",
        "accent-hover": "var(--color-accent-hover)",
        "message-user": "var(--color-message-user)",
        "message-bot": "var(--color-message-bot)",
      },

      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "Avenir",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },

      boxShadow: {
        soft: "0 2px 4px rgba(0, 0, 0, 0.05)",
        card: "0 4px 8px rgba(0, 0, 0, 0.08)",
      },

      borderRadius: {
        xl: "0.75rem",
        "2xl": "1rem",
      },
    },
  },

  plugins: [],
};
