import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Text, useColorMode } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect } from "react";

const DarkModeCheck = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box p={".2rem"} cursor={"pointer"} onClick={() => toggleColorMode()}>
        {colorMode === "dark" ? <MoonIcon /> : <SunIcon />}
      </Box>
    </>
  );
};

export default DarkModeCheck;
