import {
  Box,
  Center,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import NextLink from "next/link";
import { Link } from "@chakra-ui/react";
import {authors} from '../../authors/authors'

export default function Articel_Card({ thumbnail, post, index }) {

  console.log(post)

  return (
    <Center py={6}>
      <NextLink href={"/blog/" + post.slug} passHref key={index}>
        <Link
          _hover={{ text_decoration: "none"}}
          _focus={{ outlineColor: "yellow" }}
        >
          <Box
            role={"group"}
            maxW={"445px"}
            minW={"350px"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"lg"}
            rounded={"md"}
            
            overflow={"hidden"}
          >
            <Box
              h={"210px"}
              bg={"gray.100"}
              mt={-6}
              mx={-6}
              mb={6}
              
              pos={"relative"}
              overflow={"hidden"}
            >
              <Image
                transform="scale(1.0)"
                zIndex={-1}
                h={"full"}
                w={"full"}
                src={thumbnail}
                objectFit={"cover"}
                _groupHover={{
                  transform: "scale(1.1)",
                }}
                transition="0.3s ease-in-out"
              />
            </Box>
            <Stack px={6}>
              <Text
                color={"green.500"}
                textTransform={"uppercase"}
                fontWeight={800}
                fontSize={"sm"}
                letterSpacing={1.1}
              >
                Blog
              </Text>
              <Heading
                color={useColorModeValue("gray.700", "white")}
                fontSize={"2xl"}
                fontFamily={"body"}
              >
                {post.frontMatter.title}
              </Heading>
              <Text color={"gray.500"}>
              {post.frontMatter.description}
              </Text>
            </Stack>
            <Stack p={6} direction={"row"} spacing={0} align={"center"} position="relative">
              <Avatar
                mr={4}
                src={authors[post.frontMatter.author].avatar}
                alt={"Author"}
              />
              <Stack direction={"column"} spacing={0} fontSize={"sm"}>
                <Text fontWeight={600}>{authors[post.frontMatter.author].name}</Text>
                <Text color={"gray.500"}>{post.frontMatter.date} · {post.frontMatter.readTime}</Text>
              </Stack>

            </Stack>
          </Box>
        </Link>
      </NextLink>
    </Center>
  );
}
