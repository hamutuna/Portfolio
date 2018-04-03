module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['flowtype'],
  globals: {
    graphql: false,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': ['error', 'never'],
  },
};
