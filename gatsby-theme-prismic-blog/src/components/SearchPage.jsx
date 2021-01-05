import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import qs from 'query-string';
import { Index } from 'elasticlunr';
import { Link } from 'gatsby';

import Layout from './Layout';
import Container from './Container';

const List = styled.ul`
  list-style: none;
  margin: 32px 0px;
  padding: 0;
`;

const ResultWrap = styled.div`
  display: flex;
`;

const ResultImage = styled.div`
  background-size: cover;
  background-position: center center;
  background-image: ${({ src }) => `url(${src})`};
  width: 300px;
  height: 200px;
`;

const ResultContent = styled.div`
  flex: 1;
  padding: 8px 16px 8px 32px;
`;

const StyledLink = styled(Link)`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${({ theme: { colors } }) => colors.heading};
  transition: color 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme: { colors } }) => colors.primary};
  }
`;

const SearchPage = ({ data: { siteSearchIndex }, location: { search } }) => {
  const [results, setResults] = useState([]);

  useEffect(() => {
    const index = Index.load(siteSearchIndex.index);

    const parsedQuery = qs.parse(search);
    const { q } = parsedQuery;

    if (q && index) {
      const matchedDocs = index
        .search(q, {})
        .map(({ ref }) => index.documentStore.getDoc(ref));

      setResults(matchedDocs);
    }
  }, [siteSearchIndex, search]);

  return (
    <Layout>
      <Container>
        <List>
          {results.map((post) => (
            <li>
              <ResultWrap>
                <Link to={`/post/${post.uid}`} title="View post">
                  <ResultImage src={post.header_image} alt="post" />
                </Link>
                <ResultContent>
                  <StyledLink to={`/post/${post.uid}`}>
                    {post.post_title}
                  </StyledLink>
                  <p>{post.post_description}</p>
                  <Link to={`/post/${post.uid}`}>Read more</Link>
                </ResultContent>
              </ResultWrap>
            </li>
          ))}
        </List>
      </Container>
    </Layout>
  );
};

export default SearchPage;
