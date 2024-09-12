import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
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
        primaryCol: "#0A0B0A",
        secondaryCol: "#EFE7D2",
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
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        titleAnim: {
          '0%': { transform: 'translateX(100px)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "100" },
        },
        menuNameAnim: {
          '0%': { transform: 'translateY(10px)', opacity: "0" },
          '100%': { transform: 'translateY(0)', opacity: "100" },
        },
        moveFavicon: {
          '0%': { transform: 'translateX(0)' },
          // '25%': { transform: 'translateX(calc(100px))' },
          '50%': { transform: 'translateX(calc(100px))' },
          // '75%': { transform: 'translateX(calc(-100px))' },
          '100%': { transform: 'translateX(0)' },
        },
        aboutSlide1: {
          '0%': { transform: 'translateX(-300px)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "100" },
        },
        aboutSlide2: {
          '0%': { transform: 'translateX(300px)', opacity: "0" },
          '100%': { transform: 'translateX(0)', opacity: "100" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "titleAnim": 'titleAnim 1s ease-in-out',
        "menuNameAnim": 'menuNameAnim 1s ease-in-out',
        "moveFavicon": 'moveFavicon 1s ease-in-out',
        "aboutSlide1": "aboutSlide1 1s ease-in-out",
        "aboutSlide2": "aboutSlide2 1s ease-in-out",
      },
      backgroundImage: {
        'landing-hero': "url('/assets/landing-page/landing-hero.png')",
        'landing-card-1': "url('/assets/landing-page/landing-card-1.png')",
        'landing-card-2': "url('/assets/landing-page/landing-card-2.png')",
        'landing-card-3': "url('/assets/landing-page/landing-card-3.png')",
        'menu-hero': "url('/assets/menu/menu-hero.png')",
        'reservation-hero': "url('/assets/reservation/reservation-hero.png')",
        'loader': "url('/loader.jpg')",
        'about-hero': "url('/assets/about/bg-about.png')",
        'contact-hero': "url('/assets/contact/contact-hero.png')",
      }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config