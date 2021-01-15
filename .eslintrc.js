module.exports = {
  env: {
    browser: true,
    es2021: true,
    'react-native/react-native': true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'react-native',
  ],
  rules: {
    'max-classes-per-file': ['error', 100],
    'react/jsx-filename-extension': 0,
    'react/jsx-props-no-spreading': 0,
    // 'react-native/no-unused-styles': 2,
    // 'react-native/split-platform-components': 2,
    // 'react-native/no-inline-styles': 2,
    // 'react-native/no-color-literals': 2,
    // 'react-native/no-raw-text': 2,
  },
};
