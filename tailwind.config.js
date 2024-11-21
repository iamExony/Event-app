/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  variants: {
    extend: {
      hover: ["responsive"],
    },
  },
  theme: {
    extend: {
      colors: {
        navBg: " #FFFDFD",
        White: "#FFFFFF",
        Black: "#000000",
        Blue: "#0077C2",
        primaryCol: "#DF3602",
        primaryColC: "#EA7956",
        primaryHover: "#C93102",
        formColor: "#AAB2B7",
        formBorder: "#F2F9FC",
        bodyText: "#4B5B65",

        headerText: "#001827",
        DarkMode: " #001F38",
        inputBorder: "#AAB2B7",
        inputBg: "#F9F9F9",
        darkModeText: "#F7FBFD",
        heroBg: "#FEFAF8",
        DarkMode: " #001F38",
        navyBlack: "#001827",
        borderGrey: "#D9D9D9",
        borderColor: "#c0bebe",
      },
      fontFamily: { Euclid: "Euclid Circular A" },
      listStyleType: {
        none: "none",
        disc: "disc",
        decimal: "decimal",
        square: "square",
        roman: "upper-roman",
      },
    },
  },
};
