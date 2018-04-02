exports.onCreatePage = ({ page, boundActionCreators }) => {
  const { createPage } = boundActionCreators;
  if (page.path === '/works/') {
    [1, 2, 3, 4].forEach((n) => {
      page.path = `works/${n}`;
      page.context = { id: `${n}` };
      createPage(page);
    });
  } else {
    createPage(page);
  }
};
