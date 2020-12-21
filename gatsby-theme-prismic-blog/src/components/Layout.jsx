import React from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Header from './Header';

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

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Header />
    {children}
  </ThemeProvider>
);

export default Layout;
