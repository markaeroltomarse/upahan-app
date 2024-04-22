import type { Config } from "tailwindcss";
const defaultTheme = require("tailwindcss/defaultTheme");

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}", ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        HKGrotesk: ["var(--font-HKGrotesk)"],
        Thunder: ["var(--font-Thunder)"],
        PTMono: ["var(--font-PTMono)"],
        Staatliches: ["var(--font-Staatliches)"],
        Moche: ["var(--font-Moche)"],
        Inter: ["var(--font-Inter)"],
        Jost: ["var(--font-Jost)"],
        Roboto: ["Roboto", ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        "header-display": [
          "8.75rem",
          {
            lineHeight: "7.188rem",
            letterSpacing: "-0.016rem",
            fontWeight: "700",
          },
        ],
        "xl-display": [
          "6.875rem",
          {
            lineHeight: "8.438rem",
            letterSpacing: "-0.016rem",
            fontWeight: "700",
          },
        ],
        "logo-display": [
          "3.563rem",
          { lineHeight: "4rem", letterSpacing: "-0.016rem", fontWeight: "700" },
        ],
        "lg-display": [
          "1.625rem",
          { lineHeight: "4rem", letterSpacing: "-0.016rem", fontWeight: "700" },
        ],
        "md-display": [
          "2.813rem",
          {
            lineHeight: "3.25rem",
            letterSpacing: "initial",
            fontWeight: "700",
          },
        ],
        "sm-display": [
          "2.25rem",
          {
            lineHeight: "2.75rem",
            letterSpacing: "initial",
            fontWeight: "700",
          },
        ],
        "lg-headline": [
          "2rem",
          { lineHeight: "2.5rem", letterSpacing: "initial", fontWeight: "700" },
        ],

        "md-headline": [
          "1.75rem",
          {
            lineHeight: "2.25rem",
            letterSpacing: "initial",
            fontWeight: "700",
          },
        ],
        "sm-headline": [
          "1.5rem",
          { lineHeight: "2rem", letterSpacing: "initial", fontWeight: "700" },
        ],
        "lg-title": [
          "1.375rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "initial",
            fontWeight: "700",
          },
        ],
        "md-title": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.009rem",
            fontWeight: "700",
          },
        ],
        "sm-title": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.006rem",
            fontWeight: "700",
          },
        ],
        "lg-label": [
          "1.625rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.006rem",
            fontWeight: "700",
          },
        ],
        "md-label": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.031rem", fontWeight: "700" },
        ],
        "sm-label": [
          "0.688rem",
          { lineHeight: "1rem", letterSpacing: "0.031rem", fontWeight: "700" },
        ],
        "sm-label-higher": [
          "1.625rem",
          {
            lineHeight: "1.75rem",
            letterSpacing: "initial",
            fontWeight: "700",
          },
        ],
        "lg-body": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.003rem",
            fontWeight: "500",
          },
        ],
        "md-body": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.016rem",
            fontWeight: "500",
          },
        ],
        "sm-body": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.003rem", fontWeight: "500" },
        ],
        "lg-footer": [
          "1rem",
          {
            lineHeight: "1.5rem",
            letterSpacing: "0.031rem",
            fontWeight: "500",
          },
        ],
        "md-footer": [
          "0.875rem",
          {
            lineHeight: "1.25rem",
            letterSpacing: "0.016rem",
            fontWeight: "500",
          },
        ],
        "sm-footer": [
          "0.75rem",
          { lineHeight: "1rem", letterSpacing: "0.003rem", fontWeight: "500" },
        ],
      },
      typography: () => ({
        DEFAULT: {
          css: {
            h1: {
              margin: 0,
            },
            h2: {
              margin: 0,
            },
            h3: {
              margin: 0,
            },
            h4: {
              margin: 0,
            },
            h5: {
              margin: 0,
            },
            h6: {
              margin: 0,
            },
            p: {
              margin: 0,
            },
            a: {
              margin: 0,
              textDecoration: "none",
            },
            button: {
              margin: 0,
            },
            img: {
              margin: 0,
            },
          },
        },
      }),
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("@tailwindcss/forms")],
};
export default config;
