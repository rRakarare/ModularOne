import {
    Container,
    Flex,
    Box,
    Heading,
    Text,
    IconButton,
    Button,
    VStack,
    HStack,
    Wrap,
    WrapItem,
    FormControl,
    FormLabel,
    Input,
    InputGroup,
    InputLeftElement,
    Textarea,
  } from '@chakra-ui/react';
  import {
    MdPhone,
    MdEmail,
    MdLocationOn,
    MdFacebook,
    MdOutlineEmail,
  } from 'react-icons/md';
  import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';
  
  export default function Contact() {
    return (
      <Container minHeight={"1020px"} maxW="full" mt={0} centerContent overflow="hidden">
        <Flex justifyContent={"center"}>
          <Box
            bg="dark2"
            color="white"
            borderRadius="lg"
            // borderWidth={"2px"}
            borderColor="primary.100"
            m={{ sm: 4, md: 16, lg: 10 }}
            p={{ sm: 5, md: 5, lg: 16 }}>
            <Box p={4}>
              <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
                <WrapItem>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ borderWidth: '2px' }}
                          borderColor={"primary.100"}
                          leftIcon={<MdPhone color={"#f7d147"} size="20px" />}>
                          +91-988888888
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #f7d147' }}
                          leftIcon={<MdEmail color="#f7d147" size="20px" />}>
                          hello@abc.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: '2px solid #f7d147' }}
                          leftIcon={<MdLocationOn color="#f7d147" size="20px" />}>
                          Karnavati, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack
                      mt={{ lg: 10, md: 10 }}
                      spacing={5}
                      px={5}
                      alignItems="flex-start">
                      <IconButton
                        aria-label="facebook"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<MdFacebook size="28px" />}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsGithub size="28px" />}
                      />
                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{ bg: '#0D74FF' }}
                        icon={<BsDiscord size="28px" />}
                      />
                    </HStack>
                  </Box>
                </WrapItem>
                <WrapItem>
                  <Box borderWidth={"2px"} borderColor="primary.100" borderRadius="lg">
                    <Box m={8}>
                      <VStack spacing={5}>
                        <FormControl id="name">
                          <FormLabel color={"primary.100"}>Your Name</FormLabel>
                          <InputGroup borderColor="dark2">
                            <InputLeftElement
                              pointerEvents="none"
                              
                            ><BsPerson /></InputLeftElement>
                            <Input type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel color={"primary.100"}>Mail</FormLabel>
                          <InputGroup color="primary.100"  borderColor="primary.100">
                            <InputLeftElement
                              pointerEvents="none"
                              
                            >
                              <MdOutlineEmail />
                            </InputLeftElement>
                            <Input color={"primary.100"} type="text" size="md" />
                          </InputGroup>
                        </FormControl>
                        <FormControl id="name">
                          <FormLabel color={"primary.100"}>Message</FormLabel>
                          <Textarea
                            borderColor="dark2"
                            _hover={{
                              borderRadius: 'dark2',
                            }}
                            placeholder="message"
                          />
                        </FormControl>
                        <FormControl id="name" float="right">
                          <Button
                            variant="outline"
                            borderColor={"primary.100"}
                            color="primary.100"
                            _hover={{
                              bg:"primary.100",
                              color:"dark2"
                            }}>
                            Send Message
                          </Button>
                        </FormControl>
                      </VStack>
                    </Box>
                  </Box>
                </WrapItem>
              </Wrap>
            </Box>
          </Box>
        </Flex>
      </Container>
    );
  }