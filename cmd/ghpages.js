const ghpages = require('gh-pages');

const options = {
  branch: 'master',
};

ghpages.publish('public', options, (err) => {
  console.log(err);
});
