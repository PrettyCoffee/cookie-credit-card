"use-strict"

module.exports = {
  parser: "@typescript-eslint/parser",
  env: {
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  plugins: ["@typescript-eslint", "import", "unused-imports"],
  rules: {
    "import/order": [
      "error",
      {
        groups: ["external", "internal"],
        "newlines-between": "always",
        alphabetize: {
          order: "asc",
          caseInsensitive: true,
        },
      },
    ],

    "prettier/prettier": [
      "error",
      {
        tabWidth: 2,
        singleQuote: false,
        trailingComma: "es5",
        semi: false,
        bracketSpacing: true,
        arrowParens: "avoid",
        endOfLine: "auto",
        jsxSingleQuote: false,
      },
    ],

    "unused-imports/no-unused-imports": "error",
    "@typescript-eslint/no-use-before-define": ["error"],
    "no-case-declarations": "off",
  },
  settings: {
    jest: { version: 27 }, // fixes error where jest is needed
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
}
