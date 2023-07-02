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
        YouTubeRed: '#FF0000',
        buttonLight: '#F2F2F2',
      }
    },
    fontFamily: {
      homeP: ['Comic Sans MS', 'cursive']
    }
  },
  plugins: [],
}

