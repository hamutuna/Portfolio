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
    'object-curly-newline': [
      'error',
      {
        ObjectExpression: { minProperties: 1 },
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
    'no-mixed-operators': 'off',
  },
};
