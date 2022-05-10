"use-strict"

module.exports = {
  extends: [
    "preact",
    "plugin:jsx-a11y/recommended",
    "@ccc/eslint-config/configs/base",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      legacyDecorators: true,
      jsx: true,
    },
  },
  plugins: ["jsx-a11y"],
  rules: {
    "jsx-a11y/no-onchange": "off", // deprecated rule, will be deleted in a future release
  },
}
