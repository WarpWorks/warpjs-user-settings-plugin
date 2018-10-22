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
                    'eslint:recommended',
                    'plugin:react/recommended'
                ]
            },
            envs: [
                'jquery'
            ]
        },
        src: [
            'client/**/*.js',
            '!client/**/*.test.js'
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
