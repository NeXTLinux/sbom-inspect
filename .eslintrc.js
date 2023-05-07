module.exports = {
    env: {
        browser: true,
        node: true,
        es6: true
    },
    root: true,
    parserOptions: {
        ecmaVersion: 2017,
        sourceType: 'module'
    },
    extends: [
        'eslint:recommended',
        'plugin:next-suave/recommended'
    ],
    rules: {
        'indent': [2, 4],
        'no-console': 'off',
        'object-curly-spacing': ['off'],
        'next-suave/no-direct-property-access': 'off',
        'next-suave/no-const-outside-module-scope': 'off',
        'one-var': ['error', 'never'],
        'comma-dangle': ['error', { 'arrays': 'never', 'objects': 'always-multiline' }],
        'no-implicit-coercion': ['error'],
        'no-extra-boolean-cast': ['error'],
        'indent': ['error', 4, { 'SwitchCase': 1 }],
        'operator-linebreak': ["error", "after"]
    },
    globals: {
        module: true,
        process: false,
        requireNode: false
    }
};
