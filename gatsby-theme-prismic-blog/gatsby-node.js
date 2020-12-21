const withDefaults = require('./defaultOptions');

exports.createPages = async ({ actions, graphql }, themeOptions) => {
  const { createPage } = actions;
  const { basePath } = withDefaults(themeOptions);

  // These templates are graphql queries that import components
  const homepageTemplate = require.resolve('./src/templates/HomepageQuery.js');
  const blogPostTemplate = require.resolve('./src/templates/PostQuery.js');

  createPage({
    path: basePath,
    component: homepageTemplate
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
      path: `/blog/${node.uid}`,
      component: blogPostTemplate,
      context: {
        id: node.id
      }
    });
  });
};
