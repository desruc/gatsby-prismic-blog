import React from 'react';
import styled from 'styled-components';

import Container from './Container';

const StyledHeader = styled.header(
  ({ theme: { colors, breakpoints, up } }) => `
  background: ${colors.background};
  height: 56px;
  ${up(breakpoints.sm)} {
    height: 64px;
  }
`
);

const Inner = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  h2 {
    margin-bottom: 0px;
  }
`;

const Header = () => (
  <StyledHeader>
    <Container>
      <Inner>
        <h2>Brand name</h2>
      </Inner>
    </Container>
  </StyledHeader>
);

export default Header;
