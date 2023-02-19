import { ChakraProvider, useColorMode } from "@chakra-ui/react";
import NextNprogress from "nextjs-progressbar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import DarkModeCheck from "../components/DarkModeCheck";
import customTheme from "../styles/theme";
import { colors } from "../styles/theme";

import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <NextNprogress
          color={colors.primary["100"]}
          startPosition={0.3}
          stopDelayMs={200}
          height={2}
        />
        <Navbar />

        <Component {...pageProps} />
        {/* <Footer /> */}
      </ChakraProvider>
    </>
  );
}

export default MyApp;
