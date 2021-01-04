import React, { useState } from 'react';
import styled from 'styled-components';
import { navigate } from '@reach/router';

const SearchIcon = () => (
  <svg
    stroke="currentcolor"
    fill="currentcolor"
    xmlns="http://www.w3.org/2000/svg"
    role="img"
    width="16"
    height="16"
    viewBox="0 0 512.005 512.005"
  >
    <g>
      <g>
        <path
          d="M505.749,475.587l-145.6-145.6c28.203-34.837,45.184-79.104,45.184-127.317c0-111.744-90.923-202.667-202.667-202.667
			S0,90.925,0,202.669s90.923,202.667,202.667,202.667c48.213,0,92.48-16.981,127.317-45.184l145.6,145.6
			c4.16,4.16,9.621,6.251,15.083,6.251s10.923-2.091,15.083-6.251C514.091,497.411,514.091,483.928,505.749,475.587z
			 M202.667,362.669c-88.235,0-160-71.765-160-160s71.765-160,160-160s160,71.765,160,160S290.901,362.669,202.667,362.669z"
        />
      </g>
    </g>
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
    <g />
  </svg>
);

const Wrap = styled.div`
  display: flex;
`;

const Input = styled.input(
  ({ theme: { colors, fonts } }) => `
  padding: 8px;
  border-radius: 0px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-right: none;
  width: 250px;
  color: ${colors.text};
  font-family: ${fonts.openSans};
  :focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`
);

const Button = styled.button(
  ({ theme: { colors } }) => `
  padding: 8px 12px;
  border-radius: 0px;
  background-color: ${colors.primary};
  color: ${colors.heading};
  border: none;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  :focus {
    outline: none;
    border: 1px solid rgba(0, 0, 0, 0.5);
  }
`
);

const SearchInput = () => {
  const [search, setSearch] = useState('');

  const handleChange = (e) => {
    const {
      target: { value }
    } = e;
    setSearch(value);
  };

  const handleSearch = () => {
    setSearch('');
    navigate(`/search?q=${search}`);
  };

  return (
    <Wrap>
      <Input
        type="text"
        value={search}
        onChange={handleChange}
        placeholder="Search posts..."
      />
      <Button title="Search" onClick={handleSearch}>
        <SearchIcon />
      </Button>
    </Wrap>
  );
};

export default SearchInput;
