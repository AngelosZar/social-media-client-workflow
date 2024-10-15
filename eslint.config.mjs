import globals from 'globals';
import pluginJs from '@eslint/js';

export default [
    {
        files: ['**/*.test.js'],
        languageOptions: {
            globals: {
                ...globals.jest,
            },
        },
        plugins: {
            jest: jestPlugin,
        },
        rules: {
            ...jestPlugin.configs.recommended.rules,
        },
    },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
];
