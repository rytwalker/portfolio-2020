import { red, neutral } from "./colors"
import { primaryFont, typeScale, headingFont } from "./typography"
import { above, below } from "./breakpoints"

export const light = {
  body: "#fafafa",
  text: "#171717",
  toggleBorder: "#FFF",
  gradient: "linear-gradient(#39598A, #79D7ED)",
  tableHeader: "#5294e2",
  altRowColor: "#f2f2f2",
  accentColor: "#5998c0"
}

export const dark = {
  body: "#171717",
  text: "#F3F4F7",
  toggleBorder: "#6B8096",
  gradient: "linear-gradient(#091236, #1E215D)",
  tableHeader: "#252629",
  altRowColor: "#303638",
  accentColor: "#FFC424"
}

const redThemeColors = {
  primary: red[300],
  primaryHover: red[200],
  primaryActive: red[200],
  textColor: neutral[100],
  textColorInverted: neutral[500],
  disabled: neutral[300],
  disabledText: neutral[400]
}

const defaultTheme = {
  primaryFont,
  headingFont,
  typeScale,
  colors: {
    primary: "#69d7ef",
    white: neutral[100],
    black: neutral[500],
    grey: neutral[300],
    lightGrey: neutral[200],
    darkGrey: neutral[400]
  },
  above,
  below
}

export const lightTheme = { ...defaultTheme, ...light }
export const darkTheme = { ...defaultTheme, ...dark }
export const redTheme = { ...defaultTheme, ...redThemeColors }
