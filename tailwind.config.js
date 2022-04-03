module.exports = {
  content: ["./public/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: '#F5F5F5',
        lightgrey: '#FAFAFA',
        primary: '#2A2935',
      }
    },
  },
  plugins: [
    require("tailwindcss"),
    require("autoprefixer")
  ],
}
