import { inter,
  montserrat,
  open_sans,
  lato,
  ubuntu_mono,
  ubuntu,
  poppins,
  poltawski_nowy,
  didact_gothic,
  titillium_web } from "./public/fonts";

const { fontFamily } = require('tailwindcss/defaultTheme')

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
        darkBg: "#0a0a0a",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    fontFamily: {
      inter: ['var(--font-inter)', ...fontFamily.sans],
      montserrat: ['var(--font-montserrat)', ...fontFamily.serif],
      open_sans: ['var(--font-open-sans)', ...fontFamily.mono],
      lato: ['var(--font-lato)', ...fontFamily.sans],
      ubuntu_mono: ['var(--font-ubuntu-mono)', ...fontFamily.serif],
      ubuntu: ['var(--font-ubuntu)', ...fontFamily.mono],
      poppins: ['var(--font-poppins)', ...fontFamily.sans],
      poltawski_nowy: ['var(--font-poltawski-nowy)', ...fontFamily.serif],
      didact_gothic: ['var(--font-didact-gothic)', ...fontFamily.mono],
      titillium_web: ['var(--font-titillium-web)', ...fontFamily.sans],
    }
  },
  plugins: [require("tailwindcss-animate")],
}