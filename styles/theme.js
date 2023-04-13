import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#111117")(props),
    },
  }),
};
export const colors = {
  primary: {
    100: "#f7d147",
    200: "#FCC80B",
  },
  one: {
    100: '#f7d147',
    50: '#f7d14772'
  },
  two: {
    100: "#f75b47",
    50: "#f75b4778",
  },
  three: {
    100: '#087BCB',
    50: '#6747f77a',
  },
  four: {
    100: "#439a53",
    50: "#439a537a",
  },

  dark: "#263238",
  dark2: "#111117"
};

const breakpoints = {
  sm: '320px',
  md: '768px',
  lg: '960px',
  xl: '1200px',
  '2xl': '1751px',
}

const customTheme = extendTheme({ styles, colors, breakpoints });

export default customTheme;
