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
    },
    {
      resolve: '@gatsby-contrib/gatsby-plugin-elasticlunr-search',
      options: {
        // Fields to index
        fields: ['post_title', 'post_description', 'header_image'],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          PrismicPost: {
            post_title: (node) => node.data.post_title.text,
            post_description: (node) => node.data.post_description.text,
            header_image: (node) => node.data.header_image.url
          }
        }
      }
    }
  ]
});
