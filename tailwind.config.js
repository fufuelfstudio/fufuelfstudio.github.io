/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"], // 告訴編譯器去掃描同資料夾下的 HTML
  theme: {
    extend: {
      colors: {
        fufuBlue: '#e0f2f7',
        fufuPink: '#fdf2f8',
        fufuWarm: '#fffbf7',
        fufuText: '#3d3d3d',
        fufuCyan: '#0ea5e9',
        lineGreen: '#06C755',
      },
      fontFamily: {
        sans: ['Noto Sans TC', 'sans-serif'],
        maru: ['Zen Maru Gothic', 'sans-serif'],
      },
      animation: {
        'float-slow': 'float 10s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'float-up': 'floatUp 1.5s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        floatUp: {
          '0%': { transform: 'translateY(0) scale(0.8)', opacity: 1 },
          '100%': { transform: 'translateY(-80px) scale(1.5)', opacity: 0 },
        }
      }
    }
  }
}