const prodErrorOthersWarn =
  process.env.NODE_ENV === "production" ? "error" : "warn";
const prodNoErr = process.env.NODE_ENV === "production" ? "off" : "warn";

module.exports = {
  env: {
    node: true,
  },
  extends: [
    "react-app", // Uses the recommended rules Create React App
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from @typescript-eslint/eslint-plugin
    "prettier/@typescript-eslint", // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended", // Should be last in the list. Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    "plugin:jsx-a11y/recommended",
  ],
  overrides: [
    {
      files: ["./**/*.ts?(x)"],
      rules: {
        "@typescript-eslint/ban-ts-comment": [
          prodErrorOthersWarn,
          { "ts-ignore": "allow-with-description" },
        ],
        "@typescript-eslint/ban-ts-ignore": "off",
        "@typescript-eslint/no-unused-vars": [
          prodErrorOthersWarn,
          { argsIgnorePattern: "^_" },
        ],
        "@typescript-eslint/no-use-before-define": "off",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true, // Allows for the parsing of JSX
    },
    ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
    sourceType: "module", // Allows for the use of imports
  },
  plugins: ["import", "jsx-a11y", "sort-keys-fix"],
  rules: {
    "jsx-a11y/click-events-have-key-events": prodErrorOthersWarn,
    "jsx-a11y/no-noninteractive-element-interactions": prodErrorOthersWarn,
    "no-console": prodErrorOthersWarn,
    "no-debugger": prodErrorOthersWarn,
    "no-restricted-imports": [
      prodErrorOthersWarn,
      {
        paths: [
          // TODO: use custom rules
          {
            message: "Please import from providers/theme.",
            name: "styled-components",
          },
        ],
        patterns: [],
      },
    ],
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "prefer-const": "warn",
    "react/jsx-handler-names": "warn",
    "react/jsx-sort-props": [prodErrorOthersWarn, { callbacksLast: true }],
    "sort-keys-fix/sort-keys-fix": prodNoErr,
  },
};
