import { Box, Heading, Text, useTheme, VStack } from "@chakra-ui/react";

const FrontText = () => {
  const theme = useTheme();

  return (
    <>
      <Box
        marginTop={"200px"}
        marginBottom={"200px"}
        paddingX={{
          base: "1.4rem",
          sm: "3rem",
          md: "4rem",
          lg: "5rem",
          xl: "8rem",
          "2xl": "14rem",
        }}
      >
        <VStack align={"flex-start"}>
          <Text fontWeight={"medium"} fontSize={"large"}>
            Leistungen
          </Text>

          <Heading
            marginBottom={"1rem"}
            color={theme.colors.primary[100]}
            fontWeight={"bold"}
            fontSize={{
              base: "3xl",
              md: "4xl",
              lg: "4xl",
              xl: "5xl",
              "2xl": "7xl",

            }}
          >
            Modular One
          </Heading>

          <Text marginBottom={"1.4rem"} fontWeight={"medium"} fontSize={"2xl"}>
          Ihr Partner für nachhaltige Gebäude
          </Text>

          {/* <Text fontWeight={"medium"} fontSize={"md"}>
          Ihr Partner für nachhaltige Gebäude
          </Text> */}
        </VStack>
      </Box>
    </>
  );
};

export default FrontText;
