module.exports = (themeOptions) => ({
  basePath: themeOptions.basePath || '/',
  searchPath: themeOptions.searchPath || '/search',
  postsPath: themeOptions.postsPath || '/posts',
  postPath: themeOptions.postPath || '/post'
});
