const prodErrorOthersWarn = process.env.NODE_ENV === 'production' ? 'error' : 'warn';

module.exports = {
  extends: ['plugin:react/recommended', 'standard-jsx', 'react-app'],
  plugins: ['prettier'],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
    'no-unused-vars': prodErrorOthersWarn,
    'no-debugger': prodErrorOthersWarn,
    'no-console': prodErrorOthersWarn,
    'react/no-unused-prop-types': 'error',
    'react/no-unknown-property': 'error',
    'react/jsx-handler-names': 'warn',
    'prettier/prettier': 'error',
    'prefer-const': ['warn'],
  },
};
