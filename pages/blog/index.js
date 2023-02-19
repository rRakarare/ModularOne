import fs from "fs";
import path from "path";
import matter from "gray-matter";

import { SimpleGrid, Container } from "@chakra-ui/react";
import Articel_Card from "../../components/Articel_Card";
import Hero from "../../components/Hero"
import Navbar from "../../components/Navbar";


const blog = ({ posts }) => {
    return (
        <>
        
        <Hero/>
        <Container maxW='container.xl' >
        <SimpleGrid minChildWidth='300px' spacing='50px'>
          {posts.map((post, index) => (
            <Articel_Card
              thumbnail={post.frontMatter.thumbnailUrl}
              post={post}
              index={index}
              key={index}
            />
          ))}
        </SimpleGrid>
        </Container>
        </>
      );
}

export const getStaticProps = async () => {
    const files = fs.readdirSync(path.join("posts"));
  
    const posts = files.map((filename) => {
      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );
      const { data: frontMatter } = matter(markdownWithMeta);
  
      return {
        frontMatter,
        slug: filename.split(".")[0],
      };
    });
  
    return {
      props: {
        posts,
      },
    };
  };

export default blog