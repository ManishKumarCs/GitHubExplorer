const colors=require('tailwindcss/colors');

module.exports = {
   content: ["src/**/*.jsx"],
  theme: {
    extend: {
      colors:{
        box: {
            "default": "rgb(244 63 94)",
            "light": "rgb(251 113 133)",
            "dark": "rgb(225 29 72)",
        },
      },
    }, 
  },
  plugins: [],
}
