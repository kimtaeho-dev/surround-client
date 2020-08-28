module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: ['airbnb'],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: ['react'],
    rules: {
        indent: [1, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
        'no-tabs': 0,
        'react/prop-types': 0,
        'react/jsx-indent': [1, 'tab'],
        'react/jsx-indent-props': [1, 'tab'],
        'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
        'array-bracket-spacing': ['error', 'always'],
    },
    settings: {
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx', '.ts', '.tsx'],
            },
        },
    },
};
