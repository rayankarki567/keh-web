const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dblue: '#00006b'
      },
      height: {
        '138': '32rem',
      },
      fontFamily: {
        sans: ['ui-sans-serif', ...defaultTheme.fontFamily.sans],
        serif: ['Martel', ...defaultTheme.fontFamily.serif], 
      },
      
    },
  },
  plugins: [],
};
