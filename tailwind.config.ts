import type { Config } from 'tailwindcss'

export default <Partial<Config>> {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      screens: {
        "xl": "1024px",
        "2xl": "1024px",
      },
    },
    extend : {
      colors: {
        secondary: '#5F5F5FFF',
        blue: {
          '50': '#eefaff',
          '100': '#d8f3ff',
          '200': '#baeaff',
          '300': '#8be0ff',
          '400': '#54ccff',
          '500': '#2cafff',
          '600': '#1e97fb',
          '700': '#0e7ae7',
          '800': '#1262bb',
          '900': '#155493',
          '950': '#123359',
        },
      },
      keyframes: {
        wiggle: {
          '0%, 90%, 100%': { transform: 'rotate(0)' },
          '30%': { transform: 'rotate(12deg)' },
        }
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
    }
  },
}
