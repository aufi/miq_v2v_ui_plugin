module.exports = {
  env: {
    browser: true,
    'jest/globals': true
  },
  globals: {
    $: true,
    __: true,
    sprintf: true
  },
  extends: [
    'standard',
    'standard-react',
    'standard-jsx',
    'airbnb',
    'plugin:jest/recommended',
    'prettier',
    'prettier/react'
  ],
  plugins: ['prettier', 'jest', 'react'],
  rules: {
    'prettier/prettier': [
      'error',
      { singleQuote: true, trailingComma: 'none' }
    ],
    camelcase: 'off',
    'jsx-a11y/anchor-is-valid': 'off',
    'import/prefer-default-export': 'off',
    'no-underscore-dangle': 'off',
    'no-param-reassign': 'off',
    'no-restricted-syntax': 'off',
    'no-return-assign': 'off',
    'no-unused-vars': [
      'error',
      {
        vars: 'all',
        args: 'none'
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        // Allow importing devDependencies like @storybook
        devDependencies: true
      }
    ],
    'no-nested-ternary': 'off',
    'react/no-array-index-key': 'off',
    'react/jsx-filename-extension': 'off',
    'react/prefer-stateless-function': 'warn',
    'react/forbid-prop-types': 'off',
    'react/require-default-props': 'off'
  },
  parser: 'babel-eslint'
};
