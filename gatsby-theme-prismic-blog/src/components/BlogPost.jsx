import React from 'react';

import Layout from './Layout';
import Container from './Container';
import Hero from './Hero';
import SliceZone from './SliceZone';

const BlogPost = ({ data: { prismicPost } }) => {
  const {
    data: {
      header_image: { fluid },
      post_title,
      body
    }
  } = prismicPost;

  return (
    <Layout title={post_title.text}>
      <Container>
        <Hero image={fluid}>
          <h1>{post_title.text}</h1>
        </Hero>
        <SliceZone sliceZone={body} />
      </Container>
    </Layout>
  );
};

export default BlogPost;
