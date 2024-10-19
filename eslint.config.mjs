import globals from 'globals';
import pluginJs from '@eslint/js';
import jestPlugin from 'eslint-plugin-jest';
import cypressPlugin from 'eslint-plugin-cypress';

export default [
    pluginJs.configs.recommended,
    {
        files: ['**/*.js'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.es2021,
                ...globals.node,
            },
        },
    },
    {
        files: ['**/*.test.js'],
        plugins: {
            jest: jestPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
        },
    },
    {
        files: ['**/*.cy.js'],
        plugins: {
            cypress: cypressPlugin,
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...cypressPlugin.environments.globals,
            },
        },
        rules: {
            ...cypressPlugin.configs.recommended.rules,
            'cypress/no-unnecessary-waiting': 'off',
            'no-unused-vars': 'off',
        },
    },
];
