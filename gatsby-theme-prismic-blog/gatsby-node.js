const withDefaults = require('./defaultOptions');

exports.createPages = async ({ actions, graphql }, themeOptions) => {
  const { createPage } = actions;
  const { basePath, searchPath } = withDefaults(themeOptions);

  // These templates are graphql queries that import components
  const homepageTemplate = require.resolve('./src/templates/HomepageQuery.js');
  const blogPostTemplate = require.resolve('./src/templates/PostQuery.js');
  const searchPageTemplate = require.resolve('./src/templates/SearchQuery.js');

  createPage({
    path: basePath,
    component: homepageTemplate
  });

  createPage({
    path: searchPath,
    component: searchPageTemplate
  });

  const blogPosts = await graphql(`
    {
      allPrismicPost {
        nodes {
          id
          uid
        }
      }
    }
  `);

  blogPosts.data.allPrismicPost.nodes.forEach((node) => {
    createPage({
      path: `/posts/${node.uid}`,
      component: blogPostTemplate,
      context: {
        id: node.id
      }
    });
  });
};
