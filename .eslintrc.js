module.exports = {
  extends: ['@addepar', '@addepar/eslint-config/ember'],
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  env: {
    es6: true,
  },
  rules: {
    'no-restricted-globals': 'off',

    'ember/closure-actions': 'off',
    'ember/avoid-leaking-state-in-ember-objects': 'off',

    'ember-best-practices/require-dependent-keys': 'off',
  },
  overrides: [
    // node files
    {
      files: [
        '.eslintrc.js',
        '.template-lintrc.js',
        'ember-cli-build.js',
        'index.js',
        'testem.js',
        'blueprints/*/index.js',
        'config/**/*.js',
        'tests/dummy/config/**/*.js',
      ],
      excludedFiles: ['addon/**', 'addon-test-support/**', 'app/**', 'tests/dummy/app/**'],
      parserOptions: {
        sourceType: 'script',
        ecmaVersion: 2015,
      },
      env: {
        browser: false,
        node: true,
      },
      plugins: ['node'],
      rules: Object.assign({}, require('eslint-plugin-node').configs.recommended.rules, {
        // add your custom rules and overrides for node files here
      }),
    },
  ],
};
