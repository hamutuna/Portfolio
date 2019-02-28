const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allWorksJson {
        edges {
          node {
            id
            title
            position
            positionAndDate
            description
            goodPoints {
              id
              title
              description
            }
            members
          }
        }
      }
    }
  `);
  const { createPage } = actions;
  result.data.allWorksJson.edges.forEach(({ node }) => {
    createPage({
      path: `works/${node.id}`,
      component: path.resolve('./src/templates/work/index.jsx'),
      context: {
        work: node,
        firstViewImage: `/work_${node.id}\\.png/`,
        workImages: `/${node.id}_doc.\\.png/`,
      },
    });
  });
};
