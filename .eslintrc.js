module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    semi: ['error', 'never'],
    'linebreak-style': 0,
    'react/function-component-definition': 'off',
    'no-console': 'off',
    'no-alert': 'off',
    'no-shadow': 'off',
    'no-else-return': ['error', { allowElseIf: true }],
  },
}
