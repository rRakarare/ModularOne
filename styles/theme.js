import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

export const styles = {
  global: (props) => ({
    body: {
      color: mode("gray.800", "whiteAlpha.900")(props),
      bg: mode("gray.100", "#1e1e2b")(props),
    },
  }),
};
export const colors = {
  primary: {
    100: "#f7d147",
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
    100: '#6747f7',
    50: '#6747f77a',
  },
  four: {
    100: "#439a53",
    50: "#439a537a",
  },

  dark: "#263238",
  dark2: "#1e1e2b"
};

const customTheme = extendTheme({ styles, colors });

export default customTheme;
