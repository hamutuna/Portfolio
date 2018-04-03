const path = require('path');

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allWorksJson {
          edges {
            node {
              id
              title
              position
              skills {
                id
                title
              }
              ingenuity
            }
          }
        }
      }
    `).then((result) => {
      const { createPage } = actions;
      result.data.allWorksJson.edges.forEach(({ node }) => {
        createPage({
          path: `works/${node.id}`,
          component: path.resolve('./src/templates/work/index.jsx'),
          context: {
            work: node,
          },
        });
      });
      resolve();
    });
  });
};
