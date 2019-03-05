const ghpages = require('gh-pages');

const options = {
  branch: 'master',
  dotfiles: true,
};

ghpages.publish('public', options, (err) => {
  console.log(err);
});
