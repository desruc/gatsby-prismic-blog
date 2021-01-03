import { graphql } from 'gatsby';

import SearchPageComponent from '../components/SearchPage';

export default SearchPageComponent;

export const query = graphql`
  query {
    siteSearchIndex {
      index
    }
  }
`;
