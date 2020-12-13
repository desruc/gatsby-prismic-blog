module.exports = (themeOptions) => ({
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: themeOptions.prismicRepository,
        schemas: {
          homepage: require('./src/schemas/homepage.json')
        }
      }
    }
  ]
});
