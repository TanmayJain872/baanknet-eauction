/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        
        "4xl": "40px",
      },
      colors: {
        other: {
          blue: {
            900: "#0D2A6E",
          },
          purple: {
            100: "#E0E1FF",
            300: "#8F53AA",
            500: "#303087",
            600: "#2E3192",
          }
        }
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        borderExpand: {
          '0%': {
            transform: 'scaleX(0)',
            transformOrigin: 'center',
          },
          '50%': {
            transform: 'scaleX(1)',
            transformOrigin: 'center',
          },
          '100%': {
            transform: 'scaleX(1)',
            transformOrigin: 'center',
          },
        },
        select: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      },
      animation: {
        marquee: 'marquee 50s linear infinite',
        'borderExpand': 'borderExpand 0.5s ease-out',
        select: 'select 1s ease-in-out infinite',
      }
    },
  },
  plugins: [],
};
