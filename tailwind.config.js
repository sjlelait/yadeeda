/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors: {
        ydLightBlue: '#14CEE3',
        ydBlue: '#1680CC',
        ydGreen: '#8AD62D',
        ydRed: '#F24730',
        ydYellow: '#FCBB2D',
        ydPurple: '#6218C9',
        ydGray: "#F5FAFA",          
        YouTubeRed: '#FF0000',
        buttonLight: '#F2F2F2',
        textGreen: '#659600',
        textOrange: '#E67802',
        textPurple: '#5416AB',
        ydBG: '#F7F8F8',

      }
    },
    fontFamily: {
      homeP: ['Comic Neue', 'sans-serif'],
      ydText: ['Montserrat', 'sans-serif'],
    }
  },
  plugins: [],
}

