module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true
  },
  extends: [
    'airbnb',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/strict-type-checked',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:@typescript-eslint/stylistic-type-checked',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  },
  plugins: ['react-refresh'],
  rules: {
    semi: ['error', 'always'],
    'react-refresh/only-export-components': ['warn', {
      allowConstantExport: true
    }],
    'max-len': ['error', 120],
    'import/first': 'off',
    'linebreak-style': 'off',
    'import/named': 'error',
    'import/namespace': 'error',
    'import/default': 'error',
    'import/export': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    quotes: ['warn', 'single', {
      avoidEscape: true
    }],
    'react/self-closing-comp': ['error', {
      'component': true,
      'html': true
    }],
    '@typescript-eslint/consistent-type-imports': ['error', {
      'prefer': 'type-imports',
      'fixStyle': 'inline-type-imports'
    }],
    "react/jsx-filename-extension": [1, { "extensions": [".tsx"] }]
  }
};
