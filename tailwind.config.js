/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        'repeat-gradient-background':
          'linear-gradient(90deg,rgba(0,2,4,.95) 0,rgba(23,53,75,0) 50.14%,rgba(0,2,4,.95) 100%),url(/src/assets/background/bg_common-repeat.png)',
      }),
    },
    plugins: [],
  },
};
