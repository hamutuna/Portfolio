const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const result = await graphql(`
    {
      allPageLinksJson {
        edges {
          node {
            id
            url
            title
            positionAndDate
            work {
              id
              position
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
    }
  `);
  const { createPage } = actions;
  const { allPageLinksJson } = result.data;
  allPageLinksJson.edges.forEach(({ node: link }) => {
    if (/^http(s):\/\//.test(link.url)) {
      return;
    }
    createPage({
      path: link.url,
      component: path.resolve('./src/templates/work/index.jsx'),
      context: {
        link,
        work: link.work,
        firstViewImage: `/work_${link.work.id}\\.png/`,
        workImages: `/${link.work.id}_doc.\\.png/`,
      },
    });
  });
};
