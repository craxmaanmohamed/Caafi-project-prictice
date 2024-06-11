/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'pr-sectionB1':" url(/images/lineB.jpg)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
          "AboutBackround":" linear-gradient(  #000000ac,#2babda75) ,url(/images/AboutBgImg.jpg)",
          "ServiceBackround":" linear-gradient(  #000000ac,#2babda75) ,url(/images/blogImg1.jpg)",
          "BlogBgImage":" linear-gradient(  #000000ac,#2babda75) ,url(/images/BlogBgImage.jpg)",
          "contactBgImage":" linear-gradient(  #000000ac,#2babda75) ,url(/images/contactBgImage.jpg)"


      },
      colors:{
        'pr-color':'rgba(23, 155, 215, 1)',
        'Gold-color':'rgba(225, 215, 0)',
        'spr-color':'rgba(0, 44, 63, 0.97)'
      }
    },
  },
  plugins: [],
};
