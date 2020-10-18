const prodErrorOthersWarn =
  process.env.NODE_ENV === "production" ? "error" : "warn";

module.exports = {
  parser: "@typescript-eslint/parser", // Specifies the ESLint parser
  parserOptions: {
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
  },
  settings: {
    react: {
      version: "detect", // Tells eslint-plugin-react to automatically detect the version of React to use
    },
  },
  extends: [
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    // "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:react/recommended", // Uses the recommended rules from @eslint-plugin-react
    "react-app",
  ],
  rules: {
    // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
    "@typescript-eslint/ban-ts-comment": "off",
    "react/display-name": "off", // TODO: inspect why its not working well with functional components
    "react/prop-types": "off", // TODO: inspect why its nto working well with TS
    // "@typescript-eslint/explicit-function-return-type": "off",
    "jsx-quotes": ["error", "prefer-double"],
    "no-unused-vars": prodErrorOthersWarn,
    "no-debugger": prodErrorOthersWarn,
    "no-console": prodErrorOthersWarn,
    "react/jsx-handler-names": "warn",
    "prefer-const": ["warn"],
  },
};
