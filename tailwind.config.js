/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}",
  "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
        backgroundImage:{
          'firelink':'url("/assets/images/firelink.jpg")',
        },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

