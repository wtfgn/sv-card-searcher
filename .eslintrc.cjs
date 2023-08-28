module.exports = {
    extends: [
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:@typescript-eslint/recommended-type-checked',
        'plugin:@typescript-eslint/stylistic-type-checked',
        // 'prettier',
    ],
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        ecmaVersion: 2020,
        sourceType: 'module',
        project: './tsconfig.json',
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.vue'],
    },
    plugins: ['vue', '@typescript-eslint'],
    root: true,
    rules: {},
    env: {
        browser: true,
        amd: true,
        node: true,
    },
};
