module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true
  },
  extends: [
    'plugin:vue/vue3-essential',
    // 'standard-with-typescript',
    'plugin:vue/vue3-recommended'
  ],
  overrides: [
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'vue'
  ],
  rules: {
    // For Coding
    'quotes': ['error', 'single'], // "" => ''
    'semi': ['error', 'never'], // semicolon
    'no-empty': 'error', // No empty in bracket
    'indent': [ 'error', 2, { 'SwitchCase' : 1 } ],
    'comma-dangle': ['error', 'only-multiline'], // Ex) { a, b, }
    'object-curly-spacing': ['error', 'always'], // Space between { },
    'no-multi-spaces': 'error', // Ex) var a =  1 => var a = 1
    'no-unused-vars': 'off',
    'space-before-blocks': 'error', // Ex) if (a){ => if (a) {
    'no-trailing-spaces': 'error', // No trailing spaces important!!
    'max-len': ['error', { 'code': 150 }], // limit max length
    // For Typescript
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    // '@typescript-eslint/no-unused-vars': ['warn'],
    // Vue
    'vue/multi-word-component-names': 'off'
  },
}
