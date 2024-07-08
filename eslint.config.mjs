// @ts-check

import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';

export default tseslint.config({
    files: ['**/*.ts'],
    plugins: {
        prettier: prettierPlugin,
        typescript: tseslint.plugin,
    },
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, prettierConfig],
});
