module.exports = {
  purge: {
    enabled: true,
    mode: 'all',
    // preserveHtmlElements: false,
    content: [
      './admin/js/*.js',
    ],
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
