module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ['plugin:react/recommended', 'airbnb', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint', 'prettier'],
  rules: {
    'prettier/prettier': [
      'warn',
      {
        trailingComma: 'es5',
        tabWidth: 2,
        semi: true,
        singleQuote: true,
        arrowParens: 'always'
      },
    ],
    'react/jsx-filename-extension': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/destructuring-assignment': 'off',
    'react/prop-types': 'warn',
    'react/jsx-one-expression-per-line': 'off',
  },
  ignorePatterns: [
    '.DS_Store',
    'node_modules/',
    'dist/',
    '.cache/',
    '.env*',
    '.eslintcache',
    'webpack**',
    '.github/workflows/linter.yml',
    '.github/workflows/lint.yml',
    './tsconfig.json',
  ],
};
