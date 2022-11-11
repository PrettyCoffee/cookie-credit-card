"use-strict"

"use-strict"

const plugins = ["@typescript-eslint", "import", "unused-imports", "jsx-a11y"]

const configs = [
  "preact",
  "plugin:jsx-a11y/recommended",
  "eslint:recommended",
  "plugin:@typescript-eslint/eslint-recommended",
  "plugin:import/recommended",
  "plugin:import/typescript",
  "plugin:prettier/recommended",
]

module.exports = {
  parser: "@typescript-eslint/parser",
  extends: configs,
  env: {
    browser: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  plugins,
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
    "jsx-a11y/no-onchange": "off", // deprecated rule, will be deleted in a future release
  },
  settings: {
    jest: { version: 27 }, // fixes error where jest is needed
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"],
    },
  },
}
