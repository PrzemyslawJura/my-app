/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        /*https://unsplash.com/photos/EW_rqoSdDes?utm_source=unsplash&utm_medium=referral&utm_content=creditShareLink*/
        /*author: Nathon Oski*/
        'main-image': "url('/src/assets/main-image.jpg')",
      },
      backgroundColor: {
        'bgGray': '#f8f9fa',
      }
    },
  },
  plugins: [],
}
