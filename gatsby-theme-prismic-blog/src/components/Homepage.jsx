import React from 'react';
import styled from 'styled-components';

import { Link } from 'gatsby';

import Layout from './Layout';
import Container from './Container';
import PostGrid from './PostGrid';
import HomepageHero from './HomepageHero';

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Section = styled.section`
  margin: 40px 0px;
`;

const Homepage = ({ data: { allPrismicPost } }) => {
  const { edges: posts } = allPrismicPost;

  return (
    <Layout>
      <HomepageHero image={posts[0].node.data.header_image.fluid} />
      <Container>
        <Section>
          <Flex>
            <h2>Recent posts</h2>
            <Link to="/posts">See more</Link>
          </Flex>
          <PostGrid posts={posts} />
        </Section>
      </Container>
    </Layout>
  );
};

export default Homepage;
