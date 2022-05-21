module.exports = {
  content: [
    './public/**/*.html',
    './src/**/*.{astro,js,svelte,ts,tsx}',
  ],
  plugins: [
    require('@tailwindcss/typography'),
  ]
};
