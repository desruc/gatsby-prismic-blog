import React, { useState, useEffect } from 'react';
import qs from 'query-string';
import { Index } from 'elasticlunr';

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
    <div>
      <ul>
        {results.map((post) => (
          <li>
            <p>{post.post_title}</p>
            <p>{post.post_description}</p>
            <img src={post.header_image} alt="post" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
