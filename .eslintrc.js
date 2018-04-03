module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  plugins: ['flowtype'],
  rules: {
    'arrow-parens': ['error', 'always'],
    'object-curly-newline': ['error', 'never'],
  },
};
