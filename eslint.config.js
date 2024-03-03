import antfu from '@antfu/eslint-config'

const baseConfig = {
  react: {
    overrides: {
      'react/destructuring-assignment': ['error', 'always', { ignoreClassFields: true }],
      'react/jsx-first-prop-new-line': ['error', 'always'],
      'react/jsx-sort-props': [
        1,
        {
          callbacksLast: true,
          shorthandFirst: true,
          shorthandLast: false,
          ignoreCase: false,
          noSortAlphabetically: false,
          reservedFirst: false,
        },
      ],
    },
  },
  ignores: [
    'node_modules',
    'dist',
    'out',
    'src/renderer/shared/kit/ui',
  ],
}

const configOverrides = {
  rules: {
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.mdx'] }],
    'prefer-destructuring': ['error', { object: true, array: false }],
    'id-length': ['error', { min: 2, exceptions: ['i', 'j', 'k', 'x', 'y', 'z', '_'] }],
    'ts/naming-convention': [
      'error',
      {
        selector: 'interface',
        format: ['PascalCase'],
      },
      {
        selector: 'enum',
        format: ['PascalCase'],
      },
    ],
    'no-restricted-syntax': [
      'error',
      {
        selector: 'TSEnumDeclaration',
        message: 'Don\'t declare enums',
      },
    ],
  },
}

const config = antfu(baseConfig, configOverrides)

export default config
