import { graphql } from 'gatsby';

import BlogPostComponent from '../components/BlogPost';

export default BlogPostComponent;

export const query = graphql`
  query($id: String!) {
    prismicPost(id: { eq: $id }) {
      id
      data {
        body {
          ... on PrismicPostBodyText {
            slice_type
            primary {
              text {
                html
              }
            }
          }
        }
        header_image {
          fluid(maxWidth: 1000, maxHeight: 800) {
            ...GatsbyPrismicImageFluid
          }
        }
        post_description {
          text
        }
        post_title {
          text
        }
      }
    }
  }
`;
