module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
    'airbnb-typescript',
    'eslint-config-prettier',
    'plugin:@tanstack/eslint-plugin-router/recommended',
  ],
  ignorePatterns: ['dist', 'vite.config.ts', 'vitest.config.ts', 'tests', '*.cjs', '**/*.js', 'codegen.ts', "react-router.config.ts"],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
    tsconfigRootDir: __dirname,
    ecmaVersion: 'latest',
    sourceType: 'module',

  },
  plugins: ['react-refresh', 'prettier', '@typescript-eslint'],
  rules: {
    'prettier/prettier': 'error',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/jsx-no-bind': 'off',
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        "": 'never',
        'js': 'never',
        'jsx': 'never',
        'ts': 'never',
        'tsx': 'never',
        'mjs': 'never'
      }
    ],
    'react/function-component-definition': [
      2,
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function',
      },
    ],
    'class-methods-use-this': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    "react/jsx-props-no-spreading": 'off',
    '@typescript-eslint/no-throw-literal':'off',
    'jsx-a11y/ click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
  },

};
