module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['flowtype'],
  globals: {
    document: false,
    graphql: false,
    $Keys: false,
  },
  rules: {
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': ['error', 'never'],
  },
};
