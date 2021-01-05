import { graphql } from 'gatsby';

import PostListComponent from '../components/PostListPage';

export default PostListComponent;

export const query = graphql`
  query {
    allPrismicPost {
      edges {
        node {
          id
          uid
          data {
            post_description {
              text
            }
            post_title {
              text
            }
            header_image {
              fluid(maxWidth: 1000, maxHeight: 800) {
                ...GatsbyPrismicImageFluid
              }
            }
          }
        }
      }
    }
  }
`;
