/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        "fade-in": {
          "0%": { opacity: 0, transform: "translateY(10px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        "scale-in": {
          "0%": { opacity: 0, transform: "scale(0.8)" },
          "100%": { opacity: 1, transform: "scale(1)" },
        },
        "slide-in-left": {
          "0%": { opacity: 0, transform: "translateX(-20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "slide-in-right": {
          "0%": { opacity: 0, transform: "translateX(20px)" },
          "100%": { opacity: 1, transform: "translateX(0)" },
        },
        "blob": {
          "0%": { transform: "scale(1) translate(0px, 0px)" },
          "33%": { transform: "scale(1.1) translate(30px, -50px)" },
          "66%": { transform: "scale(0.9) translate(-20px, 20px)" },
          "100%": { transform: "scale(1) translate(0px, 0px)" },
        },
        "blob-slow": {
          "0%": { transform: "scale(1) translate(0px, 0px)" },
          "33%": { transform: "scale(1.1) translate(30px, -50px)" },
          "66%": { transform: "scale(0.9) translate(-20px, 20px)" },
          "100%": { transform: "scale(1) translate(0px, 0px)" },
        },
        "float": {
          "0%": { transform: "translateY(0px) translateX(0px)", opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { transform: "translateY(-100px) translateX(20px)", opacity: 0 },
        },
        "float-slow": {
          "0%": { transform: "translateY(0px) translateX(0px)", opacity: 0 },
          "50%": { opacity: 0.7 },
          "100%": { transform: "translateY(-100px) translateX(20px)", opacity: 0 },
        },
        "text-gradient": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "text-gradient-slow": {
          "0%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
          "100%": { backgroundPosition: "0% 50%" },
        },
        "pulse-subtle": {
          "0%, 100%": { transform: "scale(1)", opacity: 1 },
          "50%": { transform: "scale(1.05)", opacity: 0.9 },
        },
        "bounce-subtle": {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
        "typing": {
          from: { width: "0" },
          to: { width: "100%" },
        },
        "blink-caret": {
          "from, to": { borderColor: "transparent" },
          "50%": { borderColor: "hsl(var(--primary))" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 1s ease forwards",
        "scale-in": "scale-in 1s ease forwards",
        "slide-in-left": "slide-in-left 1s ease forwards",
        "slide-in-right": "slide-in-right 1s ease forwards",
        "blob": "blob 10s infinite alternate",
        "blob-slow": "blob-slow 20s infinite alternate",
        "float": "float 15s infinite",
        "float-slow": "float-slow 30s infinite",
        "text-gradient": "text-gradient 8s linear infinite",
        "text-gradient-slow": "text-gradient-slow 15s linear infinite",
        "pulse-subtle": "pulse-subtle 3s ease-in-out infinite",
        "bounce-subtle": "bounce-subtle 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
