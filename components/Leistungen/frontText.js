import { Box, Heading, Text, useTheme, VStack } from "@chakra-ui/react"

const FrontText = () => {

  const theme = useTheme()

    return <>
    <Box marginTop={"200px"} marginBottom={"200px"} paddingX={{
            base: "1.4rem",
            sm: "3rem",
            md: "4rem",
            lg: "5rem",
            xl: "8rem",
            "2xl": "14rem",
          }}>
          <VStack align={"flex-start"}>
            
              <Text fontWeight={"medium"} fontSize={"large"}>
                Leistungen
              </Text>
            
            
              <Heading
                marginBottom={"1rem"}
                color={theme.colors.primary[100]}
                fontWeight={"bold"}
                fontSize={"7xl"}
              >
                Modular One | Four dollar toast blue
              </Heading>
            
            
              <Text
                marginBottom={"1.4rem"}
                fontWeight={"medium"}
                fontSize={"2xl"}
              >
                lorem
              </Text>
            
            
              <Text fontWeight={"medium"} fontSize={"md"}>
              Im baby iceland church-key ramps, seitan farm-to-table slow-carb meggings meh
              </Text>
            

          </VStack>
        </Box></>
}

export default FrontText