module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    sourceType: 'module',
    project: './tsconfig.json',
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
  },
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript',
    'airbnb/hooks',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier',
  ],
  plugins: ['react', '@typescript-eslint', 'jest'],
  rules: {
    // PRETTIER RULES
    'prettier/prettier': [
      'error',
      {
        semi: true,
        trailingComma: 'es5',
        singleQuote: true,
        printWidth: 80,
        // below line only for windows users facing CLRF and eslint/prettier error
        // non windows users feel free to delete it
        endOfLine: 'auto',
      },
    ],
    // import
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        mjs: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // no-shadow for TS
    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': ['error'],
    // no-unused-vars for TS
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    // no-explicit-any
    '@typescript-eslint/no-explicit-any': ['error'],
    '@typescript-eslint/explicit-function-return-type': ['error'],
    'no-multiple-empty-lines': [
      'warn',
      {
        max: 1,
        maxEOF: 1,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': ['error'],
    // Replace '@typescript-eslint/interface-name-prefix': ['error'],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
        custom: {
          regex: '^I[A-Z]',
          match: true,
        },
      },
    ],
    'import/prefer-default-export': ['error'],
    'newline-before-return': ['warn'],
    indent: [
      'error',
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-multi-spaces': ['warn'],
    'max-len': [
      'warn',
      {
        code: 100,
        ignoreComments: true,
        ignoreTrailingComments: true,
        ignoreUrls: true,
        ignoreTemplateLiterals: true,
        ignoreRegExpLiterals: true,
      },
    ],
    'prefer-promise-reject-errors': ['off'],
    'no-return-assign': ['warn'],
    'no-dupe-keys': ['warn'],
    'no-useless-escape': ['warn'],
    yoda: ['warn'],
    'no-underscore-dangle': ['off'],
    'no-param-reassign': ['off'],
    'no-var': ['warn'],
    'prefer-const': ['warn'],
    'no-plusplus': [
      'warn',
      {
        allowForLoopAfterthoughts: true,
      },
    ],
    'no-buffer-constructor': ['warn'],
    'prefer-destructuring': ['warn'],
    'spaced-comment': ['warn'],
    strict: ['warn'],
    'import/newline-after-import': ['warn'],
    'import/order': [
      'warn',
      {
        groups: [
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'builtin',
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
    'no-else-return': ['warn'],
    'consistent-return': ['warn'],
    'lines-around-directive': ['warn'],
    'prefer-template': ['warn'],
    'one-var': ['warn'],
    'no-useless-rename': ['warn'],
    'array-callback-return': ['warn'],
    'new-cap': ['warn'],
    'vars-on-top': ['warn'],
    'no-lonely-if': ['warn'],
    'no-useless-concat': ['warn'],
    'no-unused-expressions': ['warn'],
    'no-unneeded-ternary': ['warn'],
    radix: 0,
    'no-nested-ternary': ['warn'],
    camelcase: ['warn'],
    'import/no-extraneous-dependencies': ['off'],
    'import/no-dynamic-require': ['off'],
    'no-new-require': ['warn'],
    'operator-assignment': ['warn'],
    'global-require': ['warn'],
    'no-multi-assign': ['warn'],
    'no-restricted-syntax': ['warn'],
    'guard-for-in': ['warn'],
    'dot-notation': ['warn'],
    'no-unreachable': ['warn'],
    'newline-per-chained-call': [
      'warn',
      {
        ignoreChainWithDepth: 2,
      },
    ],
    quotes: [
      2,
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'block-like'],
      },
      {
        blankLine: 'always',
        prev: 'block-like',
        next: '*',
      },
    ],
    'jsx-a11y/href-no-hash': 'off',
    'jsx-a11y/anchor-is-valid': [
      'warn',
      {
        aspects: ['invalidHref'],
      },
    ],
    'react/display-name': 1,
    'react/no-array-index-key': 0,
    'react/react-in-jsx-scope': 0,
    'react/prefer-stateless-function': 0,
    'react/prop-types': ['off'],
    'react/forbid-prop-types': 0,
    'react/no-unescaped-entities': 0,
    'jsx-a11y/accessible-emoji': 0,
    'react/require-default-props': 0,
    'react/jsx-filename-extension': [
      1,
      {
        extensions: ['.js', '.ts', '.jsx', '.tsx'],
      },
    ],
    'react-hooks/rules-of-hooks': 'warn',
    'react-hooks/exhaustive-deps': 'off',
    'react/jsx-curly-spacing': 'warn',
    'object-curly-spacing': ['error', 'always'],
    'react/jsx-one-expression-per-line': ['off'],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
      },
    },
    'import/extensions': ['.js', '.ts', '.mjs', '.jsx', '.tsx'],
  },
};
