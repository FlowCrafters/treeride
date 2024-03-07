/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['dark'],
  content: [
    './src/**/*.{ts,tsx}',
  ],
  prefix: '',
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      backgroundImage: {
        main: `linear-gradient(to bottom, var(--treeride-theme--background) 0%, var(--treeride-theme--background-secondary) 70%)`,
      },
      colors: {
        selection: {
          DEFAULT: 'var(--treeride-theme--selection)',
          100: 'var(--treeride-theme--selection-100)',
        },
        text: {
          DEFAULT: 'var(--treeride-theme--text)',
          100: 'var(--treeride-theme--text-100)',
          400: 'var(--treeride-theme--text-400)',
          600: 'var(--treeride-theme--text-600)',
        },
        loader: {
          DEFAULT: 'var(--treeride-theme--loader)',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: {
          'DEFAULT': 'hsl(var(--background))',
          'primary': 'var(--treeride-theme--background)',
          'primary-blurred': 'var(--treeride-theme--background-blurred)',
          'secondary': 'var(--treeride-theme--background-secondary)',
        },
        foreground: 'var(--treeride-theme--text)',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}
