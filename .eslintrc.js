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
        ObjectExpression: 'always',
        ObjectPattern: { multiline: true },
        ImportDeclaration: 'never',
        ExportDeclaration: { multiline: true, minProperties: 3 },
      },
    ],
  },
};
