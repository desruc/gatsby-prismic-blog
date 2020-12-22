module.exports = (themeOptions) => ({
  siteMetadata: {
    siteTitle: 'Gatsby Theme Prismic Blog',
    siteTitleAlt: '',
    siteDescription: '',
    siteLanguage: '',
    author: '',
    contact: '',
    siteUrl: 'https://github.com/desruc/gatsby-theme-prismic-blog',
    siteImage: ''
  },
  plugins: [
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Montserrat',
            variants: ['300', '400', '700']
          },
          {
            family: 'Open Sans',
            variants: ['400', '700']
          }
        ]
      }
    },
    {
      resolve: 'gatsby-source-prismic',
      /* eslint-disable global-require */
      options: {
        repositoryName: themeOptions.prismicRepository,
        schemas: {
          homepage: require('./src/schemas/homepage.json'),
          post: require('./src/schemas/post.json')
        }
      }
    }
  ]
});
