/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require("path");

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogTemplate = path.resolve(`src/pages/templates/BlogTemplate.js`);

  const res = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              path
            }
          }
        }
      }
    }
  `);

  if (res.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query`);
    return
  }

  res.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.path,
      component: blogTemplate
    });
  });
};
