import type { Config } from "tailwindcss";
import type { PluginsConfig } from "tailwindcss/plugin";
import scrollbarHide from "tailwind-scrollbar-hide";
import containerQueries from "@tailwindcss/container-queries";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
    },

    extend: {
      screens: {
        sm: "520px", // smartphones, Android phones, landscape iPhone
        md: "820px", // tablet, landscape iPad, lo-res laptops ands desktops
        lg: "1025px", // big landscape tablets, laptops, and desktops
      },
      colors: {
        twitterMain: "#1D9BF0",
        twitterDark: "#428AD2",

        promotionPurpleMain: "#B38FFF",
        promotionPurpleDark: "#864DFF",
        promotionPinkMain: "#FF8FA9",
        promotionPinkDark: "#FF668A",

        primaryPale: "#FFFDF0",
        primaryLight: "#FFFACC",
        primarySub: "#FFED8F",
        primaryMain: "#FFE55C",
        primaryDark: "#F3CC00",

        secondaryPale: "#FFF5F0",
        seconderyLight: "#FFECDF",
        secondarySub: "#FFBF5C",
        secondaryMain: "#FF8F5C",
        secondaryDark: "#ED7138",

        tertiaryPale: "#F0F8FF",
        tertiaryLight: "#CCE6FF",
        tertiarySub: "#8FC7FF",
        tertiaryMain: "#5CADFF",
        tertiaryDark: "#0079F2",

        alertPale: "#FFF5F5",
        alertLight: "#FFD1CC",
        alertSub: "#F77F83",
        alertMain: "#EE4553",
        alertDark: "#D21B35",

        approvePale: "#E4FCF6",
        approveLight: "#A7F6E2",
        approveSub: "#33EBBD",
        approveMain: "#14CC9E",
        approveDark: "#0F9573",

        bgMain: "#28292D",

        gray: {
          0: "#ffffff",
          25: "#F8F9FA",
          50: "#F4F5F6",
          100: "#EDEEEF",
          200: "#D8DBDE",
          300: "#AEB2B8",
          400: "#93989F",
          500: "#72777E",
          600: "#60656C",
          700: "#484C51",
          800: "#303338",
          850: "#232529",
          900: "#17191C",
        },
      },

      keyframes: {},
      animation: {},
    },

    fontFamily: {
      sniglet: ["Sniglet", "cursive"],
      pretendard: [
        "-apple - system",
        "BlinkMacSystemFont",
        "Apple SD Gothic Neo",
        "Pretendard",
        "Roboto",
        "Noto Sans KR",
        "Segoe UI",
        "Malgun Gothic",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
        "sans - serif",
      ],
    },

    boxShadow: {
      none: "0px 0px 0px rgba(0, 0, 0, 0)",
      elevation01:
        "0px 2px 5px rgba(0, 0, 0, 0.03), 0px 8px 40px rgba(0, 0, 0, 0.03)",
      elevation02: "0px 20px 24px -4px rgba(0, 0, 0, 0.06)",
      elevation03: "0px 32px 40px -8px rgba(0, 0, 0, 0.07)",
      elevation04: "0px 12px 40px rgba(0, 0, 0, 0.15)",
    },
  },

  plugins: [scrollbarHide, containerQueries] as PluginsConfig[],
} satisfies Config;
