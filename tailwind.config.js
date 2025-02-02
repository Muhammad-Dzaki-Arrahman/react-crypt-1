module.exports = {
  theme: {
    extend: {
      colors: {
        primary: "#FD7F20", // Set your desired primary color
        secondary: "#FC2E20", // Set your desired primary color
        tersier: "#FDB750", // Set your desired primary color
        primaryBlack: "#010100", // Set your desired primary color
      },
    },
  },
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
