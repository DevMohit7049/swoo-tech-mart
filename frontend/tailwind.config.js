/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        /* ==========================================
           SHADCN REQUIRED — mat chhona inhe
        ========================================== */
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

        /* ==========================================
           CUSTOM E-COMMERCE COLORS
           Use: bg-brand-primary, text-brand-red, etc.
        ========================================== */
        brand: {
          primary: "hsl(var(--brand-primary))",
          "primary-dark": "hsl(var(--brand-primary-dark))",
          "primary-light": "hsl(var(--brand-primary-light))",
          red: "hsl(var(--brand-red))",
          amber: "hsl(var(--brand-amber))",
          "amber-light": "hsl(var(--brand-amber-light))",
          gray:"hsl(var(--brand-gray-light))",
        },

        /* Layout */
        header: "hsl(var(--header-bg))",
        navbar: "hsl(var(--navbar-bg))",
        footer: "hsl(var(--footer-bg))",
        section: "hsl(var(--section-bg))",

        /* Product */
        price: "hsl(var(--price-color))",
        "price-old": "hsl(var(--price-old))",

        /* Badges */
        badge: {
          sale: "hsl(var(--badge-sale))",
          new: "hsl(var(--badge-new))",
          hot: "hsl(var(--badge-hot))",
        },

        /* UI */
        star: "hsl(var(--star-color))",
        wishlist: "hsl(var(--wishlist-btn))",
        compare: "hsl(var(--compare-btn))",

        /* ==========================================
      Buttons
   ============================================*/
        buttons: {
          btn: "hsl(var(--button-color))",
        },
      },

      /* ==========================================
         FONT FAMILY
      ========================================== */
      fontFamily: {
        sans: ["var(--font-sans)"],
      },

      /* ==========================================
         FONT SIZE
      ========================================== */
      fontSize: {
        "2xs": "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
      },

      /* ==========================================
         SPACING
      ========================================== */
      spacing: {
        section: "var(--spacing-section)",
        container: "var(--spacing-container)",
      },




      /* ==========================================
         BORDER RADIUS
      ========================================== */
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
        full: "var(--radius-full)",
      },

      /* ==========================================
         BOX SHADOW
      ========================================== */
      boxShadow: {
        card: "var(--shadow-card)",
        "card-hover": "var(--shadow-card-hover)",
        dropdown: "var(--shadow-dropdown)",
      },

      /* ==========================================
         MAX WIDTH
      ========================================== */
      maxWidth: {
        container: "var(--spacing-container)",
      },
    },
  },
  plugins: [],
}