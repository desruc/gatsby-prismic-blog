import React from 'react';

import Layout from './Layout';
import Container from './Container';
import Hero from './Hero';

const BlogPost = ({ data: { prismicPost } }) => {
  const {
    data: {
      header_image: { fluid },
      post_title
    }
  } = prismicPost;

  return (
    <Layout>
      <Container>
        <Hero image={fluid}>
          <h1>{post_title.text}</h1>
        </Hero>
      </Container>
    </Layout>
  );
};

export default BlogPost;
