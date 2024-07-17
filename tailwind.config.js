/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      /*
      sans: ['Roboto', 'sans-serif'] means that when you use the sans class in your HTML, it will apply the 'Roboto' font first. If 'Roboto' is not available, it will fall back to the generic 'sans-serif' font.
      '70/30': '70% 28%' means that when you use the grid-cols-70/30 class, it will create a grid layout with two columns. The first column will take up 70% of the space, and the second column will take up 28% of the space.
      No, "sans-serif" is not a specific font name; it is a generic font family :Sans-serif: Fonts without the small lines or strokes at the ends of characters. "Sans" means "without" in French
       */
      fontFamily:{
        sans:['Roboto','sans-sarif'],
      },
      gridTemplateColumns:{
        '70/30':'70% 28%',
      },
    },
  },
  plugins: [],
}