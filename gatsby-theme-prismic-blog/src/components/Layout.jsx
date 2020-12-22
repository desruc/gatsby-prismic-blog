import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './Header';
import Seo from './Seo';

import theme from '../theme';

const GlobalStyle = createGlobalStyle(
  ({ theme: currentTheme }) => `
* {
  box-sizing: border-box;
}
html, body {
  margin: 0;
  padding: 0;
  background: ${currentTheme.colors.background};
  color: ${currentTheme.colors.text};
  font-family: ${currentTheme.fonts.openSans};
}
img {
  height: auto;
  width: 100%;
}
h1,h2,h3,h4,h5,h6 {
  color: ${currentTheme.colors.heading};
  font-family: ${currentTheme.fonts.montserrat};
  margin-top: 0px;
}
`
);

const Layout = ({ title, description, pathname, image, children }) => (
  <ThemeProvider theme={theme}>
    <Seo
      title={title}
      description={description}
      pathname={pathname}
      image={image}
    />
    <GlobalStyle />
    <Header />
    {children}
  </ThemeProvider>
);

Layout.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  pathname: PropTypes.string,
  image: PropTypes.string,
  children: PropTypes.node.isRequired
};

Layout.defaultProps = {
  title: '',
  description: '',
  pathname: '',
  image: ''
};

export default Layout;
