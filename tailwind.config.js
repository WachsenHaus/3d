/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        inner: '0px 4px 4px 0px rgba(0, 0, 0, 0.25) inset',
      },
      // font를 추가하는데 pretenderd를 추가한다.

      fontFamily: {
        Pretendard: ['Pretendard'],
      },
    },
  },

  plugins: [],
};
