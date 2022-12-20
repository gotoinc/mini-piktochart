/** @type {import('tailwindcss').Config} */
module.exports = {
  // replace purge with content https://tailwindcss.com/docs/upgrade-guide#configure-content-sources
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      boxShadow: {
        'box-shadow-block': '0px 0px 30px -15px var(--gray-dark)',
      },
    },
  },
  plugins: [],
}
