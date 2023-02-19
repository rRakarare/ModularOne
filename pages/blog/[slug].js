import { serialize } from "next-mdx-remote/serialize";
import { MDXRemote } from "next-mdx-remote";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import SyntaxHighlighter from "react-syntax-highlighter";
import {
  Button,
  Container,
  Box,
  VStack,
  HStack,
  Heading,
  Text,
  Stack,
  Avatar,
  Image,
} from "@chakra-ui/react";
import {authors} from "../../authors/authors"

const PostPage = ({ frontMatter, mdxSource }) => {
  return (
    <Container maxW="container.lg">
      <Stack
        direction={["column", "row"]}
        marginTop="2"
        spacing="10"
        display="flex"
      >
        <Box width={200} height={200}>
          <Image
            src={frontMatter.thumbnailUrl}
            objectFit={"cover"}
            h={"full"}
            w={"full"}
          />
        </Box>
        <VStack align={"flex-start"} justifyContent={"center"}>
          <Heading>{frontMatter.title}</Heading>
          <Text>{frontMatter.description}</Text>
          <Stack direction={"row"} spacing={0}>
            <Avatar
              mr={4}
              src={authors[frontMatter.author].avatar}
              alt={"Author"}
            />
            <Stack direction={"column"} spacing={0} fontSize={"sm"}>
              <Text fontWeight={600}>{authors[frontMatter.author].name}</Text>
              <Text color={"gray.500"}>{frontMatter.date} · {frontMatter.readTime}</Text>
            </Stack>
          </Stack>
        </VStack>
      </Stack>
      <h1>{frontMatter.title}</h1>
      <MDXRemote
        {...mdxSource}
        components={{ Button, SyntaxHighlighter, Image }}
      />
    </Container>
  );
};

export default PostPage;

export const getStaticPaths = async () => {
  const files = fs.readdirSync(path.join("posts"));

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".mdx"),
    "utf-8"
  );

  const { data: frontMatter, content } = matter(markdownWithMeta);
  const mdxSource = await serialize(content);

  return {
    props: {
      frontMatter,
      slug,
      mdxSource,
    },
  };
};
