module.exports = (grunt, options) => Object.freeze({
    options: {
        fix: true,
        useEslintrc: false
    },
    node: {
        options: {
            baseConfig: {
                root: true,
                extends: [
                    '@quoin/eslint-config-quoin',
                    'eslint:recommended'
                ]
            }
        },
        src: [
            '*.js',
            'grunt/*.js',
            'lib/**/*.js',
            '!lib/**/*.test.js',
            'server/**/*.js',
            '!server/**/*.test.js'
        ]
    },
    client: {
        options: {
            baseConfig: {
                root: true,
                extends: [
                    '@quoin/eslint-config-quoin/client',
                    'plugin:react/recommended'
                ]
            },
            globals: [
                'process',
                'require',
                'React'
            ],
            envs: [
                'jquery'
            ],
            rules: {
                'react/react-in-jsx-scope': 'off'
            }
        },
        src: [
            'client/**/*.js',
            'client/**/*.jsx',
            '!client/**/*.test.js',
            '!client/**/*.test.jsx'
        ]
    },
    'node-test': {
        options: {
            baseConfig: {
                root: true,
                extends: '@quoin/eslint-config-quoin/node-test'
            }
        },
        src: [
            'lib/**/*.test.js',
            'server/**/*.test.js'
        ]
    }
});
