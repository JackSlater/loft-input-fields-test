module.exports = {
    root: true,
    env: {
        node: true,
    },
    extends: [
        'plugin:vue/recommended',
        '@vue/airbnb',
    ],
    parserOptions: {
        parser: 'babel-eslint',
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'import/extensions': ['error', 'always', {
            js: 'never',
            vue: 'never'
        }],
        'import/prefer-default-export': 'off',
        indent: ['error', 4],
        'max-len': ['error', 160],
        'vue/html-indent': ['error', 4, {'baseIndent': 1}],
        'no-trailing-spaces': ['error', { 'skipBlankLines': true }]
    },
    overrides: [
        {
            files: [
                '**/__tests__/*.{j,t}s?(x)',
                '**/tests/unit/**/*.spec.{j,t}s?(x)',
            ],
            env: {
                jest: true,
            },
        },
    ],

    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.vue']
            }
        },
    }
};
